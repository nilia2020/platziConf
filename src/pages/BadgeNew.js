import React from "react";
import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import BadgeForm from '../components/BadgeForm'
import Badge from "../components/Badge";
class BadgeNew extends React.Component {
  state = {form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  }}

  handleChange = e  => {
    
    //copio el estado del formulario para no perder por sobreescribir
   /*  const nextForm = this.state.form
    nextForm[e.target.name] = e.target.value */
    //otra forma

    this.setState ({
      //form: nextForm,
      form:{
        ...this.state.form,
      [e.target.name]: e.target.value,
    },
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <section className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </section>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://s.gravatar.com/avatar/ea8a45bd8475f4af372239e4a0a28d96?s=80=identicon"
              />
            </div>

            <div className="col-6">
                <BadgeForm
                onChange= {this.handleChange}
                formValues = {this.state.form}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeNew;
