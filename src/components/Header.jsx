import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
// import "../assets/res/fontawesome/css/all.css";
import "../assets/css/header.css";

const pages = [
  { name: "Home", icon: "solar:home-smile-angle-bold-duotone", link: "/" },
  { name: "About", icon: "solar:user-rounded-bold-duotone", link: "/about" },
  { name: "Contact", icon: "ph:envelope-simple-duotone", link: "/contact" },
  { name: "Projects", icon: "solar:sidebar-code-line-duotone", link: "/projects" },
  { name: "Skills", icon: "eos-icons:atom-electron", link: "/skills" },
  { name: "Donate", icon: "solar:hand-money-line-duotone", link: "/donate" }
];

setInterval(() => {
  let items = document.querySelectorAll(".pageItem");
  items.forEach(item => {
    if (window.location.pathname == item.getAttribute("href")) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}, 100);

const fullscreen = () => {
  let elem = document.documentElement;
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    elem.requestFullscreen();
  }
};

const Header = () => {
  const [activeNavs, toggleNavs] = useState(false);

  return (
    <header className="header">
      <nav className="menu">
        <Link className="menuItem logo" to="/">
          <img className="iconify" src="/assets/images/logo-192.png" title="logo" />
          <span className="title"> Hima-Pro</span>
        </Link>
        <div
          className="menuItem toggle"
          onClick={() => toggleNavs(!activeNavs)}
        >
          <Icon icon="solar:hamburger-menu-line-duotone" />
        </div>
      </nav>
      <nav className={activeNavs ? "pages active" : "pages"}>
        {pages.map((page, index) => (
          <Link
            className={`menuItem pageItem ${page.name.toLowerCase()}-page`}
            onClick={() => toggleNavs(false)}
            to={page.link}
            key={index}
          >
            <Icon icon={page.icon} />
            <span className="title"> {page.name}</span>
          </Link>
        ))}
      </nav>
      <nav className={activeNavs ? "extra active" : "extra"}>
        <div className="menuItem" onClick={()=>{window.themeManager.switch()}}>
          <Icon icon="ph:sun-duotone" />
          <span className="title"> Theme Mode</span>
        </div>
        <div className="menuItem" onClick={fullscreen}>
          <Icon icon="ant-design:expand-outlined" />
          <span className="title"> Full Screen</span>
        </div>
        <Link className="menuItem pageItem settings-page" to="/settings" onClick={() => toggleNavs(false)}>
          <Icon icon="solar:settings-bold-duotone" />
          <span className="title"> Settings</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
