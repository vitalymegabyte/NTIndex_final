import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Form, Col, Row, CardColumns } from 'react-bootstrap';
import AppCard from '../app_card/app_card.component';
import { selectApplications } from '../../redux/applications/applications.selectors';

const ApplicationsList = ({ applications }) => {
  return (
    <CardColumns>
      {applications
        ? applications.map((application) => (
            <AppCard application={application} />
          ))
        : ''}
    </CardColumns>
  );
};

const mapStateToProps = createStructuredSelector({
  applications: selectApplications,
});

export default connect(mapStateToProps, null)(ApplicationsList);
