import React from 'react'
import vetor from "./img/vetor1.png"

export default function Home() {
  return (
    <div className='conteiner'>
      <header >
        <h3>menu</h3>
      </header>
      <main>
        <section className="topo">
          <div className="apresentacao">
            <div className="apresentacaoText">
              <h1 className="text">Hi, my </h1>
              <div className="textName">
                <h1 className="text">name is </h1>
                <h1><span>Diego.</span></h1>
              </div>

              <p>and i am Developer</p>
            </div>

          </div>
          <div className="right">
            <div className="apresentacaoImg">
              
              <img src={vetor} alt="" className="imgVector"/>
            </div>
            <div className="ilustracao">
              {/* <img src="./img/Rectangle 42.png" alt="" className="imgIlustracao"> */}
            </div>
          </div>

        </section>
      </main>

    </div>
  )
}