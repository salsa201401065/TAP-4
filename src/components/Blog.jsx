import React, {useState} from 'react'
import PropTypes from "prop-types";

function Blog(props) {
  const [blog] = useState([
    {
      title: "Pemanfaatan Teknologi untuk Informasi Broadcast Kegiatan Administrasi Sekolah Madrasah Ibtidaiyah 	Swasta (MIS) Luqman 	Al-Hakim Yayasan Pondok Pesantren Hidayatullah Medan",
      year: "July 2022",
      desk: "Membuat website yang membantu sekolah Madrasah Ibtidaiyah Swasta (MIS) Luqman Al-Hakim menangani proses administrasi sekolah",
    },
    {
      title: "Sistem Informasi Sekolah Harum Sentosa Baru",
      year: "September 2022",
      desk: "Membuat website yang membantu sekolah Harum Sentosa Baru menangani proses administrasi sekolah",
    },
    
  ]);
  return (
    <>
      {blog.slice(props.data1, props.data2).map((item, index) => (
  <div className="card text-left mb-3" key={index}>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.desk}</p>
  </div>
  <div className="card-footer text-muted">
    {item.year}
  </div>
</div>
))}
    </>

  )
}

Blog.propTypes = {
  data1: PropTypes.number,
  data2: PropTypes.number,
};

export default Blog