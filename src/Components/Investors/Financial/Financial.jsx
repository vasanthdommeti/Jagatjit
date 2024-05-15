


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Reports/Reports.css';
import noteImg from '../../../Assets/Reports/noteImg.png';
import { GrPhone } from "react-icons/gr";

 
const Financial = () => {
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [fileName, setFileName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [monthError, setMonthError] = useState('');
  const [yearError, setYearError] = useState('');
 
  const currentYear = new Date().getFullYear();
 
  useEffect(() => {
    axios.get('https://api.jagatjit.com/api/financials')
      .then(response => {        
        if (response.data && Array.isArray(response.data)) {
          setReports(response.data);
          setFilteredReports(response.data);
        } else if (response.data && Array.isArray(response.data.data)) {
          setReports(response.data.data);
          setFilteredReports(response.data.data);
        } else {
          console.error('API response does not contain an array');
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
 
  const filterReports = () => {
    let filtered = reports;
 
    if (fileName) {
      filtered = filtered.filter(report => report.file_name.toLowerCase().includes(fileName.toLowerCase()));
    }
    if (categoryId) {
      filtered = filtered.filter(report => report.category_id === parseInt(categoryId));
    }
    if (month) {
      filtered = filtered.filter(report => new Date(report.file_date).getMonth() + 1 === parseInt(month));
    }
    if (year) {
      filtered = filtered.filter(report => new Date(report.file_date).getFullYear() === parseInt(year));
    }
 
    setFilteredReports(filtered);
  };
 
  useEffect(() => {
    filterReports();
  }, [fileName, categoryId, month, year]);
 
  const handleMonthChange = (e) => {
    const value = parseInt(e.target.value);
    if (value < 1 || value > 12) {
      setMonthError('Month must be between 1 and 12');
    } else {
      setMonthError('');
      setMonth(e.target.value);
    }
  };
 
  const handleYearChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > currentYear) {
      setYearError(`Year must not exceed ${currentYear}`);
    } else {
      setYearError('');
      setYear(e.target.value);
    }
  };
 
  return (
    <div style={{marginTop : '10%'}}>
<div style={{marginBottom:'5%'}}>
<h1 className='reportHeading'>Financial</h1>
      <p className='reportPara'>Our yearly reports</p>
</div>
      <div style={{display:'flex', justifyContent:'center'}}>

          <input placeholder='Search Reports' style={{width:'40%'}} type="text" value={fileName} onChange={(e) => setFileName(e.target.value)}  className='reportinputField'/>
          <input placeholder='By Year' type="number" value={year} onChange={handleYearChange} className='reportinputField'/>
          {yearError && <span style={{ color: 'red' }}>{yearError}</span>}

          <input  placeholder='By Month' type="number" value={month} onChange={handleMonthChange} className='reportinputField'/>
          {monthError && <span style={{ color: 'red' }}>{monthError}</span>}

          <input placeholder='Category' type="number" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className='reportinputField'/>
      </div>
      <div className='reportmainDiv'>
      {Array.isArray(filteredReports) && filteredReports.length > 0 ? (
            filteredReports.map((report, idx) => (
              <div key={idx} className='reportDiv'>
                <a href={report.file_url} target='_blank' rel='noopener noreferrer' style={{textDecoration : 'none'}}>
                    <img src={noteImg} alt='report'/>
                    <h1 style={{marginBottom:'0%', color : 'white'}}>{report.file_name}</h1>
                    <p style={{color : 'white'}}>{report.file_date}</p>
                </a>
              </div>
            ))
          ) : (
            <h1>No reports found</h1>
        )}
      </div>
    </div>
  );
};

export default Financial;