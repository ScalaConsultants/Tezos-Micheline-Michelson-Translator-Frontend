import React from 'react';
import { Formik } from 'formik';
import FormInput from '../shared/input/FormInput';
import { formValues } from './formTypes';
import * as Yup from 'yup';
import './ContactForm.scss';

const validationSchema = Yup.object().shape({
    name: Yup.string(),
    group: Yup.string(),
    phone: Yup.number().integer("It's a wrong phone number!").min(8, "This phone number is too short."),
    email: Yup.string().required("Email is required.").email("It's a wrong email address."),
    message: Yup.string().required("Message is required.").min(10, "Message is too short."),
});

const ContactForm = () => {

    const submitForm = (values: formValues, { setSubmitting }: any) => {
        setSubmitting(true);
        //TODO connect with API
        setSubmitting(false);
    }

    return (
        <div className="contact-form">
            <h2>Send message</h2>
            <Formik
                initialValues={{
                    name: '',
                    group: '',
                    phone: '',
                    email: '',
                    message: '',
                }}
                validationSchema={validationSchema}
                onSubmit={submitForm}
            >
                {
                    ({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="contact-form_line">
                                    <FormInput
                                        label="Name"
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        errors={errors.name}
                                        touched={touched.name}
                                    />
                                    <FormInput
                                        label="Group"
                                        type="text"
                                        name="group"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.group}
                                        errors={errors.group}
                                        touched={touched.group}
                                    />
                                </div>
                                <div className="contact-form_line">
                                    <FormInput
                                        label="Phone"
                                        type="text"
                                        name="phone"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone}
                                        errors={errors.phone}
                                        touched={touched.phone}
                                    />
                                    <FormInput
                                        label="Email"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        errors={errors.email}
                                        touched={touched.email}
                                    />
                                </div>
                                <div className="contact-form_line">
                                    <FormInput
                                        label="How we can help you?"
                                        type="text"
                                        name="message"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                        errors={errors.message}
                                        touched={touched.message}
                                        className="contact-form_message"
                                    />
                                </div>
                                <button type="submit" disabled={isSubmitting} className="contact-form_button">
                                    Submit
                            </button>
                            </form>
                        )
                }
            </Formik>
        </div>
    )
}

export default ContactForm;