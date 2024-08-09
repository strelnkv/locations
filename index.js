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

//edit popup
document.addEventListener("DOMContentLoaded", function () {
  const openPopupBtn = document.querySelector(".edit-action");

  const closePopupBtn = document.getElementById("closeEditPopupBtn");
  const popupWrapper = document.getElementById("editPopupWrapper");

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

const data = [
  {
    name: "Название",
    description: '<img src="./assets/images/Q.svg" alt="" />',
    sorting: '<input class="sorting-input" type="text" value="500" />',
    id: 1001,
    fieldType: "Строка",
    tabulate: `
    <label class="custom-checkbox">
      <input type="checkbox" checked />
      <span class="checkmark"></span>
    </label>`,
    necessarily: `
    <label class="custom-checkbox">
      <input type="checkbox" checked />
      <span class="checkmark"></span>
    </label>`,
    delete: `<label class="custom-checkbox">
    <input type="checkbox" />
    <span class="checkmark"></span>
  </label>`,
  },
  {
    name: "Цена",
    description: '<img src="./assets/images/Q.svg" alt="" />',
    sorting: '<input class="sorting-input" type="text" value="510" />',
    id: 1002,
    fieldType: "Число",
    tabulate: `
    <label class="custom-checkbox">
      <input type="checkbox" checked />
      <span class="checkmark"></span>
    </label>`,
    necessarily: `
    <label class="custom-checkbox">
      <input type="checkbox" checked />
      <span class="checkmark"></span>
    </label>`,
    delete: `<label class="custom-checkbox">
    <input type="checkbox" checked/>
    <span class="checkmark"></span>
  </label>`,
  },
  {
    name: "МОЛ",
    description: '<img src="./assets/images/Q.svg" alt="" />',
    sorting: '<input class="sorting-input" type="text" value="520" />',
    id: 1003,
    fieldType: `<div style="display: flex; align-items: center; gap: 6px">
                    Справочник <img src="./assets/images/file.svg" alt="" />
                  </div>`,
    tabulate: `
    <label class="custom-checkbox">
      <input type="checkbox" checked />
      <span class="checkmark"></span>
    </label>`,
    necessarily: `
    <label class="custom-checkbox">
      <input type="checkbox" checked />
      <span class="checkmark"></span>
    </label>`,
    delete: `<label class="custom-checkbox">
    <input type="checkbox" />
    <span class="checkmark"></span>
  </label>`,
  },
  {
    name: "Фото",
    description: '<img src="./assets/images/Q.svg" alt="" />',
    sorting: '<input class="sorting-input" type="text" value="530" />',
    id: 1004,
    fieldType: "Файл",
    tabulate: `
    <label class="custom-checkbox">
      <input type="checkbox" checked />
      <span class="checkmark"></span>
    </label>`,
    necessarily: `
    <label class="custom-checkbox">
      <input type="checkbox" checked />
      <span class="checkmark"></span>
    </label>`,
    delete: `<label class="custom-checkbox">
    <input type="checkbox" />
    <span class="checkmark"></span>
  </label>`,
  },
  {
    name: "Цвет",
    description: '<img src="./assets/images/Q.svg" alt="" />',
    sorting: '<input class="sorting-input" type="text" value="540" />',
    id: 1005,
    fieldType: "Строка",
    tabulate: `
    <label class="custom-checkbox">
      <input type="checkbox" checked />
      <span class="checkmark"></span>
    </label>`,
    necessarily: `
    <label class="custom-checkbox">
      <input type="checkbox" checked />
      <span class="checkmark"></span>
    </label>`,
    delete: `<label class="custom-checkbox">
    <input type="checkbox" />
    <span class="checkmark"></span>
  </label>`,
  },
  {
    name: "Локация",
    description: '<img src="./assets/images/Q.svg" alt="" />',
    sorting: '<input class="sorting-input" type="text" value="550" />',
    id: 1006,
    fieldType: `<div style="display: flex; align-items: center; gap: 6px">
                    Справочник <img src="./assets/images/file.svg" alt="" />
                  </div>`,
    tabulate: `
    <label class="custom-checkbox">
      <input type="checkbox" checked />
      <span class="checkmark"></span>
    </label>`,
    necessarily: `
    <label class="custom-checkbox">
      <input type="checkbox" checked />
      <span class="checkmark"></span>
    </label>`,
    delete: `<label class="custom-checkbox">
    <input type="checkbox" />
    <span class="checkmark"></span>
  </label>`,
  },
  {
    name: "Количество",
    description: '<img src="./assets/images/Q.svg" alt="" />',
    sorting: '<input class="sorting-input" type="text" value="560" />',
    id: 1007,
    fieldType: "Число",
    tabulate: `
    <label class="custom-checkbox">
      <input type="checkbox" checked />
      <span class="checkmark"></span>
    </label>`,
    necessarily: `
    <label class="custom-checkbox">
      <input type="checkbox" checked />
      <span class="checkmark"></span>
    </label>`,
    delete: `<label class="custom-checkbox">
    <input type="checkbox" />
    <span class="checkmark"></span>
  </label>`,
  },
  {
    name: "Описание",
    description: '<img src="./assets/images/Q.svg" alt="" />',
    sorting: '<input class="sorting-input" type="text" value="570" />',
    id: 1008,
    fieldType: "Текст",
    tabulate: `
    <label class="custom-checkbox">
      <input type="checkbox" checked />
      <span class="checkmark"></span>
    </label>`,
    necessarily: `
    <label class="custom-checkbox">
      <input type="checkbox" checked />
      <span class="checkmark"></span>
    </label>`,
    delete: `<label class="custom-checkbox">
    <input type="checkbox" />
    <span class="checkmark"></span>
  </label>`,
  },
  {
    name: "Количество",
    description: '<img src="./assets/images/Q.svg" alt="" />',
    sorting: '<input class="sorting-input" type="text" value="580" />',
    id: 1009,
    fieldType: "Число",
    tabulate: `
    <label class="custom-checkbox">
      <input type="checkbox" checked />
      <span class="checkmark"></span>
    </label>`,
    necessarily: `
    <label class="custom-checkbox">
      <input type="checkbox" checked />
      <span class="checkmark"></span>
    </label>`,
    delete: `<label class="custom-checkbox">
    <input type="checkbox" />
    <span class="checkmark"></span>
  </label>`,
  },
];
const container = document.querySelector(".grid-container");

// Функция для добавления данных в таблицу
function addDataToGrid(data) {
  data.forEach((item) => {
    container.innerHTML += `
                    <div class="grid-item">
                    <span class="first-field">
                    <img src="./assets/images/dots.svg" alt="" />

                    <span>${item.name}</span>
                    <img src="./assets/images/edit.svg" alt="" />
                    </span>

                    </div>
                    <div class="grid-item">${item.description}</div>
                    <div class="grid-item">${item.sorting}</div>
                    <div class="grid-item">${item.id}</div>
                    <div class="grid-item">${item.fieldType}</div>
                    <div class="grid-item">${item.tabulate}</div>
                    <div class="grid-item">${item.necessarily}</div>
                    <div class="grid-item">${item.delete}</div>
                `;
  });
}

addDataToGrid(data);

//переключение между меню
document.addEventListener("DOMContentLoaded", function () {
  const locationDiv = document.querySelector(".main-locations");
  const settingsDiv = document.querySelector(".main-settings");
  const radioButtons = document.querySelectorAll(".menu__input");

  //кнопки футера
  const footerBtns = document.querySelector(".footer-btns");
  const footerLeft = document.querySelector(".footer-left");

  function toggleDivs() {
    const selectedValue = document.querySelector(".menu__input:checked").id;

    if (selectedValue === "locations") {
      locationDiv.style.display = "flex";
      settingsDiv.style.display = "none";
      footerLeft.style.display = "flex";
      footerBtns.style.display = "none";
    } else if (selectedValue === "settings") {
      locationDiv.style.display = "none";
      settingsDiv.style.display = "block";
      footerLeft.style.display = "none";
      footerBtns.style.display = "flex";
    } else {
      locationDiv.style.display = "none";
      settingsDiv.style.display = "none";
      footerLeft.style.display = "none";
      footerBtns.style.display = "none";
    }
  }

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", toggleDivs);
  });

  toggleDivs();
});
