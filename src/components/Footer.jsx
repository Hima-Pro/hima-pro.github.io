import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <>
      <footer className="Footer">
        <section className="sides">
          <center className="side social">
            <Link className="logo" to="/">
              <img src="/assets/images/logo-192.png" alt="logo" />
              <span><b>Hima</b> Pro</span>
            </Link>
            <div className="socials">
              <a href="https://fb.com/HimaPro.me" target="_blank" rel="noreferrer"><Icon icon="fa6-brands:facebook" /></a>
              <a href="https://github.com/Hima-Pro" target="_blank" rel="noreferrer"><Icon icon="fa6-brands:github" /></a>
              <a href="https://wa.me/79961027689" target="_blank" rel="noreferrer"><Icon icon="fa6-brands:whatsapp" /></a>
              <a href="https://t.co/MegahedPro" target="_blank" rel="noreferrer"><Icon icon="fa6-brands:twitter" /></a>
              <a href="https://t.me/pro4us" target="_blank" rel="noreferrer"><Icon icon="fa6-brands:telegram" /></a>
            </div>
          </center>
          <center className="side links">
            <Link to="/">
              <Icon icon="solar:home-smile-angle-bold-duotone" />
              <span> Home Page</span>
            </Link>
            <Link to="/about">
              <Icon icon="solar:user-rounded-bold-duotone" />
              <span> About Me</span>
            </Link>
            <Link to="/contact">
              <Icon icon="ph:envelope-simple-duotone" />
              <span> Contact Me</span>
            </Link>
            <Link to="/projects">
              <Icon icon="solar:sidebar-code-bold-duotone" />
              <span> My Projects</span>
            </Link>
            <Link to="/skills">
              <Icon icon="eos-icons:atom-electron" />
              <span> My Skills</span>
            </Link>
            <Link to="/donate">
              <Icon icon="solar:hand-money-line-duotone" />
              <span> Support Me</span>
            </Link>
          </center>
        </section>
        <span className="copyright">
          Copyright &copy; 2019 - 2023 Hima-Pro. All rights reserved. Made with <Icon icon="fa:heart" /> by <Link to="/about">Ibrahim Megahed</Link>.
        </span>
      </footer>
    </>
  );
};

export default Footer;
