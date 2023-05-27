import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;

  width: 300px;

  padding: 20px;

  border: none;
  border-radius: 16px;

  filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.25));

  background: #383847;
  box-shadow: inset 0px 2px 14px rgba(132, 132, 132, 0.2);

  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const ModalText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.18;
  letter-spacing: 0.04em;

  /* margin-bottom: 20px; */
  padding: 0 20px 20px 20px;

  color: var(--color--text);
`;

export const ModalBtn = styled.button`
  width: 125px;
  height: 44px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: var(--color--text);

  border: none;
  border-radius: 16px;

  background: #42a652;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

  &:active {
    transform: scale(0.95);
    transition: 300ms;
  }

  @media screen and (min-width: 768px) {
    width: 136px;
  }
`;
