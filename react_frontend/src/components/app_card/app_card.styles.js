import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const AppCardTitle = styled(Card.Title)`
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const CustomCard = styled(Card)`
  width: 10rem;
  cursor: pointer;
  margin: 0.5rem;
  @media (max-width: 768px) {
    display: block;
    break-inside: avoid;
  }
`;

export const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  display: inline-block;
  margin: 3px;
  background-color: #28a745;
`;
