import { run_home } from "https://tamddk.github.io/police/route/polri/home.sodik.js";
import { top_home } from "https://tamddk.github.io/police/route/polri/home/top.home.sodik.js";
import { sidebar_home } from "https://tamddk.github.io/police/route/polri/home/sidebar.home.sodik.js";
import { body_home } from "https://tamddk.github.io/police/route/polri/home/body.home.sodik.js";
//
//
//
//
//  Application Police v1-Beta
//
//
//
//
//
//
//
// MAS
//    Sodik
//
//
//
//
//
//  PR (Pabrik Rumahan)
//
//  PR. Project Sodik
//
//
//
//
//
//
//
//
//
//
//
// Create 2023 By Mas Sodik
//
export function default_home() {
  var default_pages = document.getElementById("root"),
    default_assets = { routes: url_default_page + "route/" },
    format_files = [".html", ".css", ".js", ".php"];

  var data_arr1 = [
    { title: "About Us" },
    { title: "Add Recapitulation" },
    { title: "Contact Us" },
    { title: "License" },
    { title: "View Case" },
    { title: "View Accounts" },
  ];

  var data_arr2 = [
    { title: "No criminal record" },
    { title: "Drug offences (possession, trafficking, attempt to sell)" },
    { title: "Sexual offences (sexual assault, sexual coercion, rape)" },
    {
      title:
        "Violence against another individual (murder, attempted murder, assault)",
    },
    { title: "Burglary and robbery" },
    {
      title:
        "Theft (including possession of stolen property, attempt to sell stolen goods)",
    },
    { title: "Fraud (including counts of forgery)" },
    { title: "Motoring offences and infractions" },
    { title: "Criminal damage (vandalism)" },
    { title: "Less 18 years" },
    { title: "More 18 years" },
  ];

  function _sdk_pages() {
    return `
      <div>
        <div id="content-sidebar"></div>
        <div class="dei">
          <div id="content-top" class="content-top"></div>
          <div id="content-body" class="content-body"></div>
        </div>
      </div>
  `;
  }

  function _sdk_loaded() {
    var content_top = document.querySelectorAll("#content-top"),
      content_sidebar = document.querySelectorAll("#content-sidebar"),
      content_body = document.querySelectorAll("#content-body");
    if (content_top && content_sidebar && content_body) {
      (content_top[0].innerHTML = top_home()),
        (content_sidebar[0].innerHTML = sidebar_home()),
        (content_body[0].innerHTML = body_home(data_arr2));
    }
  }

  function _sdK_modals_create() {
    const div = document.createElement("div");
    div.setAttribute("id", "defaultModalsMenu");
    div.setAttribute(
      "class",
      "fixed top-0 left-0 right-0 z-70 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    );
    div.setAttribute("tabindex", "-1");
    div.setAttribute("aria-hidden", "true");
    div.innerHTML = _sdk_modals_elements();
    document.body.appendChild(div);
  }

  function _sdk_modals_elements() {
    return `
  <div class="relative w-full max-w-2xl max-h-full">
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="modal-title text-xl font-semibold text-gray-900 dark:text-white"></h3>
            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModalsMenu">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
        </div>
        <div class="modal-body p-6 space-y-6"></div>
        <div class="modal-footer"></div>
    </div>
  </div>
    `;
  }

  setTimeout(() => {
    _sdk_loaded(), _sdK_modals_create();
    run_home(data_arr1, data_arr2);
  }, 1000);

  default_pages.innerHTML = _sdk_pages();
}

const _routes = localStorage.getItem("_sdk_routes");
if (_routes == "0182746283910") {
  default_home();
}
