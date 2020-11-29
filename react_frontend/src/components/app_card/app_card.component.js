import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Form, Col, Row, Card, Image } from 'react-bootstrap';
import { AppCardTitle, CustomCard, Circle } from './app_card.styles';
import {
  setShowWindow,
  setCurrentApplicationId,
} from '../../redux/applications/applications.actions';

const AppCard = ({ application, setShowWindow, setCurrentApplicationId }) => {
  let onClick = (event) => {
    setCurrentApplicationId(application.id);
    setShowWindow(true);
  };
  let tagMatches = () => {
    let out = [];
    for (let i = 0; i < application.tags.length && i < 3; i++) {
      out.push({});
    }
    return out;
  };
  return (
    <CustomCard
      style={{
        width: '10rem',
      }}
      onClick={onClick}
    >
      <Card.Img variant='top' src={application.image_url}></Card.Img>
      <Card.Body style={{ padding: '0.5rem' }}>
        <AppCardTitle
          style={{ fontSize: '1rem', height: '3rem', oveflow: 'hidden' }}
        >
          {application.name}
        </AppCardTitle>
        <Card.Text style={{ textAlign: 'right' }}>
          <div style={{ position: 'absolute', left: '0px', padding: '3px' }}>
            {tagMatches().map(() => {
              return <Circle />;
            })}
          </div>
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
          {application.msstore_link != undefined ? (
            <Image
              src='/winstore_small.png'
              style={{ width: '16px', margin: '3px' }}
            />
          ) : (
            ''
          )}
        </Card.Text>
      </Card.Body>
    </CustomCard>
  );
};

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = (dispatch) => ({
  setShowWindow: (showWindow) => dispatch(setShowWindow(showWindow)),
  setCurrentApplicationId: (applicationId) =>
    dispatch(setCurrentApplicationId(applicationId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppCard);
