import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Form, Col, Row, CardColumns } from 'react-bootstrap';
import AppCard from '../app_card/app_card.component';
import { selectApplications } from '../../redux/applications/applications.selectors';
import { CustomCardColumns } from './applications_list.style';

const ApplicationsList = ({ applications }) => {
  return (
    <CustomCardColumns>
      {applications
        ? applications.map((application) => (
            <AppCard application={application} key={application.id} />
          ))
        : ''}
    </CustomCardColumns>
  );
};

const mapStateToProps = createStructuredSelector({
  applications: selectApplications,
});

export default connect(mapStateToProps, null)(ApplicationsList);
