


import { useEffect, useState } from "react";
import axios from "axios";
import '../OurTeam/OurTeam.css';

const OurTeam = () => {

    const [management, setManagement] = useState([]);
    const [corporateMembers, setcorporateMembers] = useState([]);

    useEffect(() => {
        axios.get(`https://api.jagatjit.com/api/management `)
        .then(response => {
            console.log('fff',response);
            setManagement(response.data.management)
            setcorporateMembers(response.data.corporateMembers)
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
    }, [])

    return(
        <div style={{marginTop:'10%'}}>
           <h1 className='reportHeading'>Our Management Team</h1>
           <div className='reportmainDiv'>
           {management.map((el,index) => (
                <div key={index} className="teamMemberDiv">
                    <img src={el.team_image} alt="Team" className="TeamMember"/>
                    <div className="teamnameDiv">
                    <h1 className="teamMemberName">{el.designation}</h1>
                    <h1 className="teamMemberName">{el.name}</h1>
                    </div>
                    <div className="hoverEffect">
                        <h1 className="teamMemberName">{el.designation}</h1>
                        <h1 className="teamMemberName">{el.name}</h1>
                        <p className="hoverText">Total Experience: {el.experience}+ Years </p>
                        <p className="hoverText">Education:{el.education}</p>
                        <p className="hoverText">Time With JIL: {el.joined_at}+ Years(Since 2019)</p>
                    </div>
                </div>
            ))}
           </div>

           <h1 className='reportHeading' style={{marginTop:'5%'}}>Corporate Members</h1>
           <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', marginTop:'5%', marginBottom:'5%'}}>
            {corporateMembers.map((er) => (
                <div style={{width:'20%'}}>
                    <p>{er.designation}</p>
                    <h1 style={{marginBottom:'0%'}}>{er.name}</h1>
                    <p>Total Experience: {er.experience}+ Years</p>
                    <p>Time With JIL: {er.order===1 ? 2 : er.order=== 2 ? 4 : 4}+ Years</p>
                    <p>Contact: {er.contact_mail}</p>
                </div>
            ))}
           </div>

        </div>
    )
};

export default OurTeam;