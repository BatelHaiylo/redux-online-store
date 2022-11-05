import heroBcg from "/images/maddenwood.webp"
import characters from '/images/charectersbanner.png';
import tv1 from '/images/tv1.jpg';
import tv2 from '/images/tv2.jpg';
import bellabanner from '/images/bellabanner.webp';
import chloebanner from '/images/chloebanner.webp';
import lattobanner from '/images/lattobanner.webp';

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const HomePageApi = {
    title: "WELCOME TO MADDENWOOD",
    subtitle: "Do you have what it takes to make it in MADDENWOOD?",

    img: heroBcg,
    btntext: "Hell Yeah!",
    videos: [
      { imgsrc: bellabanner, clip: tv1 },
      { imgsrc: chloebanner, clip: tv2 },
      { imgsrc: lattobanner, clip: tv1 },
    ],
    sociallinks: [
      { icon: facebook },
      { icon: messenger },
      { icon: instagram },
      { icon: twitter },
      { icon: youtube },
    ],
  };
  export default HomePageApi