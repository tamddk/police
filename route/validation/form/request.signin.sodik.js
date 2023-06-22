import { default_home } from "/route/0182746283910.js";

export function _sdk_signin() {
  var default_pages = document.getElementById("root"),
    default_assets = { routes: "route/" },
    format_files = [".html", ".css", ".js", ".php"],
    default_forms = document.forms["validation"],
    default_timer = 5,
    default_alert_1 =
      "block text-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400",
    default_alert_2 =
      "flex p-4 mb-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",
    default_alert_3 = "block text-center p-4 mb-4 text-5xl";

  function _sdk_validation_elements() {
    return `
    <div id="message-request" class="flex p-4 mb-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <span class="sr-only">Danger</span>
    <div>
      <span class="font-medium">Ensure that these requirements are met:</span>
        <ul class="mt-1.5 ml-4 list-disc list-inside">
          ${_sdk_validation_input()}
      </ul>
    </div>
  </div>
    `;
  }

  function _sdk_validation_function() {
    if (default_forms) {
      default_forms.innerHTML = _sdk_validation_elements();
    }

    const remove_newEl = document.getElementById("sodik-alert-notif");
    if (remove_newEl) {
      remove_newEl.remove();
    }
  }

  function _sdk_validation_input() {
    const username = default_forms.username.value;
    const specialChars = /[^a-zA-Z]/g;
    if (username == "" || username == null) {
      _sdk_change_color(default_alert_2);
      return `
      <li>Please fill in the empty data forms!</li>
      <li>At least 6 characters (and up to 10 characters)</li>
      <li>Cannot using special character</li>
      `;
    } else if (username.length < 6) {
      _sdk_change_color(default_alert_2);
      return `<li>At least 6 characters</li>`;
    } else if (username.length > 10) {
      _sdk_change_color(default_alert_2);
      return `<li>At least not more than 10 characters</li>`;
    } else if (username.match(specialChars)) {
      _sdk_change_color(default_alert_2);
      return `<li>Cannot using space, number or special character</li>`;
    } else {
      _sdk_pages_request(), _sdk_cookies();
      setTimeout(() => {
        _sdk_success();
        setTimeout(() => {
          _sdk_redirect();
          setTimeout(() => {
            _sdk_change_color(default_alert_3);
          }, 1000);
        }, 1500);
      }, 1);
    }
  }

  function _sdk_change_color(color) {
    setTimeout(() => {
      var default_notif = document.getElementById("message-request");
      default_notif.setAttribute("class", color);
    }, 1);
  }

  function _sdk_redirect() {
    var time_left = default_timer;
    var time_call = setInterval(function () {
      if (time_left <= 0) {
        clearInterval(time_call);
        document.getElementById(
          "message-request"
        ).innerHTML = `<div><span class="font-medium">0</span></div>`;
        setTimeout(() => {
          default_home();
          // document.location.reload();
        }, 1000);
      } else {
        document.getElementById("message-request").innerHTML =
          `<div><span class="font-medium">` + time_left + `</span></div>`;
      }
      time_left -= 1;
    }, 1000);
  }

  function _sdk_success() {
    _sdk_change_color(default_alert_1);
    document
      .getElementById("sodik-routes")
      .setAttribute(
        "src",
        default_assets.routes + "0182746283910" + format_files[2]
      );
    default_pages.setAttribute("sodik-page-load", "0182746283910");
    document.getElementById(
      "message-request"
    ).innerHTML = `<div><span class="font-medium">Sign in successfully, please wait</span></div>`;
  }

  function _sdk_pages_request() {
    const username = default_forms.username.value,
      _user = localStorage.getItem("_sdk_user");

    var default_users = [];
    default_users.push(username.toLowerCase());
    default_users.push(page_icon);
    default_users.push(username.replace(" ", "").toLowerCase() + "@police.com");
    default_users.push(navigator.onLine);
    default_users.push(navigator.language);

    _user != "" && _user != null
      ? localStorage.setItem("_sdk_user", _user) +
        localStorage.setItem("_sdk_routes", "0182746283910")
      : localStorage.setItem("_sdk_user", JSON.stringify(default_users)) +
        localStorage.setItem("_sdk_routes", "0182746283910");
  }

  _sdk_cookies = () => {
    var default_times = new Date(),
      default_cookies = [],
      default_detected = [],
      _routes = localStorage.getItem("_sdk_routes"),
      default_times = Date.parse(default_times);

    default_cookies.push(Date.now());
    default_cookies.push(default_times);
    default_cookies.push(new Date());

    default_detected.push(location.hostname);
    default_detected.push(location.host);
    default_detected.push(window.location.protocol.replace(":", ""));
    default_detected.push(navigator.userAgent);

    _routes = _routes == "0182746283910" ? "0182746283910" : "0182746283920";

    localStorage.setItem("_sdk_credit", "Mas Sodik");
    localStorage.setItem("_sdk_routes", _routes);
    localStorage.setItem("_sdk_times", JSON.stringify(default_cookies));
    localStorage.setItem("_sdk_tracking", JSON.stringify(default_detected));
  };

  return _sdk_validation_function();
}
