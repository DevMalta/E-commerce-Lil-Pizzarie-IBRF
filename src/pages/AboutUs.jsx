import React from 'react';
import '../styles/AboutUs.css';import dev1 from '../img/alex.jpeg';
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
import iGit from '../img/iGit.png';
import iVscode from '../img/iVscode.png';
import iNode from '../img/iNode.png';
import iBootstrap from '../img/iBoot.png';
import iTrello from '../img/iTrello.png';
import iDiscord from '../img/iDiscord.png';
import iCafe from '../img/iCafe.png';
import iReact from '../img/iReact.png';
import iMeet from '../img/iMeet.png';
import iGpt from '../img/iGpt.png';
import iFont from '../img/iFont.webp';
import iPer from '../img/iPer.webp';
import iW3 from '../img/iW3.svg';
import commit from '../img/commits.jpeg';


const AboutUs = () => {
  return (
    <div className='about-us-page'>
      <h1>Projeto Integrador</h1>
      <hr />
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

          <hr />

          <div className='devs'>
            <h2>Colaboradores:</h2>
          <div className='dev-container'>
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
                  <h4>Ynnaê</h4>
                  <p>Yellow Belt</p>
                </div>
          </div>
          <div className='group-off'>
              <div class="circle">
                <img src={dev4} alt="Dev-Hugo" />
              </div>
              <div className='dev-desc'>
                <h4>Hugo</h4>
              </div>
            </div>
            <div className='group-off'>
              <div class="circle">
                <img src={dev5} alt="Dev-Icaro" />
              </div>
              <div className='dev-desc'>
                <h4>Icaro</h4>
              </div>
            </div>
            <div className='group-off'>
              <div class="circle">
                <img src={dev6} alt="Dev-Leandro" />
              </div>
              <div className='dev-desc'>
                <h4>Leandro</h4>
              </div>
            </div>
            <div className='group-off'>
              <div class="circle">
                <img src={dev3} alt="Dev-Fabio" />
              </div>
              <div className='dev-desc'>
                <h4>Fabio</h4>
              </div>
            </div>
            
          </div>
            
          </div>

          <hr />

         <div className='func-container'>
         <div className='functions'>
              <h2>Funcionalidades</h2>
              <tr className='tr-functions'>
                <ul className="ul-functions">
                  <li>Lista de compras fixa na tela</li>
                  <li>Telas com responsividade</li>
                  <li>Tela de pagamentos dinamica</li>
                  <li>Valor da compra dinâmico</li>
                  <li>Api para consulta de Cep</li>
                  <li>Alteração de quantidades pelo item ou pelo carrinho</li>
                  <li>Modal com informações nutricionais</li>
                  <li>Contagem de avaliações</li>
                  <li>Média das avaliações por item</li>
                </ul>
              </tr>

            </div>

            <div className="vertical-line"></div>

            <div className='tolls-container'>
            <h2>Ferramentas</h2>
            <tr className='obj-tools'>
              <ul className='tools'>
                <li><img src={iVscode} alt='icone da marca' className='icone'/>{' VSCode'} </li >
                <li><img src={iNode} alt='icone da marca' className='icone'/>{' Node'} </li >
                <li><img src={iReact} alt='icone da marca' className='icone'/>{' React'} </li >
                <li><img src={iBootstrap} alt='icone da marca' className='icone'/>{' Bootstrap'} </li >
                <li><img src={iGpt} alt='icone da marca' className='icone'/>{' ChatGPT'} </li >
                <li><img src={iTrello} alt='icone da marca' className='icone'/>{' Trello'} </li >
                <li><img src={iMeet} alt='icone da marca' className='icone'/>{'iMeet'} </li >
                <li><img src={iDiscord} alt='icone da marca' className='icone'/>{' Discord'} </li >
                <li><img src={iGit} alt='icone da marca' className="icone" />{' GitHub'} </li >
                <li><img src={iPer} alt='icone da marca' className='icone'/>{' Perplexity'} </li >
                <li><img src={iFont} alt='icone da marca' className='icone'/>{' Font Awesome '} </li >
                <li><img src={iW3} alt='icone da marca' className='icone'/>{' W3 '} </li >
                <li><img src={iCafe} alt='icone da marca' className='icone'/>{' Muito café'} </li >
              </ul>
            </tr>
            </div>

             
          </div>
          <hr />
          <div>
            <h2>Ao todo foram 71 commits</h2>
          <img src={commit} alt='commit' className='commit'/>
          </div>

        </div>
        <div className="vertical-line"></div>
        <hc />
        <div className='patrocinio-container'>
        <h5><strong>Clientes:</strong></h5>
        <div className='icon-patrocinadores'>
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

