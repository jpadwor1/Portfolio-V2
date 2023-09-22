import React from 'react'
import { useFormik } from 'formik';
import './ContactForm.css'

function ContactForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      return (
        <section className="contact-section">
            <h2 className="contact-heading">
            Contact
            </h2>
            <p className="contact-subheading">
            Fill out the form below to send me a message.
            </p>
            <div className="contact-wrapper">
                <form onSubmit={formik.handleSubmit}>
                <input
                    className="name-input"
                    placeholder='Your Name'
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <input
                    className="email-input"
                    placeholder='Your Email'
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                
                    <textarea
                        className="message-input"
                        placeholder='Your Message'
                        rows="9"
                        id="message"
                        name="message"
                        type="message"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                    />

            
                <button className="form-btn" type="submit">Submit</button>
                </form>
            </div>
        </section>
      );
}

export default ContactForm
