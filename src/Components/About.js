// import React from 'react'
// import Heading from './Heading';
// import '../App.css';

// const About = () => {
//   return (
//     <>
//     <Heading></Heading>
//     <div>
//        <h1>This is About Page</h1>
//     </div>
//     </>
//   )
// }

// export default About
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xaygjler");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function About() {
  return (
    <ContactForm />
  );
}
export default About;

