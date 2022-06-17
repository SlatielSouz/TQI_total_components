import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
    background-color:white;
  }

  button {
    background-color: rgb(56, 50, 73);
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    span {
      font-weight: bold;
      color: white;
    }

    &:hover {
      background-color: rgb(255, 255, 255, 0.8);
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);

      span {
        font-weight: bold;
        color: black;
      }
    }

    
  }
`;
