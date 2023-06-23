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
export function notification_main() {
  var _sdk_notification = (function () {
    let cart = [];

    // Constructor
    function Item(title, status, count, datetime) {
      this.title = title;
      this.status = status;
      this.count = count;
      this.datetime = datetime;
    }

    // Save cart
    function saveCart() {
      sessionStorage.setItem("_sdk_notif", JSON.stringify(cart));
    }

    // Load cart
    function loadCart() {
      cart = JSON.parse(sessionStorage.getItem("_sdk_notif"));
    }
    if (sessionStorage.getItem("_sdk_notif") != null) {
      loadCart();
    }

    var obj = {};

    // Add to cart
    obj.addItemToCart = function (title, status, count, datetime) {
      for (var item in cart) {
        if (cart[item].title === title) {
          cart[item].count;
          saveCart();
          return;
        }
      }
      var item = new Item(title, status, count, datetime);
      cart.push(item);
      saveCart();
    };
    obj.addItemLoopToCart = function (title, status, count, datetime) {
      var item = new Item(title, status, count, datetime);
      cart.push(item);
      saveCart();
    };
    // Set count from item
    obj.setCountForItem = function (title, count) {
      for (var i in cart) {
        if (cart[i].title === title) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove item from cart
    obj.readJsonItemFromCart = function () {
      for (var item in cart) {
        cart[item].status = true;
        _sdk_notification.readClassItemFromNotif();
      }
      saveCart();
    };

    obj.readByClickItemFromCart = function (id) {
      for (var item in cart) {
        if (item == id) {
          cart[id].status = true;
        }
      }
      saveCart();
    };

    obj.readBellItemFromNotif = function () {
      for (var item in cart) {
        const notif_bell = document.querySelectorAll("[data-bell-toggle]");
        if (notif_bell) {
          if (cart[item].status == true) {
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
      for (var item in cart) {
        const notif_el1 = document.querySelectorAll(".notification-rows");
        if (notif_el1) {
          if (cart[item].status == true)
            notif_el1[item].setAttribute(
              "class",
              "notification-rows notif-" +
                item +
                " notif-" +
                cart[item].status +
                " read"
            );
          notif_el1[item].setAttribute(
            "class",
            "notification-rows notif-" + item + " notif-true read"
          );
        }
      }
    };

    // Remove all items from cart
    obj.removeItemFromCartAll = function (title) {
      for (var item in cart) {
        if (cart[item].title === title) {
          cart.splice(item, 1);
          break;
        }
      }
      saveCart();
    };

    // Clear cart
    obj.clearCart = function () {
      cart = [];
      saveCart();
    };

    // Count cart
    obj.totalCount = function () {
      var totalCount = 0;
      for (var item in cart) {
        if (cart[item].status == true) {
          totalCount += cart[item].count - cart[item].count;
        } else {
          totalCount += cart[item].count;
          _sdk_notification_sound();
        }
      }
      if (totalCount > 99) return "99";
      return totalCount;
    };

    // Total cart
    obj.totalCart = function () {
      var totalCart = 0;
      for (var item in cart) {
        totalCart += cart[item].status * cart[item].count;
      }
      return Number(totalCart.toFixed(2));
    };

    // List cart
    obj.listCart = function () {
      var cartCopy = [];
      for (var i in cart) {
        var item = cart[i];
        var itemCopy = {};
        for (var p in item) {
          itemCopy[p] = item[p];
        }
        itemCopy.total = Number(item.status * item.count).toFixed(2);
        cartCopy.push(itemCopy);
      }
      return cartCopy;
    };

    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
  })();

  var _user = localStorage.getItem("_sdk_user"),
    _user_parse = JSON.parse(_user);

  function _sdk_notification_object() {
    _sdk_notification.addItemToCart(
      "welcome " + _user_parse[0] + " in main page national police.",
      false,
      1,
      _sdk_datetime()
    );
    _sdk_notification.addItemToCart(
      "This application is still under development to maximize existing performance.",
      false,
      1,
      _sdk_datetime()
    );

    _sdk_notification_callback(_sdk_notification);
  }

  function _sdk_notification_callback(funcNotif) {
    const notificaiton = document.querySelectorAll("[data-bell-toggle]");
    const notificaiton_remove = document.querySelectorAll(
      "[data-notif-remove-toggle]"
    );
    if (notificaiton || notificaiton_remove) {
      _sdk_notification_silent(funcNotif, notificaiton, notificaiton_remove),
        _sdk_notification_create_object(funcNotif, notificaiton);
    }
  }

  function _sdk_notification_silent(notifPush, tigger1, trigger2) {
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
      _sdk_notificaiton_empty();
    });
    setTimeout(() => {
      _sdk_notifiation_click_byorder(tigger1, notifPush);
    }, 500);
  }

  function _sdk_notification_create_object(notifPush, notifCount) {
    const notificaiton = document.querySelectorAll(".notification-content");
    const notificaiton_count = document.querySelectorAll(".notification-count");
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
      _sdk_notification_asc();
      notifPush.readBellItemFromNotif();
    }
  }

  function _sdk_notification_asc() {
    var parent = document.querySelector(".notification-content");
    [].slice
      .call(parent.children)
      .sort(function (a, b) {
        return -1 * _sd_getNotifString(a) - _sd_getNotifString(b);
      })
      .forEach(function (ele) {
        parent.appendChild(ele);
      });
  }

  function _sd_getNotifString(ele) {
    return (
      Number(
        ele
          .querySelector(".notification-datetime")
          .textContent.replace(/[^\d.]+/g, "")
      ) || 0
    );
  }

  function _sdk_notification_loaded_khawatir() {
    setTimeout(() => {
      _sdk_notification_khawatir();
    }, 60000 * 30);
    // 60000 * 30 = 30 Minute
    // 1000 = 1 Second
  }

  function _sdk_datetime() {
    return formatDateTime;
  }

  function _sdk_notification_khawatir() {
    _sdk_notification.addItemLoopToCart(
      "Hi " + _user_parse[0] + ", i hope you are still here? from Mas Sodik",
      false,
      1,
      _sdk_datetime()
    );
    document.querySelector(".bell").setAttribute("class", "bell nx rz active");
    document
      .querySelector(".notification-count")
      .setAttribute(
        "class",
        "notification-count mt-4 absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white border-2 border-white rounded-full -top-2 -right-2 active"
      );
    _sdk_notification_callback(_sdk_notification);
    _sdk_notification_loaded_khawatir();
  }

  function _sdk_notifiation_click_byorder(tigger1, notifPush) {
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
  }

  _sdk_notificaiton_forms();

  setTimeout(() => {
    _sdk_notification_object();
    _sdk_notification_loaded_khawatir();
  }, 1000);

  function _sdk_notification_sound() {
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
  }

  function _sdk_notificaiton_empty() {
    const notif_bell = document.querySelectorAll("[data-bell-toggle]");
    sessionStorage.removeItem("_sdk_notif");
    if (notif_bell) {
      notif_bell[0].querySelector(".bell").setAttribute("class", "bell nx rz");
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
  }

  function _sdk_notificaiton_forms() {
    const forms = document.forms["fromsSubmit"];
    if (forms) {
      const data1 = document.forms["fromsSubmit"]["id1"];
      const btnTrigger = document.querySelectorAll(".dataFromsSubmit");
      if (btnTrigger) {
        for (var i = 0; i < btnTrigger.length; i++) {
          btnTrigger[i].addEventListener("click", function (e) {
            console.log(data1.value);
          });
        }
      }
    }
  }

  function _sdk_scroll_load() {
    var scrollHeight = $(object).prop("scrollHeight");
    var scrollTop = $(object).scrollTop();
    var height = $(object).height();

    if (scrollHeight === scrollTop + height) {
      _sdk_notification_object();
    }
  }
}
