
import React, { useEffect, useRef, useState } from 'react';
import '../DateOfBirth/DateOfBirth.css'
import logo from '../../Assets/LogoIcon.png'
import { Link, useNavigate } from 'react-router-dom';

function DateOfBirth() {
    let dates = {};
    try {
        const data = localStorage.getItem("date");
        if (data) {
            dates = JSON.parse(data);
        }
    } catch (error) {
        console.error("Error parsing data from localStorage:", error);
    }
    const [day, setDay] = useState(dates?.day || '');
    const [month, setMonth] = useState(dates?.month || '');
    const [year, setYear] = useState(dates?.year || '');
    const monthInputRef = useRef(null);
    const yearInputRef = useRef(null);
    const navitage = useNavigate();

    const ne = new Date();
    const years = ne.getFullYear();

    useEffect(() => {
        const value = parseInt(years) - parseInt(year)
        if ( value >= 21 && year.length === 4 && month.length === 2 && day.length === 2) {
        const data ={'day':day, 'month': month, 'year': year}
        localStorage.setItem("date",JSON.stringify(data));
            navitage('/home')
        }
        if (day.length === 2) {
            monthInputRef.current.focus();
        }
        if (month.length === 2) {
            yearInputRef.current.focus();
        }
    }, [year,day,month])

    const checkBoxClick = () => {
        const data ={'day':day, 'month': month, 'year': year}
        localStorage.setItem("date",JSON.stringify(data))

    }

    return (
        <div className='loginMainDivDob'> 
            <div className='loginDiv'>
                <img src={logo} alt='logo' className='logo' />
            </div>
            <div className='dobheadingDiv'>
                <h1 className='dobheading'>To Access our websites you must be of legal age for</h1>
                <h1 className='dobheading'>consuming alcohol.</h1>
                
            </div>
            <div>
            <h1 className='dobparagraph'>Your Date of Birth:</h1>
                <div className='dobinputFields'>
                <input
                    type='number'
                    id='day'
                    required
                    autoComplete='on'
                    placeholder='DD'
                    min="01"
                    max="31"
                    value={day}
                    className='dateDiv'
                    onChange={(e) => {
                        const inputValue = e.target.value.slice(0, 2);
                        if (/^\d*$/.test(inputValue) && parseInt(inputValue) >= 0 && parseInt(inputValue) <= 31) {
                            setDay(inputValue);
                        } else if (inputValue === '') {
                            setDay('');
                        }
                    }}
                    onKeyDown={(e) => {
                        // Allow numeric characters, backspace, and delete keys
                        if (
                            !(
                                (e.key >= '0' && e.key <= '9') ||
                                e.key === 'Backspace' ||
                                e.key === 'Delete' ||
                                e.key === 'ArrowLeft' ||
                                e.key === 'ArrowRight' ||
                                e.key === 'Tab'
                            )
                        ) {
                            e.preventDefault();
                        }
                    }}
                    // onChange={(e) => setDay(e.target.value.slice(0, 2))}
                />
                <input
                    type='number'
                    ref={monthInputRef}
                    id='month'
                    required
                    autoComplete='on'
                    placeholder='MM'
                    min="01"
                    max="12"
                    value={month}
                    className='dateDiv'
                    onChange={(e) => {
                        const inputValue = e.target.value.slice(0, 2);
                        if (/^\d*$/.test(inputValue) && parseInt(inputValue) >= 0 && parseInt(inputValue) <= 12) {
                            setMonth(inputValue);
                        } else if (inputValue === '') {
                            setMonth('');
                        }
                    }}
                    onKeyDown={(e) => {
                        // Allow numeric characters, backspace, and delete keys
                        if (
                            !(
                                (e.key >= '0' && e.key <= '9') ||
                                e.key === 'Backspace' ||
                                e.key === 'Delete' ||
                                e.key === 'ArrowLeft' ||
                                e.key === 'ArrowRight' ||
                                e.key === 'Tab'
                            )
                        ) {
                            e.preventDefault();
                        }
                    }}
                    // onChange={(e) => setMonth(e.target.value.slice(0, 2))}
                />
                <input
                    type='number'
                    ref={yearInputRef}
                    id='year'
                    required
                    autoComplete='off'
                    placeholder='YYYY'
                    min="1900"
                    max="2022"
                    value={year}
                    className='dateDiv'
                    onChange={(e) => setYear(e.target.value.slice(0,4))}
                />
                </div>
                <div className='remeberBoxDiv'>
                    <input type='checkbox' className='checkbox' id='checkboxId' onClick={() => checkBoxClick()} />
                    <label htmlFor='checkboxId' className='dobRemember'>Remember Me</label>
                </div>
 

            </div>
            <div>
            <div className='dobRights'>
                    <p className='firstParagraphdobFooterRights'>All rights reserved. All other trademarks and trade names are properties of their respective owners.</p>
                    <p className='secondParagraphdobFooterRights'>TO FIND OUT MORE ABOUT RESPONSIBLE CONSUMPTION. VISIT <Link to='https://www.responsibility.org/' className='ancherTag'>RESPONSIBILITY.ORG</Link> AND <Link to='https://ourthinkingaboutdrinking.com/' className='ancherTag'>OURTHINKINGABOUTDRINKING.COM</Link></p>
                    <p className='thirdParagraphdobFooterRights'>Please do not share or forward with anyone under the legal drinking age.</p>
                </div>
            </div>
        </div>
    )
}

export default DateOfBirth;