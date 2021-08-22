// Necesito React para construir el componente y uttilizar JSX
import React from 'react';
import confLogo from '../images/badge-header.svg'
//Importar css
import "./styles/Badge.css"
// defino una clase que usa la clase React.Components
class Badge extends React.Component {
  //Todos los componentes requieren el método render
  render() {
    return (
      <article className="Badge">
        <section className="Badge__header">
          <img src={confLogo} alt="Conference Logo" />
        </section>
        <section className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={`https://s.gravatar.com/avatar/ea8a45bd8475f4af372239e4a0a28d96?s=80`}
            alt="Avatar"
          />
          <h1>
            Jorge <br /> Niglia
          </h1>
        </section>
        <section className="Badge__section-info">
          <h3>Material Enginner</h3>
          <div>@JorgeNiglia</div>
        </section>
        <section className="Badge__footer">#platziConf</section>
      </article>
    )
  }
}
//Exporto el componente para que este disponible para usar
export default Badge;
