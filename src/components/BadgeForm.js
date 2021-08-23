import React from 'react';

class BadgeForm extends React.Component {
  state = {}
  // props.onChange = e => {
  //   /* console.log({
  //     name: e.target.name,
  //     value: e.target.value,
  //   }); */
  //   this.setState({
  //     [e.target.name]: e.target.value})
  // };
  handleClick = e => {
    console.log('Button was clicked');
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value = {this.props.formValues.firstName}
            />
          </div>
          <div className="mb-3">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value = {this.props.formValues.lastName}
            />
          </div>
          <div className="mb-3">
            <label>e-mail</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value = {this.props.formValues.email}
            />
          </div>
          <div className="mb-3">
            <label>Job Title </label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value = {this.props.formValues.jobTitle}
            />
            <div className="mb-3">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value = {this.props.formValues.twitter}
            />
          </div>
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;