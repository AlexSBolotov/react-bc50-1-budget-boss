import styled from 'styled-components';

export const AuthContainer = styled.div`
  width: 320px;

  position: relative;

  display: flex;
  justify-content: center;

  padding: 68px 20px 40px 20px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 768px;

    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;

    flex-direction: row;
    align-items: center;
  }
`;

export const AuthImage = styled.div`
  width: 647px;

  margin-bottom: -226px;

  @media screen and (min-width: 1280px) {
    width: 675px;

    margin-bottom: 0;
    margin-right: 42px;
  }
`;
