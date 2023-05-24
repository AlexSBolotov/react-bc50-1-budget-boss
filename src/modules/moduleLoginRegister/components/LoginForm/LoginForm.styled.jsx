import styled from 'styled-components';

export const AuthWrapper = styled.div`
  width: 280px;
  height: 488px;

  padding: 32px 20px;

  color: var(--color--text);

  background: #383847;
  box-shadow: inset 0px 2px 14px rgba(132, 132, 132, 0.2);
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    width: 392px;
    height: 554px;

    padding: 52px;
  }
`;

export const GoogleTitle = styled.h1`
  width: 203px;

  margin: 0 auto;

  text-align: center;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.18;
  }
`;

export const GoogleButton = styled.button`
  width: 120px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px auto 24px auto;

  background: var(--color--text);
  border-radius: 16px;

  &:hover,
  :focus {
    transform: scale(1.05);
    transition: 300ms;
  }

  &:active {
    transform: scale(0.95);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const GoogleBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;

export const GoogleLink = styled.a`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;

  text-decoration: none;

  color: var(--primary-black);
`;

export const AuthDescr = styled.p`
  width: 240px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
	width: 288px;

    font-size: 14px;
    line-height: 1.16;
  }
`;

// ============== Form ===============
export const FormWrapper = styled.div`
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;

export const LabelTitle = styled.p`
  margin-bottom: 8px;

  padding-left: 9px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AuthLabel = styled.label``;

export const AuthInput = styled.input`
  width: 100%;
  height: 48px;

  padding: 16px;

  background: var(--color--text);
  border-radius: 16px;
`;

export const ErrorWrapper = styled.div`
  height: 10px;
`;

export const ErrorText = styled.p`
  margin-top: 8px;

  padding-left: 9px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.14;
  letter-spacing: 0.04em;

  color: var(--text-warning);
`;

export const AuthButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  margin-top: 10px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const AuthButton = styled.button`
  width: 114px;
  height: 44px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  background: var(--color--text);
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  &:hover,
  :focus {
    background-color: #42a652;
    color: var(--primary-white);
    transition: 300ms;
  }
  &:active {
    transform: scale(0.95);
  }

  @media screen and (min-width: 768px) {
    width: 136px;
  }
`;
