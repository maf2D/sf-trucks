import styled from 'styled-components';

export const BaseButton = styled.button`
  width: auto;
  height: 50px;

  background-color: rgb(255, 0, 0);
  color: white;
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: rgb(255, 255, 0);
  color: black
`;

export const SecondaryButton = styled(BaseButton)`
  background-color:  rgb(0, 128, 0);
  color: white;
`;
