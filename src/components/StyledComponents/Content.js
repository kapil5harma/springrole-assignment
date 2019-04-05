import styled from 'styled-components';

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 970px;
  .button {
    margin: 0 5px;
    padding: 10px 15px;
    font-size: 14px;
    color: #004fc1;
    border: 1px solid #004fc1;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.25s;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    :hover {
      background-color: #004fc1;
      border-color: #004fc1;
      color: #fff;
    }
  }

  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`;
