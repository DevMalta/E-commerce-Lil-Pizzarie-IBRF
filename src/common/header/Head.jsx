import React from "react"

const Head = () => {
  return (
    <section className='head'>
      <div className='container d_flex'>
        <div className='left-row'>
          <i className='fa fa-phone'></i>
          <label> +88012 3456 7894</label>
          <i className='fa fa-envelope'></i>
          <label> lil_pizzarie@vamonessa.com</label>
        </div>
        <div className='right-row RText'>
          <label>FAQ's</label>
          <label>Precisa de Ajuda?</label>
          <span>🏳️‍⚧️</span>
          <label>PT-BR</label>
          <span>🏳️‍⚧️</span>
          <label>ENG</label>
        </div>
      </div>
    </section>
  )
}

export default Head
