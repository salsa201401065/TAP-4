import React from 'react'

function About() {
  return (
    <>
    <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://img.freepik.com/premium-vector/cute-girl-hijab-holding-flower-vector-illustration-muslim-girl-with-hijab-cartoon_226569-37.jpg?w=2000" className="img-thumbnail" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Salsabila Humairah</h5>
        <p className="card-text">My name is Salsabila Humairah and i'm 19 
                years old right now. I'm an active student at University of North Sumatera
                in Indonesia. My majority is computer science. I interest to front-end Development
                so i take Kampus Merdeka and choose Skilvul as my partner to
                learn frontend development more. I hope by my choice i can be a reliable frontend developer
                for making a nice website. And i would love to keep in touch with tou. Hit me up at my social media.
                See you!</p>
        <p className="card-text"><small className="text-muted">Active student @ University of North Sumatera</small></p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-header">
    Skills
  </div>
  <div class="card-body">
    <p class="card-text">
    <ul>
        <li>Javascript</li>
        <li>PHP</li>
        <li>C#</li>
        <li>Java</li>
    </ul>
    </p>
   
  </div>
</div>

<div class="card">
  <div class="card-header">
    Experiences
  </div>
  <div class="card-body">
    <p class="card-text">
    <ol>
        <li>Kepanitiaan
            <ul>
                <li>Panitia Penerimaan Mahasiswa Baru S-1 Ilmu Komputer USU 2021</li>
                <li>Panitia Dies Natalis Fasilkom-TI USU ke-10 2021</li>
                <li>Panitia Imilkom Sport Competition 2022</li>
                <li>Panitia Penerimaan Mahasiswa Baru S-1 Ilmu Komputer USU 2022</li>
            </ul>
        </li>
        <li>Pelatihan
            <ul>
                <li>July 2022: Pelatihan Dasar Organisasi</li>
                <li>Agustus 2022: Studi Independen Program MBKM Front End Development at Skilvul</li>
            </ul>
        </li>
        <li>Voluntary
            <ul>
                <li>April 2021: Mengajar di Desa Ndeskati</li>
            </ul>
        </li>
    </ol>
    </p>
   
  </div>
</div>


    </>
  )
}

export default About