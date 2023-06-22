export function dark_mode() {
  function _sdk_dark_mode() {
    var themeToggleDarkIcon = document.querySelector("#theme-toggle-dark-icon");
    var themeToggleLightIcon = document.querySelector(
      "#theme-toggle-light-icon"
    );
    var themeToggleBtn = document.getElementById("theme-toggle");

    if (localStorage.getItem("_sdk_themes") == "dark") {
      themeToggleLightIcon.setAttribute("class", "w-5 h-5 hidden");
      themeToggleDarkIcon.setAttribute("class", "w-5 h-5");
      document.documentElement.classList.add("dark");
    } else {
      themeToggleLightIcon.setAttribute("class", "w-5 h-5");
      themeToggleDarkIcon.setAttribute("class", "w-5 h-5 hidden");
    }

    themeToggleBtn.addEventListener("click", function (e) {
      e.preventDefault();
      themeToggleDarkIcon.classList.toggle("hidden");
      themeToggleLightIcon.classList.toggle("hidden");

      if (localStorage.getItem("_sdk_themes")) {
        if (localStorage.getItem("_sdk_themes") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("_sdk_themes", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("_sdk_themes", "light");
        }
      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("_sdk_themes", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("_sdk_themes", "dark");
        }
      }
    });
  }

  setTimeout(() => {
    return _sdk_dark_mode();
  }, 1000);
}
