import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const CustomCol = styled(Col)`
  @media (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;
