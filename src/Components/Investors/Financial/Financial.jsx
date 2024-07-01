import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Reports/Reports.css';
import noteImg from '../../../Assets/Reports/noteImg.png';
import { GrPhone } from "react-icons/gr";
import { HiSortDescending } from "react-icons/hi";
import { CiFilter } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

const Report = () => {
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [fileName, setFileName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [monthError, setMonthError] = useState('');
  const [yearError, setYearError] = useState('');

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    axios.get('https://api.jagatjit.com/api/financials')
      .then(response => {
        console.log("response", response);
        if (response.data && Array.isArray(response.data.data)) {
          let data = response.data.data.sort((a, b) => new Date(b.file_date) - new Date(a.file_date));
          setReports(data);
          setFilteredReports(data);

          const result = data.reduce((acc, item) => {
            let category = acc.find(cat => cat.name === item.category_name);
            if (!category) {
                category = { name: item.category_name, data: [] };
                acc.push(category);
            }
            category.data.push({
                id: item.id,
                file_name: item.file_name,
                file_description: item.file_description,
                file_date: item.file_date,
                file_url: item.file_url
            });
            return acc;
          }, []);

          console.log("result", result);

          // Extract unique category names
          const uniqueCategories = [...new Set(data.map(report => report.category_name))];
          setCategories(uniqueCategories);
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
    if (categoryName) {
      filtered = filtered.filter(report => report.category_name === categoryName);
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
  }, [fileName, categoryName, month, year, reports]);

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
        <h1 className='reportHeading'>Financial</h1>
        <p className='reportPara'>Our yearly reports</p>
      </div>
      <div className='reportInputFieldDiv reportinputField'>
        <div className="search-container">
          <input placeholder='Search Reports' type="text" value={fileName} onChange={(e) => setFileName(e.target.value)} className='reportinputField searchBar' />
          <i className="icon search-icon"> <IoIosSearch style={{ color: 'black', fontSize: '21px' }} /></i>
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }} className='reportinputField'>
          <select
            className='reportinputField'
            onChange={handleYearChange}
            style={{ paddingRight: '30px', appearance: 'none' }}
          >
            <option value="" disabled selected>By Year</option>
            {[...Array(new Date().getFullYear() - 1943).keys()].map((index) => (
              <option key={index} value={new Date().getFullYear() - index}>
                {new Date().getFullYear() - index}
              </option>
            ))}
          </select>
          <div style={{ position: 'absolute', top: '50%', right: '5px', transform: 'translateY(-60%) translateX(-10%)' }}>
            <CiFilter style={{ color: 'black', fontSize: '21px' }} />
          </div>
        </div>
        {yearError && <span style={{ color: 'red' }}>{yearError}</span>}
        <div style={{ position: 'relative', display: 'inline-block' }} className='reportinputField'>
          <select
            value={month}
            onChange={handleMonthChange}
            className='reportinputField'
            style={{ paddingRight: '30px', appearance: 'none' }}
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
          <div style={{ position: 'absolute', top: '50%', right: '5px', transform: 'translateY(-60%) translateX(-10%)' }}>
            <CiFilter style={{ color: 'black', fontSize: '21px' }} />
          </div>
        </div>
        {monthError && <span style={{ color: 'red' }}>{monthError}</span>}
        <div style={{ position: 'relative', display: 'inline-block' }} className='reportinputField'>
          <select
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className='reportinputField'
            style={{ paddingRight: '30px', appearance: 'none' }}
          >
            <option value="" disabled selected>Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div style={{ position: 'absolute', top: '50%', right: '5px', transform: 'translateY(-60%) translateX(-10%)' }}>
            <HiSortDescending style={{ color: 'black', fontSize: '21px' }} />
          </div>
        </div>
        {/* {console.log("categories",categories)} */}
      </div>
      <div className='reportmainDiv'>
        {Array.isArray(filteredReports) && filteredReports.length > 0 ? (
          filteredReports.map((report, idx) => (
            <div key={idx} className='reportDiv'>
              <a href={report.file_url} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                <img src={noteImg} alt='report' className='reportImg' />
                <h1 style={{ marginBottom: '0%', color: 'white', marginRight: '10px' }}>{report.file_name}</h1>
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

export default Report;
