import styled from 'styled-components';

export const AuthContainer = styled.div`
  width: 320px;

  position: relative;

  display: flex;
  justify-content: center;

  margin: 0 auto;
  padding: 12px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 100%;

    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    max-width: 100%;

    flex-direction: row;
    align-items: center;
  }
`;

export const AuthImage = styled.div`
  width: 647px;

  margin-bottom: -246px;

  @media screen and (min-width: 1280px) {
    width: 675px;

    margin-bottom: 0;
    margin-right: 42px;
  }
`;
