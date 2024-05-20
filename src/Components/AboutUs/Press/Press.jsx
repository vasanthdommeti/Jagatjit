

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Press/Press.css';

const Press = () => {

    const [news, setNews] = useState([]);
    const [achievement, setAchievement] = useState([]);

    useEffect(() => {
        axios.get(`https://api.jagatjit.com/api/news`)
        .then(response => {
          console.log('response',response);
            setNews(response.data.news)
            setAchievement(response.data.achievement)
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
    }, []) 

    return( 
        <div style={{marginTop:'10%', marginBottom:'5%'}}>
           <div>
           <h1 className='reportHeading'>News</h1>
          <p className='reportPara'>The inside Sip: Company Updates</p>
           </div>
           <div className='newsmainDiv'>
           {news.map((el,index) => (
                <div key={index} className="newsDiv">
                  <img src={el.news_image} alt="image" className="newsImg"/>
                  <p><Link to={el.link} className="newsPara">
                  {el.name}
                  </Link></p>
                    {/* <h1>{el.name}</h1> */}
                </div>
            ))}
           </div>

           <div style={{marginTop:'10%'}}>
           <h1 className='reportHeading'>Achievements</h1>
          <p className='reportPara'>Our Awards</p>
           </div>
           <div className='newsmainDiv bottomnewsDiv'>
           {achievement.map((el,index) => (
                <div key={index} className="newsDiv">
                  <img src={el.achievement_image} alt="image" className="newsImg"/>
                  <p><Link to={el.link} className="newsPara">
                  {el.name}
                  </Link></p>
                    {/* <h1>{el.name}</h1> */}
                </div>
            ))}
           </div>

        </div>
    )
};

export default Press;