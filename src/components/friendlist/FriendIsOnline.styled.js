import styled from 'styled-components';

export const FriendIsOnlineStyled = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOn ? 'green' : 'red';
  }};
  animation: ${props => {
    return props.isOn ? 'pulse 2s ease-in-out infinite' : 'none';
  }};
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
