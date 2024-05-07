
import React, { useEffect, useState } from 'react';
import './Login.css'
import logo from '../../Assests/LogoIcon.png'

function Login() {
    const [date, setDate] = useState(localStorage.getItem('date') || '');
    const ne = new Date();
    const years = ne.getFullYear();
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    useEffect(() => {
        console.log('date', date.length);
        if (date.length >= 10 && (years - year) >= 18) {
            console.log('its move to home page');
            // Move to the home page
        }
    }, [date])

    const checkBoxClick = () => {
        console.log('ites clikk', date)
        localStorage.setItem('date', date);
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
        const birthday = new Date(e.target.value);
        const today = new Date();
        const age = today.getFullYear() - birthday.getFullYear();
        if (age >= 18) {
            console.log('adult');
        } else {
            console.log('child');
        }
    };

    // const verifyDate = (e) => {
    //     setDate(e.target.value);
    // const ne = new Date();
    // const year = ne.getFullYear();
    // console.log(year);
    // const dateObj = new Date(date);
    // const year = dateObj.getFullYear();
    // console.log(year);
    //     if (ne - date > 18) {
    //         console.log('adult')
    //     }
    //     else {
    //         console.log('child')
    //     }
    // }

    return (
        <div className='loginMainDiv'>
            <div className='loginDiv'>
                <img src={logo} alt='logo' className='logo' />
            </div>
            <div>
                <h1>To Access our websites you must be of legal age for</h1>
                <h1>consuming alcohol.</h1>
            </div>
            <div>
                <h1>Your Date of Birth:</h1>
                <input type='date' className='dateDiv' value={date} onChange={handleDateChange} />
                <div className='remeberBoxDiv'>
                    <input type='checkbox' className='checkbox' id='checkboxId' onClick={() => checkBoxClick()} />
                    <label htmlFor='checkboxId'>Remember Me</label>
                </div>

            </div>
            <div>
                <div className='footerRights'>
                    <p className='firstParagraphInFooterRights'>All rights reserved. All other trademarks and trade names are properties of their respective owners.</p>
                    <p className='secondParagraphInFooterRights'>TO FIND OUT MORE ABOUT RESPONSIBLE CONSUMPTION</p>
                    <p className='secondParagraphInFooterRights'>VISIT <a href='https://www.responsibility.org/' className='ancherTag'>RESPONSIBILITY.ORG</a> AND <a href='https://ourthinkingaboutdrinking.com/' className='ancherTag'>OURTHINKINGABOUTDRINKING.COM</a></p>
                    <p className='thirdParagraphInFooterRights'>Please do not share or forward with anyone under the legal drinking age.</p>
                </div>
            </div>
        </div>
    )
}

export default Login;