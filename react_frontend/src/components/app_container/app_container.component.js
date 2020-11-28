import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Col, Modal, Container, Row, Image } from 'react-bootstrap';
import parse from 'html-react-parser';
import {
  ShopRow,
  AppModal,
  ApplicationDescription,
  Tag,
} from './app_container.styles';
import {
  selectShowWindow,
  selectCurrentApplication,
} from '../../redux/applications/applications.selectors';
import { setShowWindow } from '../../redux/applications/applications.actions';

const AppContainer = ({ showWindow, setShowWindow, currentApplication }) => {
  const application = currentApplication;
  const handleClose = () => setShowWindow(false);

  return (
    <AppModal show={showWindow} size='lg' onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{application ? application.name : ''}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md='auto' style={{ textAlign: 'center' }}>
              <Image
                src={application ? application.image_url : ''}
                width={128}
              />
              <ShopRow>
                <a href={application ? application.appstore_link : ''}>
                  <Image src='/appstore.png' width={128} />
                </a>
              </ShopRow>
              <ShopRow>
                <a href={application ? application.gp_link : ''}>
                  <Image src='/googleplay.png' width={128} />{' '}
                </a>
              </ShopRow>
              <ShopRow>
                <a href={application ? application.msstore_link : ''}>
                  <Image src='/winstore.png' width={128} />{' '}
                </a>
              </ShopRow>
            </Col>
            <Col md={9}>
              <Container>
                <Row style={{ marginBottom: '2rem' }}>
                  <Col>
                    {application
                      ? application.tags.map((tag) => <Tag>{tag}</Tag>)
                      : ''}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ApplicationDescription>
                      {application ? parse(application.description) : ''}
                    </ApplicationDescription>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </AppModal>
  );
};

const mapStateToProps = createStructuredSelector({
  showWindow: selectShowWindow,
  currentApplication: selectCurrentApplication,
});
const mapDispatchToProps = (dispatch) => ({
  setShowWindow: (showWindow) => dispatch(setShowWindow(showWindow)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
