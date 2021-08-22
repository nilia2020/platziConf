// Necesito React para construir el componente y uttilizar JSX
import React from 'react';
import confLogo from '../images/badge-header.svg'
//Importar css
import "./styles/Badge.css"
// defino una clase que usa la clase React.Components
class Badge extends React.Component {
  //Todos los componentes requieren el método render
  render() {
    
    const {
        firstName,
        lastName,
        avatarUrl,
        jobTitle,
        twitter
    } = this.props
    return (
      <article className="Badge">
        <section className="Badge__header">
          <img src={confLogo} alt="Conference Logo" />
        </section>
        <section className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={avatarUrl}
            alt="Avatar"
          />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </section>
        <section className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </section>
        <section className="Badge__footer">#platziConf</section>
      </article>
    )
  }
}
//Exporto el componente para que este disponible para usar
export default Badge;
