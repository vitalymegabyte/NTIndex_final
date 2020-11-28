import { Form, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';

export const TextField = styled(Form.Control).attrs((props) => ({
  type: 'text',
  placeholder: 'Например: графический редактор',
}))`
  display: inline;
  margin-top: 1rem;
  border: 2px solid #26aeff;
  font-size: 1rem;
`;
export const LogoLabel = styled(Form.Label)`
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const CustomJumbotron = styled(Jumbotron)`
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
`;
