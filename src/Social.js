import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
export default function SocialFollow() {
  return (
    <>
      <div class="social-container">
      <h3>Social Media Accounts</h3>
      <a href="https://www.youtube.com/channel/UC0mGUZyCyziG6nPQE7udi7g" target="_blank" rel="noopener noreferrer"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/people/Rugved-Deva/pfbid02F7z42dK2HhHXm4qsfrxwCTWmvZfnxt8Yc6y98e5wcX2q8cZaFuVVxPNdqHrvbJSZl/"
        target="_blank" rel="noopener noreferrer" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/RugvedDeva07" target="_blank" rel="noopener noreferrer" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/deva__rugved07/" target="_blank" rel="noopener noreferrer"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
</div>
    </>
  );
}
