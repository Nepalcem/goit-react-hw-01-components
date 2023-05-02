import styled from 'styled-components';

const StatisticsContainer = styled.section`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 4px;
  font-family: Segoe UI;
`;

const UploadStatList = styled.ul`
  display: flex;
  & :first-child {
    border-bottom-left-radius: 4px;
  }
  & :last-child {
    border-bottom-right-radius: 4px;
  }
`;

const UploadItem = styled.li`
  text-align: center;
  padding: 15px 10px;
  flex-basis: 20%;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  & .label {
    display: inline-block;
    margin-bottom: 5px;
  }
  & .percentage {
    font-weight: 500;
  }
`;

export { StatisticsContainer, UploadStatList, UploadItem };
