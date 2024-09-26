import React from 'react';
import './ProfileBox.css';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';

const ProfileBox = () => {
const { t } = useTranslation();

  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src={`${process.env.PUBLIC_URL}/profile.png`} alt="Profile" />
      </div>
        <div className="profile-title">
            <h1>{t('profile.name')}</h1>
            <h2>{t('profile.expertise')}</h2>

        </div>
      <div className="profile-details">
            <Container>
                <Row >
                    <Col xs={12} md={6}>
                    <p>{t('profile.phone')}</p>
                    </Col>
                    <Col xs={12} md={6} >
                    <p>{t('profile.email')}</p>
                    </Col>
                    <Col xs={12} md={6}>
                    <p>{t('profile.birthday')}</p>
                    </Col>
                    <Col xs={12} md={6} >
                    <p>{t('profile.address')}</p>
                    </Col>
                    <Col xs={12} md={6}>
                    <p>{t('profile.marital_status')}</p>
                    </Col>
                    <Col xs={12} md={6} >
                    <p>{t('profile.military_service')}</p>
                    </Col>
                </Row>

            </Container>
        
       
      </div>
           

    </div>
  );
};

export default ProfileBox;
