import React from 'react';
import '../styles/AboutUs.css'; // Importe o arquivo CSS para estilização
import dev1 from '../img/dev-matheus.jpeg';


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className='project-container'>
        <div className='objetivos-container'>
          <div className='objetivos'>
            <h5><strong>Objetivos do Projeto</strong></h5>
          </div>
          <div className='objetivos'>
          <h5><strong>Objetivos do FrioLil's</strong></h5>
          </div>
        </div>
        <div className='dev-container'>
          <div class="circle">
            <img src={dev1} alt="Dev-Matheus" />
            <p></p>
          </div>
          <div class="circle">
            <img src={dev1} alt="Dev-Matheus" />
          </div>
          <div class="circle">
            <img src={dev1} alt="Dev-Matheus" />
          </div>
          <div class="circle">
            <img src={dev1} alt="Dev-Matheus" />
          </div>
          <div class="circle">
            <img src={dev1} alt="Dev-Matheus" />
          </div>
          <div class="circle">
            <img src={dev1} alt="Dev-Matheus" />
          </div>
         
        </div>
      </div>

      <div className='patrocinio-container'>Patrocinio</div>

    </div>
  );
};

export default AboutUs;

