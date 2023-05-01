import styled from 'styled-components';

const StatListItem = styled.li`
  text-align: center;
  background-color: #e5e4e2;
  flex-basis: 100%;
  padding: 15px;
  border-top: 1px solid #708090;
  &:not(:last-child) {
    border-right: 1px solid #708090;
  }
  & .label,
  .quantity {
    display: block;
  }
  & .label {
    margin-bottom: 3px;
  }
  & .quantity {
    font-weight: 700;
  }
`;

const StatList = styled.ul`
  display: flex;
  height: 100%;
  & :first-child {
    border-bottom-left-radius: 12px;
  }
  & :last-child {
    border-bottom-right-radius: 12px;
  }
`;

const ProfileContainer = styled.div`
  margin: 0 auto;
  width: 350px;
  border-radius: 12px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
  transition: 0.5s;
  margin-top: 30px;
  &:hover {
    transform: perspective(1500px) rotateY(7deg) rotateX(5deg);
  }
`;

const DescriptionContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  & p {
    font-family: Segoe UI;
  }
  & img {
    display: block;
    width: 50%;
    height: auto;
    border-radius: 50%;
    margin-bottom: 40px;
    margin-top: 10px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
  & p:not(:last-child) {
    margin-bottom: 20px;
  }
  & .name {
    font-weight: 700;
    font-size: 24px;
  }
  & .tag {
    font-style: italic;
  }
  & .location {
    font-size: 18px;
  }
`;

export { StatListItem, StatList, ProfileContainer, DescriptionContainer };
