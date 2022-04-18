import todoIcon from "./icons/logo.png";
import deleteIcon from "./icons/delete.png";
import editIcon from "./icons/edit.png";

const loadImages = function () {
  const logoIcon = document.querySelector(".logo-icon");
  const allDeleteImgs = document.querySelectorAll(".delete-icon");
  const allEditImgs = document.querySelectorAll(".edit-icon");
  allDeleteImgs.forEach(function (icon) {
    icon.src = deleteIcon;
  });
  allEditImgs.forEach(function (icon) {
    icon.src = editIcon;
  });
  logoIcon.setAttribute("src", todoIcon);
};

export default loadImages;
