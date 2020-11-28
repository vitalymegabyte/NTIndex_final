import styled from 'styled-components';
import React from 'react';
import { Modal } from 'react-bootstrap';

export const ShopRow = styled.div`
  margin-top: 10px;
`;

export const AppModal = styled(Modal)`
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

export const ApplicationDescription = styled.span`
  height: auto;
  display: inline;
`;

export const Tag = styled.span`
  background-color: #28a745;
  border-color: #6c757d;
  border-radius: 2rem;
  padding: 0.5rem;
  color: white;
  margin: 0.25rem;
`;
