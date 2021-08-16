import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #fff;
  padding: 1rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 4px solid;
  border-image: linear-gradient(90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%);
  border-image-slice: 1;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  font-weight: bold;
  color: #000000;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  &:hover {
    color: #000000;
  }
`;

export const SocialIcon = styled.img`
  max-height: 20%;
  max-width: 20%;
  margin-right: 0.5rem;
  background-color: transparent;
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #000000;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #000000;
  font-size: 24px;
  &:hover {
    color: #000000;
  }
`;

export const ContactUs = styled.div`
    color: #000000;
    font-size: 16px;
    padding: 0 0 1rem 4rem;
`