import styled from 'styled-components';

export const LoaderOverlay = styled.div`
  height: 60vh;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderContainer = styled.div`
  width: 50px;
  height: 120px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    padding: 3px 5px;
    border-top: 1px solid #bbb6aa;
    border-bottom: 4px solid #bbb6aa;
    background: linear-gradient(#612329, #612329) bottom no-repeat content-box,
    #e4e0d7;
    mix-blend-mode: hard-light;
    animation: l1 5.5s infinite linear;
  }

  &:before {
    content: "";
    position: absolute;
    inset: -18px calc(50% - 2px) 8px;
    background: #eb6b3e;
    transform-origin: bottom;
    transform: rotate(8deg);
  }

  @keyframes l1 {
    0% {
      background-size: 100% 100%
    }
    100% {
      background-size: 100% 5%
    }
  }
`;
