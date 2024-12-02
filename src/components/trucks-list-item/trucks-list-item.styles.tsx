import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TrucksListItemContainer = styled(Link)<{img: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
  
  h2 {
    font-size: 20px;
    font-weight: 700;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    color: #133e85;
  }
  
  p {
    font-size: 12px;
    font-weight: 400;

    color: #133e85;
  }
`;
