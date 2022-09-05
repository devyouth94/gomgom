import { KAKAO_AUTH_URL } from './Oauth';
import { kakaoLoginThunk } from '../../app/module/kakaoSlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const KakaoLogin = () => {
  const dispatch = useDispatch();

  return (
    <a href={KAKAO_AUTH_URL}>
      <Kakao>카카오</Kakao>
    </a>
  );
};
export default KakaoLogin;

const Kakao = styled.button`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  color: black;
  background-color: #fff;
  width: 49%;
  margin-right: 1%;
  height: 4rem;
  font-size: 1.6rem;
  line-height: 150%;
  margin-top: 1.6rem;

  font-weight: 700;
  font-size: 1.3rem;
  border: 1px solid black;
  letter-spacing: -0.05rem;

  border-radius: 20px;
`;
