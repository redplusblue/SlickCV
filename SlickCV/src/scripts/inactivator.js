// Reorders and vanishes elements based on their active state.

let formContainer, mainElements;

export const updateVars = () => {
  formContainer = document.querySelector(".form-container");
  mainElements = formContainer.childNodes;
};

export const inactivate = () => {
  const formContainer = document.querySelector(".form-container");
  const mainElements = formContainer.childNodes;

  mainElements.forEach((element) => {
    element.addEventListener("click", () => {
      // Remove 'active' class from all elements
      mainElements.forEach((el) => {
        el.classList.remove("active");
        el.classList.add("inactive");
      });

      // Add 'active' class to the clicked element
      element.classList.add("active");

      // Move the clicked element to the top of the container
      formContainer.prepend(element);
    });
  });
};

export const activate = (num) => {
  if (mainElements) {
    const element = mainElements[num];
    element.classList.add("active");
    element.classList.remove("inactive");
    mainElements.forEach((el) => {
      if (el !== element) {
        el.classList.add("inactive");
        el.classList.remove("active");
      }
    });
  }
};
