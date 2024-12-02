import styled from 'styled-components';

export const TrucksListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  margin: 0 auto;
  max-width: 1020px;
  
  a {
    position: relative;
    width: 300px;
    height: 200px;
    margin: 20px;
    text-align: center;
    
    h2 {
      position: absolute;
      left: 0;
      top: 90px;
      
      background: yellow;
      width: 192px;
      height: 50px;
      
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    p {
      position: absolute;
      top: 110px;
      left: 196px;
      
      background: yellow;
      width: 103px;
      height: 30px;
      
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
