import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './ContactForm.css';

function ContactForm() {
  const [formStatus, setFormStatus] = useState(null);

  const MessageSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string()
      .min(2, 'Your message should be a bit longer.')
      .max(1250, 'Your message is quite long, please be brief.')
      .required('Required'),
  });

  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact</h2>
      <p className="contact-subheading">Fill out the form below to send me a message.</p>

      <div className="contact-wrapper">
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
          validationSchema={MessageSchema}
          onSubmit={async (values, { setSubmitting, resetForm  }) => {
            values.access_key = '1e0c1faf-826a-4c54-9bcf-089c9d5f6186';

            try {
              await axios.post('https://api.web3forms.com/submit', values);

                // Reset the form values to empty strings
                resetForm();
                setSubmitting(false);
              setFormStatus('Message received, I will get back to you as soon as I can.');

            } catch (error) {
              setFormStatus("Oops, I couldn't send your message. Try again.");
            }
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
                <Field
                    placeholder="Your Full Name"
                    className={`name-input ${errors.name && touched.name ? 'is-invalid' : ''}`}
                    type="text"
                    id="name"
                    name="name"
                />

                <Field
                    placeholder="Your Email"
                    className={`email-input  ${errors.email && touched.email ? 'is-invalid' : ''}`}
                    type="email"
                    id="email"
                    name="email"
                />

                <Field
                    placeholder="Your Message"
                    as="textarea"
                    className={`message-input  ${errors.message && touched.message ? 'is-invalid' : ''}`}
                    id="message"
                    name="message"
                    rows="9"
                />

              <button className="form-btn" type="submit">
                Submit
              </button>

              {formStatus ? <p className="form-status">{formStatus}</p> : null}
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default ContactForm;
