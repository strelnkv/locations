document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll(
    '.main-actions input[type="radio"]'
  );
  const locationsList = document.getElementById("locations-list");

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.checked && this.value === "locations") {
        locationsList.style.display = "block";
      } else {
        locationsList.style.display = "none";
      }
    });
  });

  radioButtons.forEach((radio) => {
    if (radio.checked && radio.value === "locations") {
      locationsList.style.display = "block";
    }
  });
});
document.querySelectorAll(".location-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    let subLocation = e.target.closest(".location-item").nextElementSibling;
    if (subLocation && subLocation.classList.contains("sub-location")) {
      subLocation.style.display =
        subLocation.style.display === "none" || subLocation.style.display === ""
          ? "block"
          : "none";
    }
  });
});

// Toggle sub-sub-item visibility
document.querySelectorAll(".sub-item-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    let subSubItem = e.target.closest(".sub-item-first").nextElementSibling;
    if (subSubItem && subSubItem.classList.contains("sub-sub-item")) {
      subSubItem.style.display =
        subSubItem.style.display === "none" || subSubItem.style.display === ""
          ? "block"
          : "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const openPopupBtn = document.getElementById("openPopupBtn");
  const closePopupBtn = document.getElementById("closePopupBtn");
  const popupWrapper = document.getElementById("popupWrapper");

  openPopupBtn.addEventListener("click", function () {
    popupWrapper.style.display = "flex";
  });

  closePopupBtn.addEventListener("click", function () {
    popupWrapper.style.display = "none";
  });

  // Close popup when clicking outside of it
  popupWrapper.addEventListener("click", function (event) {
    if (event.target === popupWrapper) {
      popupWrapper.style.display = "none";
    }
  });
});
