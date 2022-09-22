import earphones from "public/earphones.png";
import earphonesMWeb from "public/earphonesMWeb.png";
import headphones from "public/headphones.png";
import headphonesMWeb from "public/headphonesMWeb.png";
import speakers from "public/speakers.png";
import speakersMWeb from "public/speakersMWeb.png";

export const categories = [
  {
    name: "Headphones",
    image: headphones,
    imageMWeb: headphonesMWeb,
    imageHeight: 160,
    imageMWebHeight: 104,
    imageWidth: 124,
    imageMWebWidth: 80,
    path: "/#headphones",
  },
  {
    name: "Speakers",
    image: speakers,
    imageMWeb: speakersMWeb,
    imageHeight: 147,
    imageMWebHeight: 101,
    imageWidth: 123,
    imageMWebWidth: 85,
    path: "/#speakers",
  },
  {
    name: "Earphones",
    image: earphones,
    imageMWeb: earphonesMWeb,
    imageHeight: 125,
    imageMWebHeight: 104,
    imageWidth: 126,
    imageMWebWidth: 103,
    path: "/#earphones",
  },
];
