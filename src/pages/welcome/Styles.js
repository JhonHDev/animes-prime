import styled from 'styled-components';

const WelcomeSection = styled.section`
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  text-align: center;
  z-index: 10;

  @media screen and (min-width: 720px) {
    display: flex;
  }
`;

const BannerContainer = styled.div`
  opacity: 0.8;

  @media screen and (min-width: 720px) {
    height: 100vh;
  }
`;

const Banner = styled.img`
  max-width: 100%;

  @media screen and (min-width: 720px) {
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  padding: 0 15px 35px;

  @media screen and (min-width: 720px) {
    padding: 0 20px;
    min-width: 50%;
    margin: 0;
    align-self: center;
  }
  @media screen and (min-width: 920px) {
    min-width: 40%;
  }
`;

const MainText = styled.p`
  font-size: 1.8rem;
  line-height: 28px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  max-width: 340px;
  margin: auto;
  margin-top: 25px;
  padding: 13px 0;
  text-transform: uppercase;
  font-size: 1.8rem;
  border: none;
  border-radius: 5px;
  background-color: #16417a;
  color: white;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: #092954;
  }
`;

export { WelcomeSection, BannerContainer, Banner, Wrapper, MainText, Button };