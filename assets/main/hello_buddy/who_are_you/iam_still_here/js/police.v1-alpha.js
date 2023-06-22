window.onload = () => {
  var default_pages = document.getElementById("root"),
    default_assets = { routes: url_default_page + "route/" },
    format_files = [".html", ".css", ".js", ".php"];
  _sdk_request = (routes) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        _sdk_cookies();
      }
    };
    xhttp.open("GET", default_assets.routes + routes + format_files[2], true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
  };

  _sdk_create = (data_fetch) => {
    var default_script = document.createElement("script");
    default_script.type = "module";
    default_script.id = "sodik-routes";
    default_script.src = data_fetch;
    document.head.appendChild(default_script);
  };

  _sdk_session = () => {
    const _routes = localStorage.getItem("_sdk_routes"),
      _credit = localStorage.getItem("_sdk_credit"),
      _times = localStorage.getItem("_sdk_times"),
      _user = localStorage.getItem("_sdk_user");
    _routes != "" &&
    _routes != null &&
    _credit != "" &&
    _credit != null &&
    _times != "" &&
    _times != null &&
    _user != "" &&
    _user != null
      ? _routes == "0182746283910"
        ? _sdk_routes_preload("0182746283910")
        : _sdk_routes_preload("0182746283920")
      : _sdk_routes_preload("0182746283920");
  };

  _sdk_routes_preload = (routes) => {
    default_pages.setAttribute("sodik-page-load", routes);
    _sdk_create(default_assets.routes + routes + format_files[2]);
    _sdk_request(routes);
  };

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

  _sdk_session();
};
