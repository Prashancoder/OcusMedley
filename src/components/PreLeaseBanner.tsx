import React from "react";

import desktopImg from "@/assets/patners/aa.jpg";
import mobileImg from "@/assets/patners/bb.jpg";

const PreLeaseBanner = () => {
  return (
    <section className="w-full md:mt-10">

      {/* Desktop Image */}
      <img
        src={desktopImg}
        alt="Pre Lease Banner"
        className="hidden md:block w-full h-auto"
      />

      {/* Mobile Image */}
      <img
        src={mobileImg}
        alt="Pre Lease Banner Mobile"
        className="block md:hidden w-full h-auto"
      />

    </section>
  );
};

export default PreLeaseBanner; 