import "./Contact.css";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const section = document.querySelector(".contact");

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
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h2 className="section-title">Biz bilan bog‘laning</h2>
          <p className="section-desc">
            Biz har doim sizning savollaringiz va takliflaringizni eshitishga
            tayyormiz. Quyidagi ma’lumotlar orqali bog‘laning yoki formani
            to‘ldiring.
          </p>

          <div className="contact-details">
            <div className="detail">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Manzil</h4>
                <p>Buxoro shaxri, Minor</p>
              </div>
            </div>

            <div className="detail">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Telefon</h4>
                <p>+998 (97) 282 77 47</p>
              </div>
            </div>

            <div className="detail">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>ogabekomonov79@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="social-links">
            <a href="https://t.me/Oga_dobry07" target="_blank">
              <RiTelegram2Fill className="icons-social" /> Telegram
            </a>


            {/* Instagram */}
            <a href="https://www.instagram.com/_amonoff_06_/" target="_blank">
              <FaInstagram className="icons-social" /> Instagram
            </a>

            {/* Facabook */}
            <a href="#">
              <RiFacebookFill className="icons-social" /> Facebook
            </a>
          </div>
        </div>

        <div class="contact-right">
          <form class="contact-form">
            <div class="form-row">
              <input type="text" placeholder="Ismingiz" required />
              <input type="email" placeholder="Email manzilingiz" required />
            </div>
            <textarea placeholder="Xabaringizni yozing..." required></textarea>
            <button type="submit" class="btn">
              Yuborish
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
