import { run_signin } from "https://tamddk.github.io/police/route/polri/signin.sodik.js";

localStorage.removeItem("_sdk_user");
sessionStorage.removeItem("_sdk_record_police");
sessionStorage.removeItem("_sdk_notif");
var default_pages = document.getElementById("root");

const localS1 = localStorage.getItem("_sdk_access");
if (!localS1) {
  localStorage.removeItem("_sdk_access");
  default_pages.innerHTML = _sdk_wizard_page();
  toggleTab();
} else {
  default_pages.innerHTML = run_signin();
}

function _sdk_wizard_page() {
  return `
  <div id="peraturan_kami" tabindex="-1" aria-hidden="true" role="dialog" class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex">
      <div class="relative w-full max-w-2xl max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 class="tabs-title text-xl font-semibold text-gray-900 dark:text-white">Terms of Service</h3>
              </div>
              <div class="p-6 space-y-6">
                <div class="tabs-awal">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">This website uses essential <b>Local Storage</b> and <b>Session Storage</b> to ensure its proper operation and tracking <b>Local Storage</b> and <b>Session Storage</b> to understand how you interact with it.</p>
                </div>
                  <button type="button" id="nextBtn" class="nextBtn w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
              </div>
          </div>
      </div>
  </div>
    `;
}

function toggleTab() {
  let btn = document.querySelector(".nextBtn");
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    create_notif_access();
  });
}

function create_notif_access() {
  const localS1 = localStorage.getItem("_sdk_access");
  if (localS1) {
    if (localS1 == "1") {
      localStorage.setItem("_sdk_access", "2");
      document.querySelector(".tabs-title").innerHTML = "Powered by team";
      document.querySelector(".tabs-awal").innerHTML = _sdk_create_owner();
      document.querySelector(".nextBtn").innerHTML = "Sign in Now";
    } else {
      default_pages.innerHTML = run_signin();
    }
  } else {
    localStorage.setItem("_sdk_access", "1");
    document.querySelector(".tabs-title").innerHTML = "Thank's you for library";
    document.querySelector(".tabs-awal").innerHTML = _sdk_create_vendor();
  }
}

function _sdk_create_vendor() {
  return `
  <div class="aie asa">
  <div class="gs tv ard ces dcx">
    <ul role="list" class="lw yb zm caj cyh">
      <li class="el abx acb ado alj bbd">
        <div class="ls ti yu za abg aqq">
          <img
            class="nc re uk adn aih"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="flowbite"
          />
          <div class="uh adg">
          <div class="ls yu abd">
            <h3 class="adg avv avz axq">Flowbite</h3>
            <span class="lt uk yu adn ajc aqw arj avx avz axu bbo bbs bcn"
              >Vendor</span
            >
          </div>
          <p class="kp adg avv axm">CSS</p>
        </div>
        </div>
      </li>
      <li class="el abx acb ado alj bbd">
        <div class="ls ti yu za abg aqq">
          <img
            class="nc re uk adn aih"
            src="https://tailwindui.com/favicon.ico"
            alt="tailwindui"
          />
          <div class="uh adg">
          <div class="ls yu abd">
            <h3 class="adg avv avz axq">Tailwind</h3>
            <span class="lt uk yu adn ajc aqw arj avx avz axu bbo bbs bcn"
              >Vendor</span
            >
          </div>
          <p class="kp adg avv axm">CSS & JS</p>
        </div>
        </div>
      </li>
      <li class="el abx acb ado alj bbd">
        <div class="ls ti yu za abg aqq">
          <img
            class="nc re uk adn aih"
            src="https://jquery.com/jquery-wp-content/themes/jquery.com/i/favicon.ico"
            alt="jquery"
          />
          <div class="uh adg">
          <div class="ls yu abd">
            <h3 class="adg avv avz axq">jQuery</h3>
            <span class="lt uk yu adn ajc aqw arj avx avz axu bbo bbs bcn"
              >Vendor</span
            >
          </div>
          <p class="kp adg avv axm">CSS & JS</p>
        </div>
        </div>
      </li>
      <li class="el abx acb ado alj bbd">
        <div class="ls ti yu za abg aqq">
          <img
            class="nc re uk adn aih"
            src="https://www.chartjs.org/img/chartjs-logo.svg"
            alt="chartJs"
          />
          <div class="uh adg">
          <div class="ls yu abd">
            <h3 class="adg avv avz axq">ChartJs</h3>
            <span class="lt uk yu adn ajc aqw arj avx avz axu bbo bbs bcn"
              >Vendor</span
            >
          </div>
          <p class="kp adg avv axm">JS</p>
        </div>
        </div>
      </li>
      <li class="el abx acb ado alj bbd">
        <div class="ls ti yu za abg aqq">
          <img
            class="nc re uk adn aih"
            src="https://www.bypeople.com/wp-content/uploads/2017/03/css-animate-scroll.jpg"
            alt="AOS (Animate On Scroll)"
          />
          <div class="uh adg">
          <div class="ls yu abd">
            <h3 class="adg avv avz axq">AOS</h3>
            <span class="lt uk yu adn ajc aqw arj avx avz axu bbo bbs bcn"
              >Vendor</span
            >
          </div>
          <p class="kp adg avv axm">CSS & JS</p>
        </div>
        </div>
      </li>
    </ul>
  </div>
</div>
    `;
}

function _sdk_create_owner() {
  return `
<div class="aie asa">
  <div class="gs tv ard ces dcx">
    <ul role="list" class="lw yb zm caj cyh">
      <li class="el abx acb ado alj bbd">
        <div class="ls ti yu za abg auw ard">
          <img
            class="nc re uk adn aih"
            src="${owner_images}"
            alt="${owner_name}"
          />
          <div class="uh adg">
          <div class="ls yu abd">
            <h3 class="adg avv avz axq">Sodik</h3>
            <span class="lt uk yu adn ajc aqw arj avx avz axu bbo bbs bcn"
              >Owner</span
            >
          </div>

        </div>
        </div>
        <p class="kp adg avv axm ard">${owner_name}</p>
      </li>
      <li class="el abx acb ado alj bbd">
        <div class="ls ti yu za abg auw ard">
          <img
            class="nc re uk adn aih"
            src="${owner_project_images}"
            alt="${owner_project_name}"
          />
          <div class="uh adg">
          <div class="ls yu abd">
            <h3 class="adg avv avz axq">Project Sodik</h3>
            <span class="lt uk yu adn ajc aqw arj avx avz axu bbo bbs bcn"
              >Owner</span
            >
          </div>

        </div>
        </div>
        <p class="kp adg avv axm ard">${owner_sosmed_2} (Instagram)</p>
      </li>
      <li class="el abx acb ado alj bbd">
        <div class="ls ti yu za abg auw ard">
          <img
            class="nc re uk adn aih"
            src="${owner_github_images}"
            alt="${owner_github_name}"
          />
          <div class="uh adg">
          <div class="ls yu abd">
            <h3 class="adg avv avz axq">Sodik</h3>
            <span class="lt uk yu adn ajc aqw arj avx avz axu bbo bbs bcn"
              >Owner</span
            >
          </div>

        </div>
        </div>
        <p class="kp adg avv axm ard">${owner_sosmed_3} (Github)</p>
      </li>
    </ul>
    </div>
</div>
  `;
}
