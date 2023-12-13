// Converts the sections variable to a string and stores it in local storage, and retrieves it when needed.

export const saveSections = (sections) => {
  try {
    localStorage.setItem("sections", JSON.stringify(sections));
    updateSavedStatus("Saved!");
  } catch (err) {
    updateSavedStatus("Error in saving");
    console.error(err);
  }
};

export const getSections = () => {
  if (
    !window.localStorage ||
    !localStorage.getItem("sections") ||
    localStorage.getItem("sections") === "undefined"
  ) {
    return null;
  }
  const sections = JSON.parse(localStorage.getItem("sections"));
  return sections;
};

// Update saved status
const updateSavedStatus = (status) => {
  const savedStatus = document.querySelector(".saved");
  savedStatus.classList.add("show");
  savedStatus.textContent = status;
  setTimeout(() => {
    savedStatus.classList.remove("show");
  }, 2000);
};
