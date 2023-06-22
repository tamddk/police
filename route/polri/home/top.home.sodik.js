import { run_signin } from "https://tamddk.github.io/police/route/polri/signin.sodik.js";
import { remove_function } from "https://tamddk.github.io/police/route/validation/remove.function.sodik.js";

export function top_home() {
  var default_pages = document.getElementById("root"),
    default_assets = { routes: url_default_page + "route/" },
    format_files = [".html", ".css", ".js", ".php"];

  function _sdk_pages() {
    return `
    <div class="dark:bg-gray-900 dark:text-gray-400 ac di ee ls ng um yu aab afa afp alj ard bbi cbp ces dcx">
    <button type="button" id="navbarLeft" class="fo aqm axo cus" data-collapse-toggle="navbarLeftMenu">
      <span class="t">Open sidebar</span
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
        class="nx rz"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        ></path>
      </svg>
    </button>
    <div class="nx tj aiv cus" aria-hidden="true"></div>
    <div class="ls uh aab acz czo">
    <form id="formSearch" class="formSearch ab ls uh">
      <label for="dropdownSearch" class="t">Search</label
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        class="dark:text-gray-400 u aa an cb pc rw axk"
      >
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <div class="relative w-full">
        <input
        id="dropdownSearch"
        class="dropdownSearch dark:bg-gray-900 dark:text-gray-400 pl-8 lp pc ti aev ari atm ato axq bfy bmx cht"
        placeholder="Search..."
        type="search"
        name="search"
        data-dropdown-toggle="dropdownSearchMenu"
      />
      <div
      id="dropdownSearchMenu"
      class="dropdownSearchMenu absolute w-full z-10 pb-3 hidden w-auto text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700"
    >
    <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
    <ul
      class="dropdownSearchResult space-y-4"
      aria-labelledby="mega-menu-icons-dropdown-button"
    >
    </ul>
    </div>
        </div>
      </div>
    </form>
    <div class="ls yu aab czo">
        <div class="ab" data-aos="zoom-out">
          <button type="button" id="dropdownNotification notification-icon" class="notification-icon mt-2 fo aqm axk bks" data-dropdown-toggle="dropdownNotificationMenu" data-bell-toggle>
            <span class="t">View notifications</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="bell nx rz"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              ></path>
            </svg>
            <div id="notification-count" class="notification-count mt-4 absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white border-2 border-white rounded-full -top-2 -right-2">0</div>
          </button>
          <div id="dropdownNotificationMenu" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-80 dark:bg-gray-700 dark:divide-gray-600">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4 text-sm text-gray-700 dark:text-gray-200">
              <span class="items-center justify-between md:flex md:w-auto md:order-1">Notifications</span>
              <a href="javascript:void(0);" class="flex md:order-2 cursor-full text-red-500 hover:text-red-900" data-notif-remove-toggle>Delete All</a>
            </div>
            <div class="notification-menus">
              <div id="notification-rows" class="notification-content"></div>
            </div>
            <div class="py-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 text-center">
              <a href="javascript:void(0);" data-bell-toggle>Read All</a>
            </div>
          </div>
        </div>
        <div class="ly cum cvc cwq dch" aria-hidden="true"></div>
        <div class="ab" data-aos="zoom-out">
          <button
            id="dropdownProfiles"
            class="fm ls yu aqi"
            type="button"
            data-dropdown-toggle="dropdownProfilesMenu"
          >
            <span class="t">Open user menu</span
            ><img
            id="session_user_images"
              class="session_user_images ob se adn ail dark:bg-gray-900"
              src="${part_files_icon + page_icon}"
              alt="[_IMAGES_]"
            /><span class="ly cuo cyw"
              ><span id="session_user_name" class="session_user_name dark:text-gray-400 js avv awb awk axq" aria-hidden="true">[_username_]</span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                class="jo nu rw axk"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
          <div id="dropdownProfilesMenu" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div id="session_user_name" class="session_user_name">[_username_]</div>
                <div id="session_user_email" class="session_user_email font-medium truncate">[_email_]</div>
              </div>
              <div class="py-2">
                <a href="javascript:void(0);" id="session_user_logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </div>
          </div>
        </div>
        <button id="theme-toggle" data-tooltip-target="tooltip-toggle" type="button" class="text-gray-500 dark:text-gray-400 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" data-aos="zoom-out">
            <svg aria-hidden="true" id="theme-toggle-dark-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            <svg aria-hidden="true" id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Toggle dark mode</span>
        </button>
      </div>
    </div>
  </div>
    `;
  }

  function _sdK_logout_session() {
    var default_btn = document.getElementById("session_user_logout");
    default_btn.addEventListener("click", function (e) {
      e.preventDefault();
      _sdk_clear_session();
      remove_function();
      document.location.reload();
    });
  }

  function _sdk_clear_session() {
    document
      .getElementById("sodik-routes")
      .setAttribute(
        "src",
        default_assets.routes + "0182746283920" + format_files[2]
      );
    default_pages.setAttribute("sodik-page-load", "0182746283920");
    localStorage.setItem("_sdk_routes", "0182746283920");
    setTimeout(() => {
      default_pages.innerHTML = run_signin();
    }, 1000);
    localStorage.removeItem("_sdk_user");
    sessionStorage.removeItem("_sdk_record_police");
    sessionStorage.removeItem("_sdk_notif");
  }

  setTimeout(() => {
    _sdK_logout_session();
  }, 1000);

  return _sdk_pages();
}
