import React from "react";

import img1 from "@/assets/patners/1.jpg";
import img2 from "@/assets/patners/2.jpg";
import img3 from "@/assets/patners/3.jpg";
import img4 from "@/assets/patners/4.jpg";
import img5 from "@/assets/patners/6.jpg";

const Partners: React.FC = () => {
  const partners: string[] = [img1, img2, img3, img4, img5];

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-20">
          Our Brand Partners
        </h2>

        <div className="slider">
          <div className="slide-track">
            {[...partners, ...partners].map((logo, index) => (
              <div className="slide" key={index}>
                <img src={logo} alt="brand" />
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
            width: calc(550px * 12);
            animation: scroll 30s linear infinite;
          }

          .slide {
            width: 550px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
          }

          .slide img {
            height: 300px;
            width: auto;
            object-fit: contain;
            transition: transform 0.3s ease;
          }

          .slide img:hover {
            transform: scale(1.08);
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