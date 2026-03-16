import React from "react";

import img1 from "@/assets/patners/1.jpg";
import img3 from "@/assets/patners/3.jpg";
import img4 from "@/assets/patners/4.jpg";

// import img6 from "@/assets/patners/a1.jpg";
// import img7 from "@/assets/patners/a2.jpg";
// import img8 from "@/assets/patners/a3.jpg";
// import img9 from "@/assets/patners/a4.jpg";

const Partners: React.FC = () => {
  const partners: string[] = [img1, img4, img3];

  return (
    <section
      className="py-28 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom,#ffffff,#f3f4f6)",
      }}
    >
      <div className="max-w-[1800px] mx-auto px-6 text-center">

        {/* Heading */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
            <span style={{ color: "#DB8C23" }}>GALL</span>
            <span className="text-black">ERY</span>
          </h2>

          <div
            style={{
              width: "80px",
              height: "4px",
              background: "#DB8C23",
              margin: "15px auto 0",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* Slider */}
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              animation: "scroll 35s linear infinite",
              width: "max-content",
            }}
          >
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                style={{
                  width: "520px",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                    transition: "all 0.4s ease",
                    position: "relative",
                  }}
                >
                  <img
                    src={logo}
                    alt="gallery"
                    style={{
                      width: "480px",
                      height: "320px",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                      display: "block",
                    }}
                  />

                  {/* Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                      opacity: 0,
                      transition: "0.4s",
                    }}
                    className="hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Keyframes */}
        <style>
          {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
        </style>
      </div>
    </section>
  );
};

export default Partners;