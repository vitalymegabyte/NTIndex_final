import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Tab, Tabs, Container } from 'react-bootstrap';

const Main = ({ setSections }) => {
  return (
    <>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setSections: (sections) => dispatch(setSections(sections)),
});
export default connect(null, mapDispatchToProps)(Main);
