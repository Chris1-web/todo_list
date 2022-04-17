import todoIcon from "./icons/logo.png";

const loadImages = function () {
  const logoIcon = document.querySelector(".logo-icon");
  logoIcon.setAttribute("src", todoIcon);
};

export default loadImages;
