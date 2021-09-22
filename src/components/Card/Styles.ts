import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  height: 100%;
  padding: 30px 0 10px;
  box-shadow: 5px 10px 20px #f2f2f2;
  button {
    border-radius: 8px;
  }

  img {
    max-height: 250px;
    object-fit: contain;
  }

  div {
    padding: 1rem;
    height: 100%;
  }
`;
