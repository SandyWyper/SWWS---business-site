import React, { Component } from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (!emailIsValid(this.state.email)) {
      alert('invalid email, please check for typing mistakes.');
      return;
    }
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': form.getAttribute('name'), ...this.state })
    })
      .then(() => navigate(form.getAttribute('action')))
      .then(() => {
        if (this.props.menuToggle !== undefined) {
          this.props.menuToggle();
        }
        return;
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <p>{this.props.prompt}</p>
        <form
          className="w-full max-w-xl"
          method="post"
          name="Tinderbox-contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          action="/thankyou/"
        >
          <input type="hidden" name="bot-field" value="Tinderbox-contact" />

          <div>
            <div className="w-full mb-6">
              <label className="mb-2" htmlFor="name">
                Name*
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-2 leading-tight border-2 appearance-none bg-theme-white border-theme-two focus:outline-none focus:border-theme-three"
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div>
            <div className="w-full mb-6">
              <label className="mb-2" htmlFor="company-name">
                Company name
              </label>
              <input
                type="text"
                name="company-name"
                id="company-name"
                className="w-full px-4 py-2 leading-tight border-2 appearance-none bg-theme-white border-theme-two focus:outline-none focus:border-theme-three"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="w-full mb-6">
            <label htmlFor="email" className="mb-2">
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 leading-tight border-2 appearance-none bg-theme-white border-theme-two focus:outline-none focus:border-theme-three"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="w-full mb-6">
            <label className="mb-2" htmlFor="message">
              Enquiry*
            </label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className="w-full px-4 py-2 leading-tight border-2 appearance-none bg-theme-white focus:outline-none border-theme-two focus:border-theme-three"
              onChange={this.handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-6 sm:flex md:items-center">
            <div className="mb-4 sm:mb-0 sm:mr-2 sm:w-1/2">
              <input
                type="submit"
                value="Send Message"
                className="w-full px-4 py-2 font-semibold tracking-wider rounded shadow cursor-pointer text-theme-white hover:shadow-lg focus:shadow-xl hover:bg-theme-black bg-theme-two focus:outline-none focus:bg-gray-900 focus:text-white"
              />
            </div>
            <div className="sm:ml-2 sm:w-1/2">
              <input
                type="reset"
                value="Reset"
                className="w-full px-4 py-2 font-semibold tracking-wider rounded shadow cursor-pointer text-theme-white hover:shadow-lg focus:shadow-xl hover:bg-theme-black bg-theme-two focus:outline-none focus:bg-gray-900 focus:text-white"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  menuToggle: PropTypes.func,
  prompt: PropTypes.string
};

export default ContactForm;
