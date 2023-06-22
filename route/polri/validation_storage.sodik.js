export function local_storage() {
  var _credit = localStorage.getItem("_sdk_credit");
  var _times = localStorage.getItem("_sdk_times");
  var _tracking = localStorage.getItem("_sdk_tracking");
  var _routes = localStorage.getItem("_sdk_routes");
  var _user = localStorage.getItem("_sdk_user");
  var _themes = localStorage.getItem("_sdk_themes");
  var _police_record = sessionStorage.getItem("_sdk_record_police");
  var _notif = sessionStorage.getItem("_sdk_notif");

  if (_credit) {
    const a = Object.keys(_credit).map((i) => _credit[i]);
    _sdk_filter_xss(a);
  }

  if (_times) {
    const b = Object.keys(_times).map((i) => _times[i]);
    _sdk_filter_xss(b);
  }

  if (_tracking) {
    const c = Object.keys(_tracking).map((i) => _tracking[i]);
    _sdk_filter_xss(c);
  }

  if (_routes) {
    const d = Object.keys(_routes).map((i) => _routes[i]);
    _sdk_filter_xss(d);
  }

  if (_user) {
    const e = Object.keys(_user).map((i) => _user[i]);
    _sdk_filter_xss(e);
  }

  if (_themes) {
    const f = Object.keys(_themes).map((i) => _themes[i]);
    _sdk_filter_xss(f);
  }

  if (_police_record) {
    const g = Object.keys(_police_record).map((i) => _police_record[i]);
    _sdk_filter_xss(g);
  }

  if (_notif) {
    const h = Object.keys(_notif).map((i) => _notif[i]);
    _sdk_filter_xss(h);
  }

  function _sdk_filter_xss(dataArr) {
    for (var i = 0; i < dataArr.length; i++) {
      if (dataArr[i] === "<") {
        localStorage.removeItem("_sdk_credit");
        localStorage.removeItem("_sdk_times");
        localStorage.removeItem("_sdk_tracking");
        localStorage.removeItem("_sdk_routes");
        localStorage.removeItem("_sdk_user");
        localStorage.removeItem("_sdk_themes");
        sessionStorage.removeItem("_sdk_record_police");
        sessionStorage.removeItem("_sdk_notif");
      }
    }
  }
}
