import styled from 'styled-components';
export const FriendListStyles = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  & .item {
    width: 200px;
    padding: 10px 20px;
    margin-bottom: 15px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    transition: box-shadow 0.25s ease-in-out;
  }
  & .item:hover .name {
    animation: tilt-shaking 0.25s infinite;
  }
  & .item:hover {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }

 
  & .item > img {
    height: 48px;
  }
  & .name {
    font-weight: 500;
  }
  @keyframes tilt-shaking {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0eg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
