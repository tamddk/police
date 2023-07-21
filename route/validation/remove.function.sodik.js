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
export function remove_function() {
  document.querySelector("#sodik-js").remove();
  document.querySelector("#sodik-routes").remove();
  document.querySelector("#jquery-datatables-css").remove();
  document.querySelector("#jquery-js").remove();
  document.querySelector("#aos-css").remove();
  document.querySelector("#aos-js").remove();
  document.querySelector("#chart-js").remove();
  document.querySelector("#jquery-datatables-js").remove();
  document.querySelector("#aos-script").remove();

  document.querySelector("#defaultModalsMenu").remove();
  document.querySelector("#chart-script").remove();
  document.body.setAttribute("class", "tubagus ahmad sodik");
  document.body.removeAttribute("data-aos-easing");
  document.body.removeAttribute("data-aos-duration");
  document.body.removeAttribute("data-aos-delay");

  localStorage.removeItem("_sdk_credit");
  localStorage.removeItem("_sdk_times");
  localStorage.removeItem("_sdk_tracking");
  localStorage.removeItem("_sdk_routes");
  localStorage.removeItem("_sdk_user");
  localStorage.removeItem("_sdk_themes");
  sessionStorage.removeItem("_sdk_record_police");
  sessionStorage.removeItem("_sdk_notif");

  const removeJQTable = document.querySelector("#jquery-tables-preload");
  if (removeJQTable)
    return document.querySelector("#jquery-tables-preload").remove();
}
