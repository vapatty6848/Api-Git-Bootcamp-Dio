import styled from "styled-components";

export const  wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
      border: 1px solid #ccc;
      border-radius: 8px;
      width: 100%;
      heigth: 44px;
      paddin: 4px;
  }

  button {
    background-color: #225ed8;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    } 
    
    span {
        fontfont-weight: bold;
        color: #ffff;
    }
  }
`;




