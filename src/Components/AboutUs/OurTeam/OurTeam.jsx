


import { useEffect, useState } from "react";
import axios from "axios";
import '../OurTeam/OurTeam.css';

const OurTeam = () => {

    const [management, setManagement] = useState([]);
    const [corporateMembers, setcorporateMembers] = useState([]);

    useEffect(() => {
        axios.get(`https://api.jagatjit.com/api/management `)
            .then(response => {
                setManagement(response.data.management)
                setcorporateMembers(response.data.corporateMembers)
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            }); 
    }, []);

    const calculateExperienceInYears = (joiningDate) => {
        // Parse the joining date in ISO 8601 format
        let joinDate = new Date(joiningDate);
        if (isNaN(joinDate)) {
            throw new Error("Invalid joining date");
        }

        // Get the current date
        let currentDate = new Date();

        // Calculate the difference in years, months, and days
        let years = currentDate.getFullYear() - joinDate.getFullYear();
        let months = currentDate.getMonth() - joinDate.getMonth();
        let days = currentDate.getDate() - joinDate.getDate();

        // Adjust months and years if necessary
        if (days < 0) {
            months--;
            // Calculate the number of days in the previous month
            let previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            days += previousMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        // Convert months and days to a fraction of a year
        let totalYears = years + (months / 12) + (days / 365.25);

        // Round down to the nearest whole number
        let roundedYears = Math.floor(totalYears);

        console.log('roundedYears', roundedYears);

        return `${roundedYears}+ years`;
    }

    return (
        <div className="ourTeamMainDiv">
            <h1 className='reportHeading'>Our Management Team</h1>
            <div className='reportmainDiv imageMainDiv' >
                {management.map((el, index) => (
                    <div key={index} className="teamMemberDiv">
                        <img src={el.team_image} alt="Team" className="TeamMember" />
                        <div className="teamnameDiv">
                            <h1 className="teamMemberName">{el.designation}</h1>
                            <h1 className="teamMemberName">{el.name}</h1>
                        </div>
                        <div className="hoverEffect" style={{ marginBottom: '20%' }}>
                            <h1 className="hoverText" style={{ fontSize: '16px', fontFamily: 'Josefin Sans', marginBottom: '0' }}>{el.designation}</h1>
                            <h1 className="hoverText" style={{ fontSize: '16px', fontFamily: 'Josefin Sans', marginBottom: '6px' }}>{el.name}</h1>
                            <p className="hoverText hoverTextData">Total Experience: {el.experience}+ Years </p>
                            <p className="hoverText hoverTextData">Education:{el.education}</p>
                            <p className="hoverText hoverTextData">Time With JIL: {calculateExperienceInYears(el.joined_at)}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h1 className='reportHeading' style={{ marginTop: '5%' }}>Corporate Members</h1>
            <div className="corporateMainDiv">
                {corporateMembers.map((er) => (
                    <div className="corporateDiv">
                        <p>{er.designation}</p>
                        <h1 style={{ marginBottom: '0%' }}>{er.name}</h1>
                        <p>Total Experience: {er.experience}+ Years</p>
                        <p>Time With JIL: {calculateExperienceInYears(er.joined_at)}</p>
                        <p>Contact: {er.contact_mail}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default OurTeam;