import "./Haqimizda.css";

import aboutImg from "../../assets/logo_with_text_transparent_hd.png";
import { useEffect } from "react";

const Haqimizda = () => {
  useEffect(() => {
    const section = document.querySelector(".about-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
  }, []);

  return (
    <section id="biz-haqimizda" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImg} alt="Biz haqimizda" />
        </div>

        <div className="about-text">
          <h2>Biz haqimizda</h2>
          <p>
            Biz — zamonaviy mebel ishlab chiqaruvchi jamoamiz. Har bir
            mahsulotimizda nafislik, qulaylik va sifat uyg‘unligini saqlashga
            intilamiz. Mijozlarimiz uchun mebel — bu faqat buyum emas, balki
            uyda iliqlik va estetikani ifodalovchi elementdir.
          </p>
          <p>
            2015-yildan buyon biz yuzlab oilalarga o‘z orzularidagi interyerni
            yaratishda yordam berib kelmoqdamiz. Sizning ishonchingiz bizning
            eng katta yutug‘imizdir.
          </p>

          <div className="about-stats">
            <div className="stat">
              <h3>10+</h3>
              <p>Yillik tajriba</p>
            </div>
            <div className="stat">
              <h3>5000+</h3>
              <p>Mamnun mijozlar</p>
            </div>
            <div className="stat">
              <h3>200+</h3>
              <p>Dizayn loyihalar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Haqimizda;
