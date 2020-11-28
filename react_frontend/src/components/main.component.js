import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Tab, Tabs, Container, Col, Row } from 'react-bootstrap';
import AppContainer from './app_container/app_container.component';
import SearchField from '../components/search_field/search_field.component';
import ApplicationsList from './applications_list/applications_list.component';
import { CustomCol } from './main.styles';

const Main = () => {
  return (
    <>
      <AppContainer />
      <Container>
        <Row>
          <CustomCol>
            <SearchField />
          </CustomCol>
        </Row>
        <Row>
          <Col>
            <ApplicationsList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
