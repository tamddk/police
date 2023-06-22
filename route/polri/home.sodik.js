import { run_signin } from "https://tamddk.github.io/police/route/polri/signin.sodik.js";
import { notification_main } from "https://tamddk.github.io/police/route/notification/index.sodik.js";
import { filter_modal } from "https://tamddk.github.io/police/route/polri/modals/filter.modal.sodik.js";
import { modals } from "https://tamddk.github.io/police/route/components/modal.js";
import { collapses } from "https://tamddk.github.io/police/route/components/collapse.js";
import { dark_mode } from "https://tamddk.github.io/police/route/components/dark-mode.js";
import { local_storage } from "https://tamddk.github.io/police/route/polri/validation_storage.sodik.js";
import { remove_function } from "https://tamddk.github.io/police/route/validation/remove.function.sodik.js";

export function run_home(dataArr1, dataArr2) {
  local_storage();
  var default_pages = document.getElementById("root"),
    default_assets = { routes: url_default_page + "route/" },
    format_files = [".html", ".css", ".js", ".php"];

  function _sdk_css() {
    const cssloader = document.createElement("style");
    cssloader.innerHTML = `
      .collapse-desktop {
          display: none;
      }
      @media (min-width: 1024px) {
        .collapse-mobile {
            display: none;
        }
        .collapse-desktop {
          display: flex;
        }
      }
    `;
    document.head.appendChild(cssloader);
  }

  function _sdk_callback_session() {
    let username = document.querySelectorAll(".session_user_name"),
      images = document.querySelectorAll(".session_user_images"),
      email = document.querySelectorAll(".session_user_email"),
      _user = localStorage.getItem("_sdk_user"),
      _user_parse = JSON.parse(_user),
      specialChars = /[^a-zA-Z]/g,
      specialCharsImg = /[^a-zA-Z\.\_]/g;
    _user != "" && _user != null
      ? _user_parse[0].match(specialChars) ||
        _user_parse[1].match(specialCharsImg)
        ? _sdk_expired_session()
        : (username[0].innerHTML = _user_parse[0].toLowerCase()) +
          (username[1].innerHTML = _user_parse[0].toLowerCase()) +
          (username[2].innerHTML = _user_parse[0].toLowerCase()) +
          images[0].setAttribute("src", part_files_icon + _user_parse[1]) +
          images[1].setAttribute("src", part_files_icon + _user_parse[1]) +
          (email[0].innerHTML = _user_parse[2].toLowerCase())
      : _sdk_expired_session();
  }

  function _sdk_expired_session() {
    document
      .getElementById("sodik-routes")
      .setAttribute(
        "src",
        default_assets.routes + "0182746283920" + format_files[2]
      );
    default_pages.setAttribute("sodik-page-load", "0182746283920");
    localStorage.setItem("_sdk_routes", "0182746283920");
    localStorage.removeItem("_sdk_user");
    sessionStorage.removeItem("_sdk_record_police");
    sessionStorage.removeItem("_sdk_notif");
    setTimeout(() => {
      default_pages.innerHTML = run_signin();
    }, 1000);
  }

  function _sdk_all_tailwindui() {
    const $triggerDropdownEl = document.querySelectorAll(
      "[data-dropdown-toggle]"
    );
    const $countriggerDropdownEl = $triggerDropdownEl.length;
    for (var i = 0; i < $countriggerDropdownEl; i++) {
      var $rowstriggerDropdownEl = $triggerDropdownEl[i];
      var $looptriggerDropdownEl = $triggerDropdownEl[i].getAttribute(
        "data-dropdown-toggle"
      );
      var $targetDropdownEl = document.querySelectorAll(
        "#" + $looptriggerDropdownEl
      );
      var $countargetDropdownEl = $targetDropdownEl.length;
      for (var ii = 0; ii < $countargetDropdownEl; ii++) {
        var $rowstargetDropdownEl = $targetDropdownEl[ii];
        var optionsDropdown = {
          placement: "bottom",
          triggerType: "click",
          offsetSkidding: 0,
          offsetDistance: 10,
          delay: 300,
        };
        var dropdown = new Dropdown(
          $rowstargetDropdownEl,
          $rowstriggerDropdownEl,
          optionsDropdown
        );
        dropdown.isVisible();
      }
    }
  }

  function _sdk_all_sodik() {
    modals(),
      collapses(),
      _sdk_search(),
      _sdk_search_data(),
      _sdk_select_modal();
  }

  function _sdk_search() {
    const submitForm = document.querySelectorAll(".formSearch");
    if (submitForm) {
      for (var i = 0; i < submitForm.length; i++) {
        submitForm[i].addEventListener("submit", function (e) {
          e.preventDefault();
          const inputForm = this.querySelector(".dropdownSearch");
          _sdk_search_input(inputForm.value);
        });
      }
    }
  }

  function _sdk_search_input(dataInput) {
    if (dataInput == null || dataInput == "") return false;
    _sdk_search_modal();
  }

  function _sdk_search_modal() {
    remove_function();
    default_pages.setAttribute("sodik-page-load", "9999999");
    default_pages.innerHTML = _sdk_search_elements();
    _sdk_create_disqus();
  }

  function _sdk_search_elements() {
    return `
    <div id="police-modal-container" class="police-modal-sketch-in">
      <div class="police-modal-background">
        <div class="police-modal">
          <div class="police-modal-top p-4 border-b rounded-t dark:border-gray-600">
              <p>The search section cannot be used because it is in development stage.</p>
              <p>We created a discussion column for you, we to receive notifications that you convey to us.</p>
              <p><b><a href="https://www.instagram.com/tamddk/" target="_blank">Tubagus Ahmad Sodik</a></b> (Owner This Project)</p>
          </div>
          <div id="disqus_thread" class="mt-4"></div>
        </div>
      </div>
    </div>
    `;
  }

  function _sdk_search_data() {
    const btnTrigger = document.querySelectorAll(".dropdownSearch");
    if (btnTrigger) {
      let output = "";
      for (var i in dataArr1) {
        output += `
        <li data-aos="slide-up">
    <a
      href="#"
      id="defaultModals"
      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
      data-modal-toggle="defaultModalsMenu" data-modal-load="${i}"
    >
      <span class="sr-only">${dataArr1[i].title}</span>
      <svg
        class="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        aria-hidden="true"
        focusable="false"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        ></path>
      </svg>
      ${dataArr1[i].title}
    </a>
  </li>
`;
      }
      for (var ibtn = 0; ibtn < btnTrigger.length; ibtn++) {
        btnTrigger[ibtn].addEventListener("click", function (e) {
          e.preventDefault();
          const outputEl = document.querySelector(".dropdownSearchResult");
          outputEl.innerHTML = output;
          _sdk_select_modal();
          modals();
        });
      }
    }
  }

  function _sdk_select_modal() {
    const btnTrigger = document.querySelectorAll("[data-modal-load]");
    if (btnTrigger) {
      for (var i = 0; i < btnTrigger.length; i++) {
        btnTrigger[i].addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(".modal-body").innerHTML = "";
          document.querySelector(".modal-footer").innerHTML = "";
          const getTrigger = this.getAttribute("data-modal-load");
          filter_modal(dataArr1, dataArr2, getTrigger);
          const modalsBckdrp = document.querySelector("#modal-backdrop");
          if (modalsBckdrp) return modalsBckdrp.classList.remove("hidden");
        });
      }
    }
  }

  function _sdk_create_disqus() {
    var disqus = document,
      scrpt6 = disqus.createElement("script");
    scrpt6.setAttribute("id", "disqus-js");
    scrpt6.src = "https://karyasodik.disqus.com/embed.js";
    scrpt6.setAttribute("data-timestamp", +new Date());
    (disqus.head || disqus.body).appendChild(scrpt6);
  }

  setTimeout(() => {
    _sdk_css(),
      notification_main(),
      dark_mode(),
      _sdk_all_tailwindui(),
      _sdk_all_sodik(),
      _sdk_callback_session();
  }, 1000);
}
