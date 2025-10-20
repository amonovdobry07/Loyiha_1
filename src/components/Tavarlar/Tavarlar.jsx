import "./Tavarlar.css";
import image4 from "../../assets/3.jpg";
import image1 from "../../rasmlar/rasm9.jpg"
import image2 from "../../rasmlar/rasm10.jpg"
import image3 from "../../rasmlar/rasm3.jpg"
import image5 from "../../rasmlar/rasm4.jpg"
import image6 from "../../rasmlar/rasm5.jpg"
import image7 from "../../rasmlar/rasm6.jpg"
import image8 from "../../rasmlar/rasm7.jpg"
import image9 from "../../rasmlar/rasm8.jpg"

import { useEffect, useState } from "react";

const Mahsulotlar = () => {
  const [koproq, setKoproq] = useState(false); // bosilganda true bo‘ladi

  const mahsulotlar = [
    { id: 1, nomi: "Zamonaviy Kreslo", narx: "1 200 000 so'm", rasm: image4 },
    { id: 2, nomi: "Yog‘och Stol", narx: "3 800 000 so'm", rasm: image1 },
    { id: 3, nomi: "Yotoqxona To‘plami", narx: "4 500 000 so'm", rasm: image2 },
    { id: 4, nomi: "Ofis Stoli", narx: "1 800 000 so'm", rasm: image3 },
    { id: 5, nomi: "Klassik Divan", narx: "5 200 000 so'm", rasm: image5 },
    { id: 6, nomi: "Oshxona Stoli", narx: "2 900 000 so'm", rasm: image6 },
    { id: 7, nomi: "Mini Stolcha", narx: "1 000 000 so'm", rasm: image7 },
    { id: 8, nomi: "Ko‘rkam Stol", narx: "3 200 000 so'm", rasm: image8 },
    { id: 9, nomi: "Ko‘rkam Stol", narx: "3 200 000 so'm", rasm: image9 },
  ];

  // dastlab 4 ta chiqadi
  const korinadiganMahsulotlar = koproq ? mahsulotlar : mahsulotlar.slice(0, 4);

  useEffect(() => {
    const cards = document.querySelectorAll(".mahsulot-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.1}s`;
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, [koproq]);

  return (
    <section id="tavarlar" className="mahsulotlar-section">
      <h2 className="bolim-nomi">Bizning Mahsulotlar</h2>

      <div className="mahsulotlar-grid">
        {korinadiganMahsulotlar.map((m) => (
          <div key={m.id} className="mahsulot-card">
            <div className="rasm-quti">
              <img src={m.rasm} alt={m.nomi} />
              <div className="overlay">
                <button>Ko‘rish</button>
              </div>
            </div>
            <div className="mahsulot-info">
              <h3>{m.nomi}</h3>
              <p>{m.narx}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Ko‘proq tugmasi */}
      {!koproq && (
        <button className="koproq-btn" onClick={() => setKoproq(true)}>
          Ko‘proq ko‘rish
        </button>
      )}
    </section>
  );
};

export default Mahsulotlar;
