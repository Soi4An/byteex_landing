import girlA from "../images/GirlE.png";
import girlB from "../images/GirlF.png";
import girlC from "../images/GirlB.png";

export const getTitleTextPhotosData = () => {
  const sectionTitle = "Find something you love.";
  const sectionDesktopText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.";
  const sectionMobileText = "Click below to browse our collection!";
  const threePhotos = [girlA, girlB, girlC];

  return {
    sectionTitle,
    sectionDesktopText,
    sectionMobileText,
    threePhotos,
  };
};
