import styled from 'styled-components';
import { CardColumns } from 'react-bootstrap';

export const CustomCardColumns = styled(CardColumns)`
  column-count: auto;
  @media (max-width: 768px) {
    column-count: 3;
  }
`;
