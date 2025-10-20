import logo from "../assets/ChatGPT Image 16 окт. 2025 г., 09_03_18.png";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import big_logo from "../assets/logo_with_text_transparent_hd.png";
import { useEffect } from "react";
import "./Header.css";
import { useState } from "react";
const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [showFixedHeader, setShowFixedHeader] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setShowFixedHeader(true);
      } else {
        setShowFixedHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const Change_bar = () => {
    setMenuActive(!menuActive);
  };
  const handleLinkClick = () => {
    setMenuActive(false);
  };
  return (
    <div>
      {" "}
      <header>
        {" "}
        <div className="big_header_background">
          {" "}
          <div className="header_logo_background">
            {" "}
            <nav className="container">
              {" "}
              <div className="header-logo">
                {" "}
                <img src={logo} alt="" />{" "}
              </div>{" "}
              <ul className={menuActive ? "active" : " "}>
                {" "}
                <li>
                  {" "}
                  <a href="#" onClick={handleLinkClick}>
                    {" "}
                    Bosh Sahifa{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#tavarlar" onClick={handleLinkClick}>
                    {" "}
                    Tavarlar{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#biz-haqimizda" onClick={handleLinkClick}>
                    {" "}
                    Biz Haqimizda{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
              <div className="header_bar">
                {" "}
                <FaBars className="header-in-bar" onClick={Change_bar} />{" "}
              </div>{" "}
              <div className="header-contact">
                {" "}
                <h5> Bog'lanish Uchun: </h5>{" "}
                <h3>
                  {" "}
                  <FaPhoneFlip className="head_icon" /> +998 97 282 77 47{" "}
                </h3>{" "}
              </div>{" "}
            </nav>{" "}
            {showFixedHeader && (
              <div className="fixed-header">
                {" "}
                <div className="container">
                  {" "}
                  <div className="header-logo">
                    {" "}
                    <img src={logo} alt="logo" />{" "}
                  </div>{" "}
                  <ul>
                    {" "}
                    <li>
                      {" "}
                      <a href="#">Bosh Sahifa</a>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <a href="#Tavarlar">Tavarlar</a>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <a href="#Biz_Haqimizda">Biz Haqimizda</a>{" "}
                    </li>{" "}
                  </ul>{" "}
                  <div className="header-contact">
                    {" "}
                    <h3>
                      {" "}
                      <FaPhoneFlip className="head_icon" /> +998 97 282 77 47 {" "}
                    </h3>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            )}{" "}
            <div className="big-logo">
              {" "}
              <h1>Ajoyib Mebellar</h1> <h3>Qo'lda Yasalgan va 100% sifat</h3>{" "}
              <button>Mahsulotlarni Ko'rish</button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </header>{" "}
    </div>
  );
};
export default Header;
