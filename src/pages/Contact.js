import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com'; 
import "./Contact.css"

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState('');
  const [sendingDisabled, setSendingDisabled] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setError(t('contact.formError'));
      return;
    }

    setError('');
    setSendingDisabled(true);
    
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 

      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setMessageSent(true);
      setFormData({ name: '', email: '', message: '' }); 
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setError(t('contact.errorSending'));
    })
    .finally(() => {
      setSendingDisabled(false);
    });
  };

  return (
    <Container className="mt-5 call-form">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center">{t('contact.title')}</h1>

          {messageSent && (
            <Alert variant="success">
              {t('contact.successMessage')}
            </Alert>
          )}

          {error && (
            <Alert variant="danger">
              {error}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>{t('contact.name')}</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder={t('contact.namePlaceholder')}
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>{t('contact.email')}</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder={t('contact.emailPlaceholder')}
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>{t('contact.message')}</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={5}
                placeholder={t('contact.messagePlaceholder')}
                value={formData.message}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={sendingDisabled}>
              {sendingDisabled ? t('contact.sending') : t('contact.send')}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
