import React from 'react'
import { works } from '../data/works'
import { Link } from 'react-router-dom'

export const Portfolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portfolio</h1>
      <hr></hr>
      <div className='portfolio-container'>
      {
        works.map(work => {
          return (
            <article key={work.id} className='work-card'>
              <span className='work-category'>{work.categorias}</span> 
              <h2 className='work-title'><Link to={"/proyecto/"+work.id}>{work.nombre}</Link></h2>
              <h3 className='work-tech'>{work.tecnologias}</h3>
            </article>
          )
          
        })
      }
      </div>
    </div>
  )
}
