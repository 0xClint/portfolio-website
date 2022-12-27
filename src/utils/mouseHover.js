const cursor = document.querySelector(".cursor");
export const mouseOver = () => {
  cursor.classList.add("hoverEffect");
};

export const mouseOut = () => {
  cursor.classList.remove("hoverEffect");
};
