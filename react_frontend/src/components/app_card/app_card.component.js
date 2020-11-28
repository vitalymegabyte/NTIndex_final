import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Form, Col, Row, Card, Image } from 'react-bootstrap';
import { AppCardTitle } from './app_card.styles';
import {
  setShowWindow,
  setCurrentApplicationId,
} from '../../redux/applications/applications.actions';

const AppCard = ({ application, setShowWindow, setCurrentApplicationId }) => {
  let onClick = (event) => {
    setCurrentApplicationId(application.id);
    setShowWindow(true);
  };
  return (
    <Card style={{ width: '10rem', cursor: 'pointer' }} onClick={onClick}>
      <Card.Img variant='top' src={application.image_url}></Card.Img>
      <Card.Body style={{ padding: '0.5rem' }}>
        <AppCardTitle style={{ fontSize: '1rem' }}>
          {application.name}
        </AppCardTitle>
        <Card.Text style={{ textAlign: 'right' }}>
          {application.gp_link != undefined ? (
            <Image
              src='/gp_small.png'
              style={{ width: '16px', margin: '3px' }}
            />
          ) : (
            ''
          )}
          {application.appstore_link != undefined ? (
            <Image
              src='/apple_small.png'
              style={{ width: '16px', margin: '3px' }}
            />
          ) : (
            ''
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = (dispatch) => ({
  setShowWindow: (showWindow) => dispatch(setShowWindow(showWindow)),
  setCurrentApplicationId: (applicationId) =>
    dispatch(setCurrentApplicationId(applicationId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppCard);
