import React from 'react';
import '../styles/AboutUs.css'; // Importe o arquivo CSS para estilização
import dev1 from '../img/alex.jpeg';
import dev2 from '../img/dev-matheus.jpeg';
import dev3 from '../img/dev-fabio.jpeg';
import dev4 from '../img/dev-hugo.png';
import dev5 from '../img/dev-icaro.png';
import dev6 from '../img/dev-leandro.png';
import prof from '../img/prof-josafa.jpeg';
import ybelt from '../img/yellow-belt.jpeg';
import logo1 from '../img/logo-brf.png';
import logo2 from '../img/logo-sadia.png';
import logo3 from '../img/logo-perdigao.png';
import logo4 from '../img/logo-qualy.png';
import logo5 from '../img/logo-gama.png';


const AboutUs = () => {
  return (
    <div className='about-us-page'>
      <h1>Projeto Integrador</h1>
      <div className="about-us-container">        
        <div className='project-container'>
          <div className='objetivos-container'>
            <div className='objetivos'>
              <h5><strong>Objetivos do Projeto</strong></h5>
              <p>O objetivo de aprendizagem
                para o desenvolvimento front-end de um e-commerce é
                adquirir as habilidades e conhecimentos necessários para
                criar interfaces de usuário atraentes, funcionais e
                responsivas para um site de comércio eletrônico.</p>
            </div>
            <div className='objetivos'>
            <h5><strong>Objetivos do FrioLil's</strong></h5>
            <p>O objetivo do FrioLil's foi construir um e-commerce moderno, eficiente e
              escalável, que atenda às demandas dos usuários, garantindo uma
              experiência ágil e responsiva, e que principalmente, trouxesse uma
              nova tela para as vendas dos produtos dos nossos patrocinadores</p>
            </div>
          </div>
          <div className='dev-container'>
            <h2>Equipe de Desenvolvimento:</h2>
            <div className='group-dev'>
              <div class="circle">
                <img src={dev1} alt="Dev-Alex" />
              </div>
              <div className='dev-desc'>
                <h4>Alex B.</h4>
                <p>Product Owner<br />
                    Dev. Master</p>
              </div>
            </div>
            <div className='group-dev'>
              <div class="circle">
                <img src={dev2} alt="Dev-Matheus" />
              </div>
              <div className='dev-desc'>
                <h4>Matheus M.</h4>
                <p>Designer Front-end<br />
                    Dev. Master</p>
              </div>
            </div>
            <div className='group-off'>
              <div class="circle">
                <img src={dev3} alt="Dev-Fabio" />
              </div>
              <div className='dev-desc'>
                <h4>Dev. Fabio</h4>
              </div>
            </div>
            <div className='group-off'>
              <div class="circle">
                <img src={dev4} alt="Dev-Hugo" />
              </div>
              <div className='dev-desc'>
                <h4>Dev. Hugo</h4>
              </div>
            </div>
            <div className='group-off'>
              <div class="circle">
                <img src={dev5} alt="Dev-Icaro" />
              </div>
              <div className='dev-desc'>
                <h4>Dev. Icaro</h4>
              </div>
            </div>
            <div className='group-off'>
              <div class="circle">
                <img src={dev6} alt="Dev-Leandro" />
              </div>
              <div className='dev-desc'>
                <h4>Dev. Leandro</h4>
              </div>
            </div>
            <div className='group-dev'>
                <div class="circle">
                  <img src={prof} alt="Josafá" />
                </div>
                <div className='dev-desc'>
                  <h4>Josafá N.</h4>
                  <p>Professor/Desenvolvedor<br />
                    Orientador de Projetos</p>
                </div>
            </div>
            <div className='group-dev'>
                <div class="circle">
                  <img src={ybelt} alt="Ynna" />
                </div>
                <div className='dev-desc'>
                  <h4>Ynna</h4>
                  <p>Yellow Belt</p>
                </div>
            </div>
            
          </div>
        </div>

        <div className='patrocinio-container'>
        <h5><strong>Patrocinadores:</strong></h5>
        <div>
          <img src={logo1} alt="IBRF" />
          <img src={logo2} alt="IBRF" />
          <img src={logo3} alt="IBRF" />
          <img src={logo4} alt="IBRF" />
          <img src={logo5} alt="IBRF" />



        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

