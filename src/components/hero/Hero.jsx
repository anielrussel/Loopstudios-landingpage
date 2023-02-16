import React from "react";
import "./hero.css";
import headerDesktop from "../../assets/images/desktop/image-hero.jpg";
import headerMobile from "../../assets/images/mobile/image-hero.jpg";
import vrDesktop from "../../assets/images/desktop/image-interactive.jpg";
import vrMobile from "../../assets/images/mobile/image-interactive.jpg";
import deepearth from "../../assets/images/desktop/image-deep-earth.jpg";
import nightarcade from "../../assets/images/desktop/image-night-arcade.jpg";
import soccerteam from "../../assets/images/desktop/image-soccer-team.jpg";
import grid from "../../assets/images/desktop/image-grid.jpg";
import fromabove from "../../assets/images/desktop/image-from-above.jpg";
import pocket from "../../assets/images/desktop/image-pocket-borealis.jpg";
import curiosity from "../../assets/images/desktop/image-curiosity.jpg";
import fisheye from "../../assets/images/desktop/image-fisheye.jpg";

import deepearthMobile from "../../assets/images/mobile/image-deep-earth.jpg";
import nightarcadeMobile from "../../assets/images/mobile/image-night-arcade.jpg";
import soccerteamMobile from "../../assets/images/mobile/image-soccer-team.jpg";
import gridMobile from "../../assets/images/mobile/image-grid.jpg";
import fromaboveMobile from "../../assets/images/mobile/image-from-above.jpg";
import pocketMobile from "../../assets/images/mobile/image-pocket-borealis.jpg";
import curiosityMobile from "../../assets/images/mobile/image-curiosity.jpg";
import fisheyeMobile from "../../assets/images/mobile/image-fisheye.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-header">
        <img src={headerDesktop} alt="" className="headerDesktop" />
        <img src={headerMobile} alt="" className="headerMobile" />

        <h1><div className="glitch" data-text="IMMERSIVE EXPERIENCE THAT DELIVER">
        IMMERSIVE EXPERIENCE THAT DELIVER
        </div></h1>
        <div className="scanlines"></div>

        {/* <h1>IMMERSIVE EXPERIENCE THAT DELIVER</h1> */}
      </div>

      <div className="hero-vr">
        <img src={vrDesktop} alt="" className="vrDesktop" />
        <img src={vrMobile} alt="" className="vrMobile" />
        <motion.div className="hero-vr-text"
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          transition={{ type: 'tween', duration: 1.2 }}
        >
          <h1>THE LEADER IN INTERACTIVE VR</h1>
          <p>
            Founded in 2011, Loopstudios has benn producing world class virtual
            reality projects for some of the best companies around the globe.
            Our award winning creationsn have transformed businesses through
            digital experience that bind to their brands.
          </p>
        </motion.div>
      </div>

      <div className="hero-creations">
        <div className="hero-creations-text">
          <h1>OUR CREATIONS</h1>
          <button>SEE ALL</button>
        </div>
        <motion.div className="hero-creations-images"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: 'tween', duration: 1.2 }}
        >
          <div className="hero-creations-images-desktop">
            <img src={deepearth} alt="" />
            <img src={nightarcade} alt="" />
            <img src={soccerteam} alt="" />
            <img src={grid} alt="" />
            <img src={fromabove} alt="" />
            <img src={pocket} alt="" />
            <img src={curiosity} alt="" />
            <img src={fisheye} alt="" />
          </div>
          <div className="hero-creations-images-mobile">
            <img src={deepearthMobile} alt="" />
            <img src={nightarcadeMobile} alt="" />
            <img src={soccerteamMobile} alt="" />
            <img src={gridMobile} alt="" />
            <img src={fromaboveMobile} alt="" />
            <img src={pocketMobile} alt="" />
            <img src={curiosityMobile} alt="" />
            <img src={fisheyeMobile} alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
