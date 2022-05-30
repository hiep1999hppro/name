import { useState } from "react";
import logo from "../../assets/img/logo.jpg";
import "./Header.scss";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header container">
      <div className="header__top display-flex-center-wrap justify-content-between full-width">
        <div className="header__top__language display-flex-center-wrap justify-content-between cursor-pointer position-rel">
          <h2 className="language__text font-weight-light">Choose your languages</h2>
          <i className="fa-solid fa-chevron-down language__icon"></i>
          <ul className="language__list full-width position-abs display-none">
            <li className="item text-center breadcrumb-move">English</li>
            <li className="item text-center breadcrumb-move">Vietnamese</li>
          </ul>
        </div>
        <div className="header__top__search form-search display-flex-center justify-content-center">
          <input
            type="text"
            placeholder="Search here..."
            className="breadcrumb-move opacity-1"
          />
          <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
        </div>
      </div>
      <div className="header__logo text-center">
        <a href="javascript:;" className="header__logo-link display-block">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="header__bottom display-flex-center-wrap justify-content-between">
        <div
          className="header__bottom__icon only-mobile"
          onClick={() => setToggle(!toggle)}
        >
          <i className="fa-solid fa-list color-dark cursor-pointer"></i>
        </div>
        <div
          className={
            toggle ? "header__bottom__menu active" : "header__bottom__menu"
          }
        >
          <ul className="list-menu display-flex-center-wrap justify-content-between">
            <li className="item">
              <a href="javascript:;" className="item__link full-width display-block fw-700 text-uppercase breadcrumb-move">
                Home
              </a>
            </li>
            <li className="item">
              <a href="javascript:;" className="item__link full-width display-block fw-700 text-uppercase breadcrumb-move">
                About us
              </a>
            </li>
            <li className="item">
              <a href="javascript:;" className="item__link full-width display-block fw-700 text-uppercase breadcrumb-move">
                Contact
              </a>
            </li>
            <li className="item">
              <a href="javascript:;" className="item__link full-width display-block fw-700 text-uppercase  breadcrumb-move">
                Lifestyle
              </a>
            </li>
            <li className="item">
              <a href="javascript:;" className="item__link full-width display-block fw-700 text-uppercase  breadcrumb-move">
                Fashion
              </a>
            </li>
            <li className="item">
              <a href="javascript:;" className="item__link full-width display-block fw-700 text-uppercase  breadcrumb-move">
                Travel
              </a>
            </li>
            <li className="item">
              <a href="javascript:;" className="item__link full-width display-block fw-700 text-uppercase  breadcrumb-move">
                Food
              </a>
            </li>
            <li
              className="item item--has-icon only-mobile"
              onClick={() => setToggle(!toggle)}
            >
              <i className="fa-solid fa-xmark item__icon cursor-pointer"></i>
            </li>
          </ul>
        </div>
        <div className="header__bottom__social">
          <ul className="list-social display-flex-center-wrap justify-content-center">
            <li className="item">
              <a href="javascript:;" className="item__link full-width display-block">
                <i className="fa-brands fa-facebook-f breadcrumb-move"></i>
              </a>
            </li>
            <li className="item">
              <a href="javascript:;" className="item__link full-width display-block">
                <i className="fa-brands fa-twitter breadcrumb-move"></i>
              </a>
            </li>
            <li className="item">
              <a href="javascript:;" className="item__link full-width display-block">
                <i className="fa-brands fa-google-plus-g breadcrumb-move"></i>
              </a>
            </li>
            <li className="item">
              <a href="javascript:;" className="item__link full-width display-block">
                <i className="fa-brands fa-instagram-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
