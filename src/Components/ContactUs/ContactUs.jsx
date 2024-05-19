
import React, { useState } from 'react';
import axios from 'axios';
import '../ContactUs/ContactUs.css'
import { CiLocationOn } from "react-icons/ci";
import { FiMail } from "react-icons/fi";
import { GrPhone } from "react-icons/gr";
import mapImg from '../../Assets/ContactUs/Rectangle.png';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    body: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      formErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.body) {
      formErrors.body = 'Body is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('https://api.jagatjit.com/api/contact', formData);
        setMessage('Form submitted successfully!');
        setFormData({ name: '', email: '', body: '' }); // Clear form after successful submission
        navigate("/");
      } catch (error) {
        setMessage(`Error: ${error.response ? error.response.data : 'Network Error'}`);
      }
    }
  };

  return (
    <div className='container'>
      <div className='contactContactmain'>
        <div className='contactContact' >
          <h1 className='contactHeading'>Get in Touch with Us</h1>
          <p className='contactusParagraph'><GrPhone className='contacticons' /><a href="tel:0181-2783112" style={{ textDecoration: 'none', color: 'white' }}>0181-2783112</a></p>
          <p className='contactusParagraph'><FiMail className='contacticons' /> <a href="mailto:jil@jagatjit.com" style={{ textDecoration: 'none', color: 'white' }}>jil@jagatjit.com</a></p>
          <div style={{ display: 'flex', flexDirection: 'row' }}><CiLocationOn className='contacticons' size={28} style={{ marginTop: '25px', marginLeft: '20px', marginRight: '-15px' }} /><p className='contactusParagraph'> <a href="https://maps.app.goo.gl/LAcFgCDhUC7ajYTXA" style={{ textDecoration: 'none', color: 'white' }}>Jagatjit Nagar, Hamira, Kapurthala Dist, 144802, Punjab, India.</a></p></div>
        </div>
        <div>
          <h1 className='inputFieldHeading'>Fill in the details and we'll</h1>
          <h1 className='inputFieldHeading'>get right back to you.</h1>
          <form onSubmit={handleSubmit}>
            <div style={{ marginTop: '6%' }}>
              {/* <label>Name:</label> */}
              <input
                className='inputField'
                type="text"
                placeholder='Name'
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ width: '100%', padding: '15px 20px' }}
              />
              {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
            <div>
              {/* <label>Email:</label> */}
              <input
                className='inputField'
                type="email"
                placeholder='Email'
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ width: '100%', padding: '15px 20px' }}
              />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div>
              {/* <label>Body:</label> */}
              <textarea
                className='textareainput'
                name="body"
                placeholder='What would you ike to know about?'
                cols={30}
                rows={5}
                style={{ backgroundColor: 'black', color: 'white', width: '100%', padding: '15px 20px' }}
                value={formData.body}
                onChange={handleChange}

              />
              {errors.body && <p style={{ color: 'red' }}>{errors.body}</p>}
            </div>
            <button className='submitBtn' type="submit">Submit</button>
          </form>
        </div>
      </div>
      {message && <p>{message}</p>}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5%', marginBottom: '5%' }}>
        <img src={mapImg} alt='mapImg' style={{ maxWidth: '80%' }} />
      </div>

    </div>
  );
};

export default ContactUs;