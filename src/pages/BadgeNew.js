import React from "react";
import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import BadgeForm from '../components/BadgeForm'
import Badge from "../components/Badge";
class BadgeNew extends React.Component {
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
                firstName="Jorge"
                lastName="Niglia"
                twitter="JorgeNiglia"
                jobTitle="Material Engineer"
                avatarUrl="https://s.gravatar.com/avatar/ea8a45bd8475f4af372239e4a0a28d96?s=80=identicon"
              />
            </div>

            <div className="col-6">
                <BadgeForm/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeNew;
