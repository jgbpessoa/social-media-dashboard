const btnDark = document.querySelector("#dark");
const btnLight = document.querySelector("#light");
const btns = document.getElementsByName("theme");
const systemPref = window.matchMedia("(prefers-color-scheme: dark)");

const setMode = function (mode) {
  document.body.removeAttribute("class");
  document.body.classList.add(`${mode}`);
  localStorage.setItem("mode", `${mode}`);
};

const modeLocalStorage = () => localStorage.getItem("mode");
const modeSystemPref = () => (systemPref.matches ? "dark" : "light");

const updateMode = function () {
  const mode = modeLocalStorage() || modeSystemPref();
  mode === "dark" ? btnDark.click() : btnLight.click();
};

systemPref.addEventListener("change", (e) => {
  e.matches ? btnDark.click() : btnLight.click();
});

for (let btn of btns) {
  btn.addEventListener("click", function () {
    setMode(btn.id);
  });
}

updateMode();
