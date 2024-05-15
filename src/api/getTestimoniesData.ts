import { FeedbackType } from "../types/FeedbackType";

import customerA from "../images/customerAvatar.png";
import customerB from "../images/Rectangle737.png";
import customerC from "../images/Rectangle756.png";

import customer_1 from "../images/Rectangle737.png";
import customer_2 from "../images/Rectangle738.png";
import customer_3 from "../images/Rectangle739.png";
import customer_4 from "../images/Rectangle740.png";
import customer_5 from "../images/Rectangle741.png";
import customer_6 from "../images/Rectangle742.png";
import customer_7 from "../images/Rectangle743.png";
import customer_8 from "../images/Rectangle744.png";
import customer_9 from "../images/Rectangle745.png";
import customer_10 from "../images/Rectangle746.png";
import customer_11 from "../images/Rectangle747.png";
import customer_12 from "../images/Rectangle748.png";
import customer_13 from "../images/Rectangle749.png";
import customer_14 from "../images/Rectangle750.png";
import customer_15 from "../images/Rectangle751.png";
import customer_16 from "../images/Rectangle752.png";
import customer_17 from "../images/Rectangle753.png";
import customer_18 from "../images/Rectangle754.png";
import customer_19 from "../images/Rectangle755.png";
import customer_20 from "../images/Rectangle756.png";
import customer_21 from "../images/Rectangle757.png";
import customer_22 from "../images/Rectangle758.png";

const textA = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.';
const textB = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.';

const nameA = 'Jane, S.';
const nameB = 'Amy P.';
const nameC = 'Alex O.';

export const getTestimoniesData = () => {
  function getFeedback(
    autorName: string,
    autorImg: string,
    rating: 1 | 2 | 3 | 4 | 5,
    message: string
  ): FeedbackType {
    return {
      autorName,
      autorImg,
      rating,
      message,
      ratingText: null,
    };
  }

  const sectionTitle = "What are our fans saying?";
  const sectionText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.";
  const listComments = [
    getFeedback(nameA, customerA, 5, textA),
    getFeedback(nameB, customerB, 5, textB),
    getFeedback(nameC, customerC, 5, textA),
    getFeedback(nameA, customerA, 5, textA),
  ];
  const listSmallPhotos = [
    customer_1,
    customer_2,
    customer_3,
    customer_4,
    customer_5,
    customer_6,
    customer_7,
    customer_8,
    customer_9,
    customer_10,
    customer_11,
    customer_12,
    customer_13,
    customer_14,
    customer_15,
    customer_16,
    customer_17,
    customer_18,
    customer_19,
    customer_20,
    customer_21,
    customer_22
  ];

  return {
    sectionTitle,
    sectionText,
    listComments,
    listSmallPhotos,
  };
};
