import React from 'react';
import { SiGithub, SiLinkedin, SiFacebook, SiInstagram } from 'react-icons/si';

function Footer() {
  return (
    <footer className="mt-5 p-10 flex justify-center">
      <a className="mx-2" href="http://github.com/danmesfin">
        <SiGithub />
      </a>
      <a className="mx-2" href="http://linkedin.com/danielmesfin">
        <SiLinkedin />
      </a>
      <a className="mx-2" href="http://instagram.com/danmesfinn">
        <SiInstagram />
      </a>
      <a className="mx-2" href="http://facebook.com/">
        <SiFacebook />
      </a>
    </footer>
  );
}

export default Footer;
