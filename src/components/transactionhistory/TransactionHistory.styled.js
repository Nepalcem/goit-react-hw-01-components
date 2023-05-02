import styled from 'styled-components';

export const TransactionHistoryStyled = styled.table`
  margin: 30px auto;
  border-collapse: collapse;
  /* border-spacing: 0; */
  /* border-radius: 6px; */

  & th {
    width: 106px;
    border-right: 1px solid #f2f2f2;
    padding: 8px 0px;
    background-color: rgb(85, 186, 210);
    color: #fff;
  }
  & th:first-child {
    border-top-left-radius: 8px;
  }
  & th:last-child {
    border-top-right-radius: 8px;
    border: none;
  }
  & td {
    text-align: center;
    border-right: 1px solid #e5e4e2;
    padding: 8px 5px;
    color: #747577;
  }
  & td:last-child {
    border: none;
  }
  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  & tr:hover {
    background-color: #d3d3d3;
  }
  & td:first-child {
    text-transform: capitalize;
  }
  & tr:last-child td:first-child {
    border-bottom-left-radius: 8px;
  }
  & tr:last-child td:last-child {
    border-bottom-right-radius: 8px;
  }
`;
