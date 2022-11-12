import React, { useState } from 'react'
import PropTypes from "prop-types";


function Project(props) {
  const [project] = useState([
    {
      link: "https://portofolio-salsa.netlify.app/",
      title: "My Website",
      year: "September 2022",
      desk: "Website yang berisi portofolio dari Salsabila Humairah yang dibangun menggunakan HTML dan CSS",
    },
    {
      link: "https://tap-2-bmi-calculator.netlify.app/",
      title: "BMI Calculator",
      year: "September 2022",
      desk: "Website calculator untuk menghitung berat badan ideal yang dibangun menggunakan HTML,CSS, dan Javascript",
    },
    {
      link: "https://tap3-movie-list.netlify.app/",
      title: "TMDB Movie",
      year: "September 2022",
      desk: "Website yang berisi list movie terhits yang lengkapi dengan fitur search. Website ini dibangun menggunakan API,HTML, Javascript, dan CSS ",
    },
    {
      link: "https://ayf-fe4.netlify.app/",
      title: "ASEAN YOUTH FORUM",
      year: "Oktober 2022",
      desk: "Website yang digunakan oleh pemuda ASEAN untuk memposting threads seputar informasi yang dapat dipastikan ke validannya dan disertai dengan fitur search.Website ini dibangun menggunakan API,HTML, Javascript, dan CSS . ",
    },
    {
      link: "https://www.figma.com/proto/2zsye9e7gYAxEoccp8WoCA/UAS-IMK_047_065_KOM-B?node-id=53%3A254&scaling=scale-down&page-id=0%3A1&starting-point-node-id=15%3A11",
      title: "UI/UX Design Aestetic.co",
      year: "Desember 2021",
      desk: "Design a user an userinterface mobile application for woman that need help to consultate about beauty and buy some beauty stuff ",
    },
    {
      link: "https://www.figma.com/proto/UpBYTCCiR5YsGUdPf7phSI/Kenangan-HORAS?node-id=135%3A734&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1",
      title: "UI/UX Kenangan Horas",
      year: "July 2022",
      desk: "Design a user an userinterface mobile application for helping tourist that comes to Sumatera Utara knowing Sumut regional food ",
    },
  ]);
  return (
    <>
     {project.slice(props.data1, props.data2).map((item, index) => (
   <div className="card mb-3" key={index}>
   <div className="card-header">
     {item.year}
   </div>
   <div className="card-body">
     <h5 className="card-title">{item.title}</h5>
     <p className="card-text">{item.desk}</p>
     <a href={item.link} className="btn btn-primary">Check My Project</a>
   </div>
 </div>
 ))}
</>
  )
}

Project.propTypes = {
  data1: PropTypes.number,
  data2: PropTypes.number,
};



export default Project