export function filter_modal(otc, itc, etc) {
  var _sdk_add_notification = (function () {
    var notif = [];

    function Item(title, status, count, datetime) {
      this.title = title;
      this.status = status;
      this.count = count;
      this.datetime = datetime;
    }

    function saveNotif() {
      sessionStorage.setItem("_sdk_notif", JSON.stringify(notif));
    }

    function loadNotif() {
      notif = JSON.parse(sessionStorage.getItem("_sdk_notif"));
    }
    if (sessionStorage.getItem("_sdk_notif") != null) {
      loadNotif();
    }

    var obj = {};

    obj.addItemData = function (fullnames) {
      var itemNotif = new Item(
        "Successfully added suspect data (" + fullnames + ")",
        false,
        1,
        formatDateTime
      );
      notif.push(itemNotif);
      saveNotif();
    };

    obj.readJsonItemFromCart = function () {
      for (var item in notif) {
        notif[item].status = true;
        _sdk_add_notification.readClassItemFromNotif();
      }
      saveNotif();
    };

    obj.readByClickItemFromCart = function (id) {
      for (var item in notif) {
        if (item == id) {
          notif[id].status = true;
        }
      }
      saveNotif();
    };

    obj.readBellItemFromNotif = function () {
      for (var item in notif) {
        const notif_bell = document.querySelectorAll("[data-bell-toggle]");
        if (notif_bell) {
          if (notif[item].status == true) {
            notif_bell[0]
              .querySelector(".bell")
              .setAttribute("class", "bell nx rz");
            document
              .querySelector(".notification-count")
              .setAttribute(
                "class",
                "notification-count mt-4 absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white border-2 border-white rounded-full -top-2 -right-2"
              );
          } else {
            notif_bell[0]
              .querySelector(".bell")
              .setAttribute("class", "bell nx rz active");
            document
              .querySelector(".notification-count")
              .setAttribute(
                "class",
                "notification-count mt-4 absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white border-2 border-white rounded-full -top-2 -right-2 active"
              );
          }
        }
      }
    };

    obj.readClassItemFromNotif = function () {
      for (var item in notif) {
        const notif_el1 = document.querySelectorAll(".notification-rows");
        if (notif_el1) {
          if (notif[item].status == true)
            notif_el1[item].setAttribute(
              "class",
              "notification-rows notif-" +
                item +
                " notif-" +
                notif[item].status +
                " read"
            );
          notif_el1[item].setAttribute(
            "class",
            "notification-rows notif-" + item + " notif-true read"
          );
        }
      }
    };

    obj.totalCount = function () {
      var totalCount = 0;
      for (var item in notif) {
        if (notif[item].status == true) {
          totalCount += notif[item].count - notif[item].count;
        } else {
          totalCount += notif[item].count;
          _sdk_add_notification._sdk_notification_sound();
        }
      }
      if (totalCount > 99) return "99";
      return totalCount;
    };

    obj.clearCart = function () {
      notif = [];
      saveNotif();
    };

    obj.listCart = function () {
      var notifCopy = [];
      for (var i in notif) {
        var item = notif[i];
        var itemCopy = {};
        for (var p in item) {
          itemCopy[p] = item[p];
        }
        itemCopy.total = Number(item.status * item.count).toFixed(2);
        notifCopy.push(itemCopy);
      }
      return notifCopy;
    };

    obj._sdk_notification_callback = function (funcNotif) {
      const notificaiton = document.querySelectorAll("[data-bell-toggle]");
      const notificaiton_remove = document.querySelectorAll(
        "[data-notif-remove-toggle]"
      );
      if (notificaiton || notificaiton_remove) {
        funcNotif._sdk_notification_silent(
          funcNotif,
          notificaiton,
          notificaiton_remove
        ),
          funcNotif._sdk_notification_create_object(funcNotif, notificaiton);
      }
    };

    obj._sdk_notification_silent = function (notifPush, tigger1, trigger2) {
      tigger1[0].addEventListener("click", function (e) {
        e.preventDefault();
        tigger1[0].querySelector(".bell").setAttribute("class", "bell nx rz");
        tigger1[0]
          .querySelector(".notification-count")
          .setAttribute(
            "class",
            "notification-count mt-4 absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white border-2 border-white rounded-full -top-2 -right-2"
          );
        document.querySelector(".notification-count").innerHTML = "0";
        notifPush.readJsonItemFromCart();
        notifPush.readClassItemFromNotif();
      });
      tigger1[1].addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".bell").setAttribute("class", "bell nx rz");
        document
          .querySelector(".notification-count")
          .setAttribute(
            "class",
            "notification-count mt-4 absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white border-2 border-white rounded-full -top-2 -right-2"
          );
        document.querySelector(".notification-count").innerHTML = "0";
        notifPush.readJsonItemFromCart();
        notifPush.readClassItemFromNotif();
      });
      trigger2[0].addEventListener("click", function (e) {
        e.preventDefault();
        notifPush.clearCart();
        notifPush._sdk_notificaiton_empty();
      });
      setTimeout(() => {
        notifPush._sdk_notifiation_click_byorder(tigger1, notifPush);
      }, 500);
    };

    obj._sdk_notificaiton_empty = function () {
      const notif_bell = document.querySelectorAll("[data-bell-toggle]");
      sessionStorage.removeItem("_sdk_notif");
      if (notif_bell) {
        notif_bell[0]
          .querySelector(".bell")
          .setAttribute("class", "bell nx rz");
        document
          .querySelector(".notification-count")
          .setAttribute(
            "class",
            "notification-count mt-4 absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white border-2 border-white rounded-full -top-2 -right-2"
          );
        document.querySelector(".notification-count").innerHTML = "0";
      }
      document.querySelector(".notification-content").innerHTML = `
          <div class="p-4 text-sm text-center text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <span class="font-medium">Empty Message.</span>
          </div>
      `;
    };

    obj._sdk_notifiation_click_byorder = function (tigger1, notifPush) {
      const notificaiton_div = document.querySelectorAll(".notification-rows");
      if (notificaiton_div) {
        const notifArray = notifPush.listCart();
        for (var i in notifArray) {
          const notif_div = notificaiton_div[i];
          notif_div.addEventListener("click", function (e) {
            e.preventDefault();
            const getClass = notif_div.getAttribute("data-notif-row");
            notifPush.readByClickItemFromCart(getClass);
            document
              .querySelector(".notif-" + getClass)
              .setAttribute(
                "class",
                "notification-rows notif-" + getClass + " notif-true read"
              );
            tigger1[0].querySelector(".notification-count").innerHTML =
              notifPush.totalCount();
          });
        }
      }
    };

    obj._sdk_notification_create_object = function (notifPush, notifCount) {
      const notificaiton = document.querySelectorAll(".notification-content");
      const notificaiton_count = document.querySelectorAll(
        ".notification-count"
      );
      if (notificaiton) {
        const notifArray = notifPush.listCart();
        let output = "";
        for (var i in notifArray) {
          let data1 = "",
            data2 = "";
          if (notifArray[i].status == true) {
            data1 = "notif-true";
            data2 = "read";
          } else {
            data1 = "notif-false";
            data2 = "unread";
          }

          output +=
            `
            <div id="notification-rows" class="notification-rows notif-${i} ${data1} ${data2}" data-notif-row="${i}" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
            <div>
            <span class="notification-title font-normal">` +
            notifArray[i].title +
            `</span>
        <div>
            <span class="notification-datetime text-xs">` +
            notifArray[i].datetime +
            `</span>
            </div>
            </div>
        </div>
            `;
        }
        notificaiton[0].innerHTML = output;
        if (notificaiton_count) {
          notifCount[0].querySelector(".notification-count").innerHTML =
            notifPush.totalCount();
        }
        notifPush._sdk_notification_asc(notifPush);
        notifPush.readBellItemFromNotif();
      }
    };

    obj._sdk_notification_asc = function (notifPush) {
      var parent = document.querySelector(".notification-content");
      [].slice
        .call(parent.children)
        .sort(function (a, b) {
          return (
            -1 * notifPush._sd_getNotifString(a) -
            notifPush._sd_getNotifString(b)
          );
        })
        .forEach(function (ele) {
          parent.appendChild(ele);
        });
    };

    obj._sd_getNotifString = function (ele) {
      return (
        Number(
          ele
            .querySelector(".notification-datetime")
            .textContent.replace(/[^\d.]+/g, "")
        ) || 0
      );
    };

    obj._sdk_notification_sound = function () {
      setTimeout(() => {
        const audioClass = document.querySelector(".notif-audio");
        if (audioClass) document.querySelector(".notif-audio").remove();
        const audioEl = document.createElement("audio");
        audioEl.setAttribute("id", "notif-audio");
        audioEl.setAttribute("class", "notif-audio");
        audioEl.setAttribute(
          "src",
          url_default_page + "assets/main/sound/notification.mp3"
        );
        audioEl.setAttribute("autoplay", true);
        document.body.appendChild(audioEl);
        setTimeout(() => {
          const audioClass = document.querySelector(".notif-audio");
          if (audioClass) document.querySelector(".notif-audio").remove();
        }, 1000);
      }, 500);
    };

    return obj;
  })();

  var _sdk_add_recapitulation = (function () {
    var forms = [];

    function Item(fullnames, ages, cases, pinaltys, datetimes) {
      this.fullnames = fullnames;
      this.ages = ages;
      this.cases = cases;
      this.pinaltys = pinaltys;
      this.datetimes = datetimes;
    }

    function saveForms() {
      sessionStorage.setItem("_sdk_record_police", JSON.stringify(forms));
    }

    function loadForms() {
      forms = JSON.parse(sessionStorage.getItem("_sdk_record_police"));
    }
    if (sessionStorage.getItem("_sdk_record_police") != null) {
      loadForms();
    }

    var obj = {};

    obj.create_elements = function () {
      return `
    <form id="fromsSubmit" class="form-validation space-y-6" action="#">
        <div>
            <label for="id1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fullname ( <i>suspect</i> )</label>
            <input type="text" name="id1" id="id1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="e.g (Sodik or The Game or Ice Cube or Paramore or Coolio or Lil Pump)" required>
            <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">min 5, max 30 for length input. (a-z-A-z)</div>
        </div>
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age ( <i>suspect</i> )</label>
          <div class="flex">
            <div class="flex items-center mx-2">
                <input id="id2-1" type="radio" name="id2" value="1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="id2-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Less 18 years</label>
            </div>
            <div class="flex items-center mx-2">
                <input checked id="id2-2" type="radio" name="id2" value="2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="id2-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">More 18 years</label>
            </div>
          </div>
        </div>
        <div>
          <label for="id3" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Case Record ( <i>suspect</i> )</label>
          <select id="id3" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="" selected disabled hidden>Choose a case crime record</option>
            <option value="0">No criminal record</option>
            <option value="1">Drug offences (possession, trafficking, attempt to sell)</option>
            <option value="2">Sexual offences (sexual assault, sexual coercion, rape)</option>
            <option value="3">Violence against another individual (murder, attempted murder, assault)</option>
            <option value="4">Burglary and robbery</option>
            <option value="5">Theft (including possession of stolen property, attempt to sell stolen goods)</option>
            <option value="6">Fraud (including counts of forgery)</option>
            <option value="7">Motoring offences and infractions</option>
            <option value="8">Criminal damage (vandalism)</option>
          </select>
        </div>
        <div>
          <label for="id4" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Penalty Prison Count ( <i>suspect</i> )</label>
          <div class="flex">
            <input type="number" name="id4" id="id4" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="e.g (1 or 2 or more than years)" required>
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">Years</span>
          </div>
          <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">min 1, max 3 for length input. (0-9)</div>
        </div>
    </form>
    `;
    };

    obj.addItemData = function (fullnames, ages, cases, pinaltys) {
      var itemForms = new Item(
        fullnames,
        ages,
        cases,
        pinaltys,
        formatDateTime
      );
      forms.push(itemForms);
      saveForms();
    };

    obj.listData = function () {
      var formsCopy = [];
      for (var i in forms) {
        var item = forms[i];
        var itemCopy = {};
        for (var p in item) {
          itemCopy[p] = item[p];
        }
        itemCopy.total = Number(item.idforms * item.count).toFixed(2);
        formsCopy.push(itemCopy);
      }
      return formsCopy;
    };

    obj.create_validator = function (data1, data2, data3, data4) {
      var textAlfa = /^[a-zA-Z][a-zA-Z\s]*$/;
      var textNum = /^[0-9]*$/;
      if (data1.value.match(textAlfa)) {
        if (!data1.value)
          return data1.setAttribute(
            "class",
            "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
          );
        data1.setAttribute(
          "class",
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        );
        if (data1.value.length < 5)
          return data1.setAttribute(
            "class",
            "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
          );
        data1.setAttribute(
          "class",
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        );
        if (data1.value.length > 30)
          return data1.setAttribute(
            "class",
            "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
          );
        data1.setAttribute(
          "class",
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        );

        if (data4.value.match(textNum)) {
          if (!data4.value)
            return data4.setAttribute(
              "class",
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-l-md focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
            );
          data4.setAttribute(
            "class",
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          );

          if (data4.value.length < 1)
            return data4.setAttribute(
              "class",
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-l-md focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
            );
          data4.setAttribute(
            "class",
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          );
          if (data4.value.length > 3)
            return data4.setAttribute(
              "class",
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-l-md focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
            );
          data4.setAttribute(
            "class",
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          );
          _sdk_add_recapitulation.addItemData(
            data1.value,
            data2.value,
            data3.value,
            data4.value
          );
          _sdk_add_notification.addItemData(data1.value);
          _sdk_add_notification._sdk_notification_callback(
            _sdk_add_notification
          );
          _sdk_close_modal();
          _sdk_read_data();
        } else {
          return data4.setAttribute(
            "class",
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          );
        }
      } else {
        data1.setAttribute(
          "class",
          "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
        );
        data4.setAttribute(
          "class",
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        );
      }
    };

    return obj;
  })();

  var _sdk_add_view_case = (function () {
    var obj = {};
    obj.create_elements = function () {
      _sdk_add_view_case.create_jquery_tables();
      return `
      <div class="relative">
      <table id="jqueryTables" class="display">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
        <th scope="col" class="px-6 py-3">No</th>
          <th scope="col" class="px-6 py-3">Person Fullnames</th>
          <th scope="col" class="px-6 py-3">Person Ages</th>
          <th scope="col" class="px-6 py-3">Case Records</th>
          <th scope="col" class="px-6 py-3">Prison Sentence</th>
        </tr>
      </thead>
      <tbody class="preload-sessionData">${_sdk_add_view_case.create_object()}</tbody>
    </table>
      </div>`;
    };

    obj.create_object = function () {
      const dataTablesCard = document.querySelectorAll(".case-count");
      const dataArray = _sdk_add_recapitulation.listData();
      let output = "";
      var data1 = ""; // fullname
      var data2 = ""; // age
      var data3 = ""; // case
      var data4 = ""; // pinalty count
      var data5 = ""; // datetimes

      var countTables = 0;

      const dataArrayCount = sessionStorage.getItem("_sdk_record_police");
      const objectArrCount = JSON.parse(dataArrayCount);
      if (dataArrayCount) {
        for (var ic = 0; ic < objectArrCount.length; ic++) {
          countTables = ic + 1;
        }
      } else {
        countTables = 0;
      }

      dataTablesCard[0].innerHTML = countTables;

      for (var i in dataArray) {
        dataArray[i].fullnames == "" || dataArray[i].fullnames == null
          ? (data1 = "sodik")
          : (data1 = dataArray[i].fullnames);

        if (
          dataArray[i].ages == "" ||
          dataArray[i].ages == null ||
          dataArray[i].ages !== dataArray[i].ages
        ) {
          data2 = itc[10].title;
        } else {
          if (dataArray[i].cases == 1) {
            data2 = itc[9].title;
          } else if (dataArray[i].cases == 2) {
            data2 = itc[10].title;
          } else {
            data2 = itc[10].title;
          }
        }

        if (
          dataArray[i].cases == "" ||
          dataArray[i].cases == null ||
          dataArray[i].cases !== dataArray[i].cases
        ) {
          data3 = itc[0].title;
        } else {
          if (dataArray[i].cases == 1) {
            data3 = itc[1].title;
          } else if (dataArray[i].cases == 2) {
            data3 = itc[2].title;
          } else if (dataArray[i].cases == 3) {
            data3 = itc[3].title;
          } else if (dataArray[i].cases == 4) {
            data3 = itc[4].title;
          } else if (dataArray[i].cases == 5) {
            data3 = itc[5].title;
          } else if (dataArray[i].cases == 6) {
            data3 = itc[6].title;
          } else if (dataArray[i].cases == 7) {
            data3 = itc[7].title;
          } else if (dataArray[i].cases == 8) {
            data3 = itc[8].title;
          } else {
            data3 = itc[0].title;
          }
        }

        if (
          dataArray[i].pinaltys == "" ||
          dataArray[i].pinaltys == null ||
          dataArray[i].pinaltys !== dataArray[i].pinaltys
        ) {
          data4 = "0 years";
        } else {
          data4 = dataArray[i].pinaltys + " years";
        }

        if (
          dataArray[i].datetimes == "" ||
          dataArray[i].datetimes == null ||
          dataArray[i].datetimes !== dataArray[i].datetimes
        ) {
          data5 = formatDateTime;
        } else {
          data5 = dataArray[i].datetimes;
        }

        output +=
          `
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="px-6 py-4">` +
          i +
          `</td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ` +
          data1 +
          `
            </th>
            <td class="px-6 py-4">` +
          data2 +
          `</td>
            <td class="px-6 py-4">` +
          data3 +
          `</td>
            <td class="px-6 py-4">` +
          data4 +
          `</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >
            </td>
          </tr>
          `;
      }
      return output;
    };

    obj.create_jquery_tables = function () {
      const scriptJqueryTables = document.querySelector(
        "#jquery-tables-preload"
      );
      if (scriptJqueryTables)
        document.querySelector("#jquery-tables-preload").remove();
      setTimeout(() => {
        var scrpt = document.createElement("script");
        scrpt.setAttribute("id", "jquery-tables-preload");
        scrpt.innerHTML =
          "$(document).ready( function () { $('#jqueryTables').DataTable(); } );";
        document.body.appendChild(scrpt);
      }, 500);
    };

    return obj;
  })();

  function _sdk_add_request() {
    const forms = document.forms["fromsSubmit"];
    if (forms) {
      const data1 = document.forms["fromsSubmit"]["id1"];
      const data2 = document.forms["fromsSubmit"]["id2"];
      const data3 = document.forms["fromsSubmit"]["id3"];
      const data4 = document.forms["fromsSubmit"]["id4"];

      if (data1 && data2 && data3 && data4) {
        const btnTrigger = document.querySelectorAll(".dataFromsSubmit");
        if (btnTrigger) {
          for (var i = 0; i < btnTrigger.length; i++) {
            btnTrigger[i].addEventListener("click", function (e) {
              e.preventDefault();
              _sdk_add_recapitulation.create_validator(
                data1,
                data2,
                data3,
                data4
              );
            });
          }
        }
      }
    }
  }

  function _sdk_get_data() {
    if (otc && etc) {
      document.querySelector(".modal-title").innerHTML = _sdk_filter_head(
        otc,
        itc,
        etc
      );

      document.querySelector(".modal-body").innerHTML = _sdk_animate_loader();
      setTimeout(() => {
        document.querySelector(".modal-body").innerHTML = _sdk_filter_body(
          otc,
          itc,
          etc
        );
        document.querySelector(".modal-footer").innerHTML = _sdk_filter_footer(
          otc,
          itc,
          etc
        );
      }, 3000);
      _sdk_backgrop_silent();
    }
  }

  function _sdk_animate_loader() {
    return `
    <div class="sdk-loader-1998">
    <div class="custom-loader"></div>
    </div>
    `;
  }

  function _sdk_filter_head(data_json1, data_json2, data_attr) {
    if (data_attr == "99") return owner_name;
    if (data_attr == "98") return owner_project_name;
    return data_json1[data_attr].title;
  }

  function _sdk_filter_body(data_json1, data_json2, data_attr) {
    if (data_attr == "0") return _sdk_about_us();
    if (data_attr == "1") return _sdk_add_recapitulation.create_elements();
    if (data_attr == "2" || data_attr == "99" || data_attr == "98")
      return _sdk_add_contact_us(data_attr);
    if (data_attr == "3") return _sdk_add_license();
    if (data_attr == "4") return _sdk_add_view_case.create_elements();
    if (data_attr == "5") return _sdk_add_view_accounts();
  }

  function _sdk_filter_footer(data_json1, data_json2, data_attr) {
    if (data_attr == "0") return "";
    if (data_attr == "1") return _sdk_create_footer(1);
    if (data_attr == "2" || data_attr == "99" || data_attr == "98") return "";
    if (data_attr == "3") return "";
    if (data_attr == "4") return "";
    if (data_attr == "5") return "";
  }

  function _sdk_create_footer(dataBtn) {
    return `
    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">${_sdk_filter_button(
      dataBtn
    )}</div>
    `;
  }

  function _sdk_filter_button(button) {
    if (button == 1)
      return `
    <button type="submit" id="dataFromsSubmit" class="dataFromsSubmit btnFromsValidation w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
    `;

    if (button == 2)
      return `
    <button type="button" class="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" data-modal-hide="defaultModalsMenu">Close</button>
    `;
  }

  function _sdk_about_us() {
    return `
    <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex sm:justify-center w-full text-center mt-2 mb-1">
        <h3 class="flex items-center text-lg font-semibold text-gray-900 dark:text-white">Polri Application UI v1.0-Beta <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span></h3>
      </div>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Is a small or large data recapitulation system for the purposes of covering the territory of the Republic of Indonesia Police.</p>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">This system is still under development to maximize renewable performance.</p>
    </div>
    `;
  }

  function _sdk_add_contact_us(roles) {
    let d1 = "",
      d2 = "",
      d3 = "",
      d4 = "";
    if (roles == "2" || roles == "99") {
      d1 = owner_images;
      d2 = owner_name;
      d3 = "Junior Full Stack / Clone Programmer's";
      d4 = `
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Facebook</th>
        <td class="px-6 py-4">
            <a href="https://web.facebook.com/00000TAS11111" class="inline-flex font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">
            Link
            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </a>
        </td>
      </tr>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Instagram</th>
        <td class="px-6 py-4">
            <a href="https://www.instagram.com/tamddk/" class="inline-flex font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">
            Link
            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </a>
        </td>
      </tr>
      <tr class="bg-white dark:bg-gray-800">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Linkedin</th>
        <td class="px-6 py-4">
            <a href="https://www.linkedin.com/in/sodikun/" class="inline-flex items-center  font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">
            Link
            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </a>
        </td>
      </tr>
      `;
    } else {
      d1 = owner_project_images;
      d2 = owner_project_name;
      d3 = "Sodik Sale Web Masterpiece";
      d4 = `
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Facebook</th>
        <td class="px-6 py-4">
            <a href="https://web.facebook.com/profile.php?id=100092412772353" class="inline-flex font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">
            Link
            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </a>
        </td>
      </tr>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Instagram</th>
        <td class="px-6 py-4">
            <a href="https://www.instagram.com/project_sodik/" class="inline-flex font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">
            Link
            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </a>
        </td>
      </tr>
      <tr class="bg-white dark:bg-gray-800">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Youtube</th>
        <td class="px-6 py-4">
            <a href="https://www.youtube.com/@project_sodik/" class="inline-flex items-center  font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">
            Link
            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </a>
        </td>
      </tr>
      `;
    }
    return `
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center pt-10 pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="${d1}" alt="${d2}"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${d2}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">${d3}</span>
        <hr />
        <div class="relative overflow-x-auto mt-3 shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Social Media
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Link
                    </th>
                </tr>
            </thead>
            <tbody>${d4}</tbody>
            </table>
        </div>
    </div>
</div>
    `;
  }

  function _sdk_add_license() {
    return `
<div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">We Our License</h5>
    <hr />
    <div class="flex sm:justify-center w-full text-center mt-2 mb-1">
      <h3 class="flex items-center text-lg font-semibold text-gray-900 dark:text-white">Polri Application UI v1.0-Beta <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span></h3>
    </div>
    <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <a href="https://github.com/tamddk/" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" target="_blank">
        <svg
        class="mr-3 w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="48px"
        height="48px"
      >
        <linearGradient
          id="rL2wppHyxHVbobwndsT6Ca"
          x1="4"
          x2="44"
          y1="23.508"
          y2="23.508"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#4c4c4c" />
          <stop offset="1" stop-color="#343434" />
        </linearGradient>
        <path
          fill="url(#rL2wppHyxHVbobwndsT6Ca)"
          d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36	C38.199,40.411,44,32.887,44,24C44,12.954,35.046,4,24,4z"
        />
        <path
          d="M30.01,41.996L30,36.198c0-0.939-0.22-1.856-0.642-2.687c5.641-1.133,8.386-4.468,8.386-10.177	c0-2.255-0.665-4.246-1.976-5.92c0.1-0.317,0.174-0.645,0.22-0.981c0.188-1.369-0.023-2.264-0.193-2.984l-0.027-0.116	c-0.186-0.796-0.409-1.364-0.418-1.388l-0.111-0.282l-0.111-0.282l-0.302-0.032l-0.303-0.032c0,0-0.199-0.021-0.501-0.021	c-0.419,0-1.04,0.042-1.627,0.241l-0.196,0.066c-0.74,0.249-1.439,0.485-2.417,1.069c-0.286,0.171-0.599,0.366-0.934,0.584	C27.334,12.881,25.705,12.69,24,12.69c-1.722,0-3.365,0.192-4.889,0.571c-0.339-0.22-0.654-0.417-0.942-0.589	c-0.978-0.584-1.677-0.819-2.417-1.069l-0.196-0.066c-0.585-0.199-1.207-0.241-1.626-0.241c-0.302,0-0.501,0.021-0.501,0.021	l-0.302,0.032l-0.3,0.031l-0.112,0.281l-0.113,0.283c-0.01,0.026-0.233,0.594-0.419,1.391l-0.027,0.115	c-0.17,0.719-0.381,1.615-0.193,2.983c0.048,0.346,0.125,0.685,0.23,1.011c-1.285,1.666-1.936,3.646-1.936,5.89	c0,5.695,2.748,9.028,8.397,10.17c-0.194,0.388-0.345,0.798-0.452,1.224c-0.197,0.067-0.378,0.112-0.538,0.137	c-0.238,0.036-0.487,0.054-0.739,0.054c-0.686,0-1.225-0.134-1.435-0.259c-0.313-0.186-0.872-0.727-1.414-1.518	c-0.463-0.675-1.185-1.558-1.992-1.927c-0.698-0.319-1.437-0.502-2.029-0.502c-0.138,0-0.265,0.01-0.376,0.028	c-0.517,0.082-0.949,0.366-1.184,0.78c-0.203,0.357-0.235,0.773-0.088,1.141c0.219,0.548,0.851,0.985,1.343,1.255	c0.242,0.133,0.765,0.619,1.07,1.109c0.229,0.368,0.335,0.63,0.482,0.992c0.087,0.215,0.183,0.449,0.313,0.732	c0.47,1.022,1.937,1.924,2.103,2.023c0.806,0.483,2.161,0.638,3.157,0.683l0.123,0.003c0,0,0.001,0,0.001,0	c0.24,0,0.57-0.023,1.004-0.071v2.613c0.002,0.529-0.537,0.649-1.25,0.638l0.547,0.184C19.395,43.572,21.645,44,24,44	c2.355,0,4.605-0.428,6.703-1.176l0.703-0.262C30.695,42.538,30.016,42.422,30.01,41.996z"
          opacity=".05"
        />
        <path
          d="M30.781,42.797c-0.406,0.047-1.281-0.109-1.281-0.795v-5.804c0-1.094-0.328-2.151-0.936-3.052	c5.915-0.957,8.679-4.093,8.679-9.812c0-2.237-0.686-4.194-2.039-5.822c0.137-0.365,0.233-0.75,0.288-1.147	c0.175-1.276-0.016-2.086-0.184-2.801l-0.027-0.116c-0.178-0.761-0.388-1.297-0.397-1.319l-0.111-0.282l-0.303-0.032	c0,0-0.178-0.019-0.449-0.019c-0.381,0-0.944,0.037-1.466,0.215l-0.196,0.066c-0.714,0.241-1.389,0.468-2.321,1.024	c-0.332,0.198-0.702,0.431-1.101,0.694C27.404,13.394,25.745,13.19,24,13.19c-1.762,0-3.435,0.205-4.979,0.61	c-0.403-0.265-0.775-0.499-1.109-0.699c-0.932-0.556-1.607-0.784-2.321-1.024l-0.196-0.066c-0.521-0.177-1.085-0.215-1.466-0.215	c-0.271,0-0.449,0.019-0.449,0.019l-0.302,0.032l-0.113,0.283c-0.009,0.022-0.219,0.558-0.397,1.319l-0.027,0.116	c-0.169,0.715-0.36,1.524-0.184,2.8c0.056,0.407,0.156,0.801,0.298,1.174c-1.327,1.62-1.999,3.567-1.999,5.795	c0,5.703,2.766,8.838,8.686,9.806c-0.395,0.59-0.671,1.255-0.813,1.964c-0.33,0.13-0.629,0.216-0.891,0.256	c-0.263,0.04-0.537,0.06-0.814,0.06c-0.69,0-1.353-0.129-1.69-0.329c-0.44-0.261-1.057-0.914-1.572-1.665	c-0.35-0.51-1.047-1.417-1.788-1.755c-0.635-0.29-1.298-0.457-1.821-0.457c-0.11,0-0.21,0.008-0.298,0.022	c-0.366,0.058-0.668,0.252-0.828,0.534c-0.128,0.224-0.149,0.483-0.059,0.708c0.179,0.448,0.842,0.85,1.119,1.002	c0.335,0.184,0.919,0.744,1.254,1.284c0.251,0.404,0.37,0.697,0.521,1.067c0.085,0.209,0.178,0.437,0.304,0.712	c0.331,0.719,1.353,1.472,1.905,1.803c0.754,0.452,2.154,0.578,2.922,0.612l0.111,0.002c0.299,0,0.8-0.045,1.495-0.135v3.177	c0,0.779-0.991,0.81-1.234,0.81c-0.031,0,0.503,0.184,0.503,0.184C19.731,43.64,21.822,44,24,44c2.178,0,4.269-0.36,6.231-1.003	C30.231,42.997,30.812,42.793,30.781,42.797z"
          opacity=".07"
        />
        <path
          fill="#fff"
          d="M36.744,23.334c0-2.31-0.782-4.226-2.117-5.728c0.145-0.325,0.296-0.761,0.371-1.309	c0.172-1.25-0.031-2-0.203-2.734s-0.375-1.25-0.375-1.25s-0.922-0.094-1.703,0.172s-1.453,0.469-2.422,1.047	c-0.453,0.27-0.909,0.566-1.27,0.806C27.482,13.91,25.785,13.69,24,13.69c-1.801,0-3.513,0.221-5.067,0.652	c-0.362-0.241-0.821-0.539-1.277-0.811c-0.969-0.578-1.641-0.781-2.422-1.047s-1.703-0.172-1.703-0.172s-0.203,0.516-0.375,1.25	s-0.375,1.484-0.203,2.734c0.077,0.562,0.233,1.006,0.382,1.333c-1.31,1.493-2.078,3.397-2.078,5.704	c0,5.983,3.232,8.714,9.121,9.435c-0.687,0.726-1.148,1.656-1.303,2.691c-0.387,0.17-0.833,0.33-1.262,0.394	c-1.104,0.167-2.271,0-2.833-0.333s-1.229-1.083-1.729-1.813c-0.422-0.616-1.031-1.331-1.583-1.583	c-0.729-0.333-1.438-0.458-1.833-0.396c-0.396,0.063-0.583,0.354-0.5,0.563c0.083,0.208,0.479,0.521,0.896,0.75	c0.417,0.229,1.063,0.854,1.438,1.458c0.418,0.674,0.5,1.063,0.854,1.833c0.249,0.542,1.101,1.219,1.708,1.583	c0.521,0.313,1.562,0.491,2.688,0.542c0.389,0.018,1.308-0.096,2.083-0.206v3.75c0,0.639-0.585,1.125-1.191,1.013	C19.756,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.585,43.127,29,42.641,29,42.002v-5.804	c0-1.329-0.527-2.53-1.373-3.425C33.473,32.071,36.744,29.405,36.744,23.334z M11.239,32.727c-0.154-0.079-0.237-0.225-0.185-0.328	c0.052-0.103,0.22-0.122,0.374-0.043c0.154,0.079,0.237,0.225,0.185,0.328S11.393,32.806,11.239,32.727z M12.451,33.482	c-0.081,0.088-0.255,0.06-0.389-0.062s-0.177-0.293-0.096-0.381c0.081-0.088,0.255-0.06,0.389,0.062S12.532,33.394,12.451,33.482z M13.205,34.732c-0.102,0.072-0.275,0.005-0.386-0.15s-0.118-0.34-0.016-0.412s0.275-0.005,0.386,0.15	C13.299,34.475,13.307,34.66,13.205,34.732z M14.288,35.673c-0.069,0.112-0.265,0.117-0.437,0.012s-0.256-0.281-0.187-0.393	c0.069-0.112,0.265-0.117,0.437-0.012S14.357,35.561,14.288,35.673z M15.312,36.594c-0.213-0.026-0.371-0.159-0.353-0.297	c0.017-0.138,0.204-0.228,0.416-0.202c0.213,0.026,0.371,0.159,0.353,0.297C15.711,36.529,15.525,36.62,15.312,36.594z M16.963,36.833c-0.227-0.013-0.404-0.143-0.395-0.289c0.009-0.146,0.2-0.255,0.427-0.242c0.227,0.013,0.404,0.143,0.395,0.289	C17.381,36.738,17.19,36.846,16.963,36.833z M18.521,36.677c-0.242,0-0.438-0.126-0.438-0.281s0.196-0.281,0.438-0.281	c0.242,0,0.438,0.126,0.438,0.281S18.762,36.677,18.521,36.677z"
        />
      </svg>

            <div class="text-left">
                <div class="mb-1 text-xs">Download on the</div>
                <div class="-mt-1 font-sans text-sm font-semibold">Github</div>
            </div>
        </a>
    </div>
</div>
    `;
  }

  function _sdk_add_view_accounts() {
    _sdk_add_view_case.create_jquery_tables();
    let _user = localStorage.getItem("_sdk_user"),
      _user_parse = JSON.parse(_user);

    return `
    <div class="relative">
    <table id="jqueryTables" class="display">
    <thead
      class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    >
      <tr>
      <th scope="col" class="px-6 py-3">No</th>
        <th scope="col" class="px-6 py-3">Fullnames</th>
        <th scope="col" class="px-6 py-3">Images</th>
        <th scope="col" class="px-6 py-3">Email</th>
        <th scope="col" class="px-6 py-3">Access</th>
      </tr>
    </thead>
    <tbody class="preload-usersData">
    <tr class="border-b border-gray-200 dark:border-gray-700">
          <td class="px-6 py-4">
              1
          </td>
          <th scope="row" class="px-6 py-4">
          ${_user_parse[0].toLowerCase()}
          </th>
          <td class="px-6 py-4">
            <a href="${_user_parse[1].toLowerCase()}" target="_blank">Link</a>
          </td>
          <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
          ${_user_parse[2].toLowerCase()}
          </td>
          <td class="px-6 py-4 bg-green-400">
              DEMO
          </td>
      </tr>
    <tr class="border-b border-gray-200 dark:border-gray-700">
          <td class="px-6 py-4">
              2
          </td>
          <th scope="row" class="px-6 py-4">
              Tubagus Ahmad Sodik
          </th>
          <td class="px-6 py-4">
            <a href="https://www.instagram.com/tamddk/" target="_blank">Link</a>
          </td>
          <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
              sodik.project@gmail.com
          </td>
          <td class="px-6 py-4 bg-yellow-400">
              Owner
          </td>
      </tr>
      <tr class="border-b border-gray-200 dark:border-gray-700">
          <td class="px-6 py-4">
              3
          </td>
          <th scope="row" class="px-6 py-4">
              Project Sodik
          </th>
          <td class="px-6 py-4">
            <a href="https://www.instagram.com/project_sodik/" target="_blank">Link</a>
          </td>
          <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
              sodik.project@gmail.com
          </td>
          <td class="px-6 py-4 bg-yellow-400">
              Owner
          </td>
      </tr>
    </tbody>
  </table>
    </div>`;
  }

  function _sdk_onload() {
    _sdk_get_data();
    setTimeout(() => {
      _sdk_add_request();
    }, 3000);
  }

  function _sdk_close_modal() {
    const modals = document.querySelectorAll("#defaultModalsMenu");
    for (let i = 0; i < modals.length; i++) {
      modals[i].classList.add("hidden");
      document.querySelector("#modal-backdrop").classList.add("hidden");
    }
  }

  function _sdk_read_data() {
    var countTables = 0;
    const dataTablesCard = document.querySelectorAll(".case-count");
    if (dataTablesCard) {
      const dataArrayCount = sessionStorage.getItem("_sdk_record_police");
      const objectArrCount = JSON.parse(dataArrayCount);

      if (dataArrayCount) {
        for (var ic = 0; ic < objectArrCount.length; ic++) {
          countTables = ic + 1;
        }
      } else {
        countTables = 0;
      }

      dataTablesCard[0].innerHTML = countTables;
    }
  }

  function _sdk_backgrop_silent(err) {
    const silentPage = document.querySelector(".silent-page-by-sodik");
    if (silentPage) document.querySelector(".silent-page-by-sodik").remove();
    var div = document.createElement("div");
    div.setAttribute("id", "silent-page-by-sodik");
    div.setAttribute("class", "silent-page-by-sodik sdk-silent-1998");
    document.body.appendChild(div);
    setTimeout(() => {
      const silentPage = document.querySelector(".silent-page-by-sodik");
      if (silentPage) document.querySelector(".silent-page-by-sodik").remove();
    }, 3000);
  }

  return _sdk_onload();
}
