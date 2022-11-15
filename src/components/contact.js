import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className='contact-main'>
      <h1 className="contact"><i>Contact me</i></h1>
      <main className='content-wrapper'>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className='name-address'>
         <div className='contact-name-wrapper'>
          <label htmlFor="name" className='contact-name'>Name</label>
          <input placeholder="Name" className='input' type="text" name="name" defaultValue={name} onBlur={handleChange} />
         </div>
         <div className='contact-email-wrapper'>
          <label htmlFor="email" className='contact-email'>Email address</label>
          <input placeholder="Email" className='input' type="email" name="email" defaultValue={email} onBlur={handleChange} />
         </div>
        </div>
        <div className='message'>
        <div className='contact-message-wrapper'>
          <label htmlFor="message" className='contact-message'>Message</label>
          <textarea placeholder="Whats on your mind?" className='textarea-input' name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <div className='contact-submit-wrapper'>
        <button className='contact-submit' data-testid="button" type="submit">Submit</button>
      </div>
      </form>
      </main>
    </section>
  );
}

export default ContactForm;