import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  margin-top:60px;
  height: 200px;

  h1 {
    font-size: 32px;
    font-weight: bold;
    color:#f0f6fc;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color:#b1bac4
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    color:#8b949e;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  color:#8b949e;

  h3 {
    margin-right: 8px;

  }

  a {
    font-size: 15px;
    color: #6e7681;
    font-weight: bold;
    font-weight: italic;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 270px;
  margin: 8px;
`;
