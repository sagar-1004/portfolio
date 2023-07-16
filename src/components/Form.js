import "./FormStyles.css"
import emailjs from '@emailjs/browser';
import React, {useRef} from 'react'

const Form = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ch1dr45', 'template_g1ey9ta', form.current, 'A-c8ix6SMB6Up6R0C')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

  return (
      <div className="form">
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
        <input type="email" name="user_email" />
        <label>Subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea name="message" />
        <button className="btn">Submit </button>
      
    </form>
    
    </div>
  )
}

export default Form


