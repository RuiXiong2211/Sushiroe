import React from "react";
import sushiLogo from '../../images/home/Sushi.jpg'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  ContactUs,
} from "./Footer.elements";

function Footer() {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon src={sushiLogo}/>
            Sushiroe
          </SocialLogo>
          <WebsiteRights>Sushiroe © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="https:facebook.com/" target="_blank" aria-label="Facebook">
              <FaFacebook className="fa-spin"/>
            </SocialIconLink>
            <SocialIconLink href="https:instagram.com/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href=
                "https:youtube.com/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
          <ContactUs>
          <strong>Opening Hours: </strong> 
          Monday - Sunday,
          12:00 - 22:00
          <br/>
          <strong>Phone: </strong>
          (+65) 90122513
          <br/>
          <strong>Address: </strong>
          3 Jalan Mata Ayer, 759150
      </ContactUs>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
