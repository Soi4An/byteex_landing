import { FeedbackType } from "../types/FeedbackType";
import girlA from "../images/GirlB.png";
import girlB from "../images/GirlA.png";
import girlC from "../images/GirlC.png";
import iconA from "../images/icons/icon_day_night.svg";
import iconB from "../images/icons/icon_eco_trolly.svg";
import iconC from "../images/icons/icon_water.svg";
import customer from "../images/customerAvatar.png";

 export const getHeroContentData = () => {
   function getReason(icon: string, text: string) {
     return { icon, text };
   };

  const textA = "Beautiful, comfortable loungewear for day or night.";
  const textB = "No wasteful extras, like tags or plastic packaging.";
  const textC =
    "Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.";


  const threePhotos = [girlA, girlB, girlC];

  const listReasons = [
    getReason(iconA, textA),
    getReason(iconB, textB),
    getReason(iconC, textC),
  ];

  const feedback: FeedbackType = {
    autorName: "Jane, S.",
    autorImg: customer,
    rating: 5,
    ratingText: "One of 500+ 5 Star Reviews Online",
    message:
      "Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.",
  };

  return {
    threePhotos, listReasons, feedback,
  };
 };
