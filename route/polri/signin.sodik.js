import { _sdk_signin } from "https://tamddk.github.io/police/route/validation/form/request.signin.sodik.js";

export function run_signin() {
  function _sdk_pages() {
    return `
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-96 sm:max-w-sm">
    <img class="mx-auto h-20 w-auto" src="${
      part_files_icon + page_icon
    }" alt="${page_title_police}">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Police Department Sign in</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-96 sm:max-w-sm">
    <form id="form-signin" class="space-y-6" name="validation" method="GET">
      <div>
        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Fullnames</label>
        <div class="mt-2">
          <input id="username" name="username" type="text" autocomplete="username" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">min 6, max 10 for length input. (a-z-A-z)</div>
      </div>

      <div>
        <button type="button" id="button-signin" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled>Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Created ${formateDateYears} by
      <a href="https://www.instagram.com/tamddk/" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" target="_blank">Mas Sodik</a>
    </p>
  </div>
</div>
  `;
  }

  setTimeout(() => {
    var default_form = document.getElementById("form-signin"),
      default_btn = document.getElementById("button-signin");
    default_btn.disabled = false;
    default_form.addEventListener("submit", function (e) {
      e.preventDefault();
      _sdk_validation();
    });
    default_btn.addEventListener("click", function (e) {
      e.preventDefault();
      _sdk_validation();
    });
  }, 1000);

  function _sdk_validation() {
    if (_sdk_signin) _sdk_signin();
  }

  return _sdk_pages();
}
