import styled from 'styled-components';

export const TruckContainer = styled.div`
  ul {
    list-style: none;
    text-align: center;
    margin: 0 auto;

    background: #fff;
    border-radius: 20px;
    padding: 20px;
    max-width: 500px;
    
    li {
      margin-bottom: 10px;
      font-size: 20px;
    }
  }
`;

export const ErrorMessage = styled.p`
  font-size: 20px;
  color: red;
  text-align: center;
`;
