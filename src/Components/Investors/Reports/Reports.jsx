


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Reports/Reports.css';
import noteImg from '../../../Assets/Reports/noteImg.png';
import { GrPhone } from "react-icons/gr";
import { HiSortDescending } from "react-icons/hi";
import { CiFilter } from "react-icons/ci";


const Report = () => {
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
        console.log('response', response);
        if (response.data && Array.isArray(response.data)) {
          let data = response.data.filter(report => new Date(report.file_date).getFullYear() === parseInt(year));
          data = data.sort((a, b) => new Date(b.file_date) - new Date(a.file_date));
          setReports(data);
          setFilteredReports(data);
        } else if (response.data && Array.isArray(response.data.data)) {
          let data = response.data.data.sort((a, b) => new Date(b.file_date) - new Date(a.file_date));
          setReports(data);
          setFilteredReports(data);
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

    // Sort the filtered reports from newest to oldest
    filtered = filtered.sort((a, b) => new Date(b.file_date) - new Date(a.file_date));

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
    <div className='reportsMainDiv'>
      <div className='reportMainheadDiv'>
        <h1 className='reportHeading'>Report and Policies</h1>
        <p className='reportPara'>Our yearly reports</p>
      </div>
      <div className='reportInputFieldDiv'>
        <input placeholder='Search Reports' type="text" value={fileName} onChange={(e) => setFileName(e.target.value)} className='reportinputField searchBar' />
        {/* <input placeholder='By Year' type="number" value={year} onChange={handleYearChange} className='reportinputField' /> */}
        {/* <div style={{ position: 'relative', display: 'inline-block' }}>
    <input 
        placeholder='By Year' 
        type="number" 
        value={year} 
        onChange={handleYearChange} 
        className='reportinputField' 
        style={{ paddingRight: '30px' }} 
    />
    <select 
        className='yearDropdown' 
        onChange={handleYearChange} 
        style={{ position: 'absolute', top: 0, right: 0, padding: '5px' }}
    >
        {[...Array(new Date().getFullYear() - 1943).keys()].map((index) => (
            <option key={index} value={1944 + index}>{1944 + index}</option>
        ))}
    </select>
    <div style={{ position: 'absolute', top: '50%', right: '5px', transform: 'translateY(-50%)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M7 10l5 5 5-5z" />
        </svg>
    </div>
</div> */}
        <div style={{ position: 'relative', display: 'inline-block' }} >
          <select
            className='reportinputField'
            onChange={handleYearChange}
            style={{ paddingRight: '30px',  appearance: 'none' }} // Adjust the padding to accommodate the icon
          >
            <option value="" disabled selected>By Year</option>
            {[...Array(new Date().getFullYear() - 1943).keys()].map((index) => (
              <option key={index} value={1944 + index}>{1944 + index}</option>
            ))}
          </select>
          <div style={{ position: 'absolute', top: '50%', right: '5px', transform: 'translateY(-50%) translateX(-60%)' }}>
            {/* Place your icon component or HTML here */}
            <CiFilter style={{color:'black', fontSize:'21px'}}/>
          </div>
        </div>



        {/* <div style={{ position: 'relative' }}>
    <input 
        placeholder='By Year' 
        type="number" 
        value={year} 
        onChange={handleYearChange} 
        className='reportinputField' 
        style={{ paddingRight: '30px' }} 
    />
        <div style={{ position: 'absolute', top: '50%', right: '5px', transform: 'translateY(-50%)' }}>
        <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
    </div>
    <div style={{ position: 'absolute', top: '50%', right: '5px', transform: 'translateY(-60%) translateX(-60%)' }}>
        <GrPhone className='icons' />
    </div>
</div> */}
        {yearError && <span style={{ color: 'red' }}>{yearError}</span>}
        {/* <input placeholder='By Month' type="number" value={month} onChange={handleMonthChange} className='reportinputField' /> */}
        <div style={{ position: 'relative', display: 'inline-block' }} className='reportinputField'>
          <select
            placeholder='By Month'
            value={month}
            onChange={handleMonthChange}
            className='reportinputField'
            style={{ paddingRight: '30px', appearance: 'none', backgroundImage: `url('path_to_custom_icon.svg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center' }}
          >
            <option value="" disabled selected>By Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <div style={{ position: 'absolute', top: '50%', right: '5px', transform: 'translateY(-50%) translateX(-60%)' }}>
            {/* Place your icon component or HTML here */}
            <CiFilter style={{color:'black', fontSize:'21px'}}/>
          </div>
        </div>

        {monthError && <span style={{ color: 'red' }}>{monthError}</span>}
        {/* <input placeholder='Category' type="number" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className='reportinputField' /> */}
        <div style={{ position: 'relative', display: 'inline-block' }} className='reportinputField'>
          <select
            placeholder='Category'
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className='reportinputField'
            style={{ paddingRight: '30px', appearance: 'none', backgroundImage: `url('path_to_custom_icon.svg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center' }}
          >
            <option value="" disabled selected>Category</option>
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option>
            <option value="4">Category 4</option>
          </select>
          <div style={{ position: 'absolute', top: '50%', right: '5px', transform: 'translateY(-50%) translateX(-60%)' }}>
            {/* Place your icon component or HTML here */}
            <HiSortDescending  style={{color:'black', fontSize:'21px'}}/>
          </div>
        </div>

      </div>
      <div className='reportmainDiv'>
        {Array.isArray(filteredReports) && filteredReports.length > 0 ? (
          filteredReports.map((report, idx) => (
            <div key={idx} className='reportDiv'>
              <a href={report.file_url} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                <img src={noteImg} alt='report' className='reportImg' />
                <h1 style={{ marginBottom: '0%', color: 'white' }}>{report.file_name}</h1>
                <p style={{ color: 'white' }}>{report.file_date}</p>
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

export default Report