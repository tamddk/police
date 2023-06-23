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
export function sidebar_home() {
  function _sdk_pages() {
    return `
    <div id="navbarLeftMenu" class="ly cpt cqa crh cuo cwj cyt">
      <div id="navbarLeftMenuContent" class="dark:bg-gray-900 ls uo ym aao ade aff afp alj arf">
        <button type="button" id="navbarLeft" class="collapse-mobile absolute mt-4 right-0 sdk-ml-n40 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-collapse-toggle="navbarLeftMenu">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close sidebar</span>
        </button>
        <div id="navbarLeft" class="collapse-mobile ls ng um yu cursor-pointer" data-collapse-toggle="navbarLeftMenu">
          <img
            class="ob th"
            src="${part_files_icon + page_icon}"
            alt="${page_title_police}"
          />
          <span class="t">Text Icon</span>
          <span class="dark:text-gray-400 text-xl px-4 mt-2 font-bold">${page_title_police}</span>
        </div>
        <div class="collapse-desktop ls ng um yu">
          <img
            class="ob th"
            src="${part_files_icon + page_icon}"
            alt="${page_title_police}"
          />
          <span class="t">Text Icon</span>
          <span class="dark:text-gray-400 text-xl px-4 mt-2 font-bold">${page_title_police}</span>
        </div>
        <nav class="ls uh ym">
          <ul role="list" class="ls uh ym aaq">
            <li>
              <ul role="list" class="fv abj">
                <li data-aos="slide-right">
                  <a href="#" class="ail ayc bpw ls aaa adp aql avv awk awb"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="ayc nx rz um"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      ></path></svg>Dashboard</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <div class="avx awb awk axk">Teams Project Build</div>
              <ul role="list" class="fv kw abj">
                <li data-aos="slide-right">
                  <a href="#" id="defaultModals" class="axo blb bic bpw ls aaa adp aql avv awk awb" data-modal-toggle="defaultModalsMenu" data-modal-load="99"
                    ><span
                      class="axk afp bpz bri ls nx rz um yu yz ado aeu avr avz alj"
                      >TAS</span
                    ><span class="adg">Tubagus Ahmad Sodik</span></a
                  >
                </li>
                <li data-aos="slide-right">
                  <a href="#" id="defaultModals" class="axo blb bic bpw ls aaa adp aql avv awk awb" data-modal-toggle="defaultModalsMenu" data-modal-load="98"
                    ><span
                      class="axk afp bpz bri ls nx rz um yu yz ado aeu avr avz alj"
                      >PS</span
                    ><span class="adg">Project Sodik</span></a
                  >
                </li>
              </ul>
            </li>
            <li class="fz lk">
              <a href="#" class="ls yu aab arf aru avv awb awk axq"
                ><img
                  id="session_user_images"
                  class="session_user_images ob se adn ail dark:bg-gray-900"
                  src="${part_files_icon + page_icon}"
                  alt="[_IMAGES_]"
                /><span class="t">Your profile</span
                ><span id="session_user_name" class="session_user_name dark:text-gray-400" aria-hidden="true">[_username_]</span></a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
      `;
  }
  return _sdk_pages();
}
