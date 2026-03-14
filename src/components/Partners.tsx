import React from "react";

import img1 from "@/assets/patners/1.jpg";
import img3 from "@/assets/patners/3.jpg";
import img4 from "@/assets/patners/4.jpg";
import img5 from "@/assets/patners/6.jpg";

const Partners: React.FC = () => {
  const partners: string[] = [img1, img3, img4, img5];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 text-center">

        {/* Heng */}
        <h2 className="text-4xl md:text-5xl font-bold mb-20 tracking-wide">
          <span style={{ color: "#DB8C23" }}>GALL</span>
          <span className="text-black">ERY</span>
        </h2>

        {/* Slider */}
        <div className="slider">
          <div className="slide-track">
            {[...partners, ...partners].map((logo, index) => (
              <div className="slide" key={index}>
                <div className="card">
                  <img src={logo} alt="gallery" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`

          .slider {
            overflow: hidden;
            position: relative;
            width: 100%;
          }

          .slide-track {
            display: flex;
            align-items: center;
            width: calc(420px * 12);
            animation: scroll 35s linear infinite;
          }

          .slide {
            width: 420px;
            padding: 20px;
            display: flex;
            justify-content: center;
          }

          .card {
            background: white;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            transition: all 0.4s ease;
          }

          .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 45px rgba(0,0,0,0.15);
          }

          .card img {
            width: 380px;
            height: 260px;
            object-fit: cover;
            transition: transform 0.4s ease;
          }

          .card img:hover {
            transform: scale(1.05);
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

        `}</style>

      </div>
    </section>
  );
};

export default Partners;