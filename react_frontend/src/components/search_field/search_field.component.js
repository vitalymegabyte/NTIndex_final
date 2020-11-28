import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Form, Col, Row, Jumbotron } from 'react-bootstrap';
import { setApplications } from '../../redux/applications/applications.actions';
import { TextField, LogoLabel, CustomJumbotron } from './search_field.style';

const SearchField = ({ setApplications }) => {
  let onBlur = (event) => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_BASEURL}/search?query=${event.target.value}`
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setApplications(data);
      });
  };
  let onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.children[0].children[1].children[0].blur());
  };
  return (
    <>
      <CustomJumbotron>
        <Form onSubmit={onSubmit}>
          <Form.Group as={Row} style={{ marginTop: '20px' }}>
            <Col md='auto'>
              <LogoLabel>
                <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>
                  <span style={{ color: '#26aeff' }}>НТИ</span>ндекс
                </span>
                <br />
                <b>найдём то, что надо</b>
              </LogoLabel>
            </Col>
            <Col>
              <TextField onBlur={onBlur} />
            </Col>
          </Form.Group>
        </Form>
      </CustomJumbotron>
    </>
  );
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({
  setApplications: (applications) => dispatch(setApplications(applications)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
