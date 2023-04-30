import styled from 'styled-components';

const StatListItem = styled.li`
  padding: 10px;
  text-align: center;
  background-color: #e5e4e2;
  border: 1px solid #708090;
  border-radius: 4px;
  flex-basis: calc((100% - 20px) / 3);
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
  gap: 20px;
  padding: 20px;
`;

const ProfileContainer = styled.div`
  margin: 0 auto;
  width: 350px;
  height: 450px;
  border-radius: 16px;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.6);
  transition: 0.5s;
  margin-bottom: 400px;
  margin-top: 30px;
`;

const DescriptionContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  & img {
    display: block;
    width: 50%;
    height: auto;
    border-radius: 50%;
    margin-bottom: 40px;
    margin-top: 10px;
  }
  & p:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export { StatListItem, StatList, ProfileContainer, DescriptionContainer };
