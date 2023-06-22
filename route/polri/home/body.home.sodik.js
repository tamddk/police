export function body_home(data_arr2, data_arr3) {
  document.location.reload();
  function _sdk_pages() {
    return `
    <div class="relative w-full px-4 mx-auto max-w-8xl">
    <div class="lg:flex">
      <main
        id="content-wrapper"
        class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible"
      >
        <div class="flex w-full">
          <div class="flex-auto min-w-0 pt-6 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16">
            <div class="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">

  <div class="ab dx adb auk">
    <header class="asp auz cfu">
      <div class="gs ls tv yo yu zm ard cav ces dcx">
        <h1 class="dark:text-gray-400 avt awb awl axq">Police record</h1>
        <a
          href="#"
          id="defaultModals"
          class="jz ls yu zs adp ajm ara arq avv awb bac bbi bin bot bou bow bpf"
          data-modal-toggle="defaultModalsMenu"
          data-modal-load="1"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            class="hj nu rw"
          >
            <path
              d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            ></path>
          </svg>
          New recapitulation</a
        >
      </div>
    </header>
    <dl class="le lw yb zl caj cyi">
      <div class="dark:bg-gray-800 ab adb ado alj ard asg auy bbd ces che" data-aos="slide-up">
        <dt>
          <div class="aa adp ajk aqn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="nx rz bac"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
              ></path>
            </svg>
          </div>
          <p class="jn adg avv avz axm">Total Case</p>
        </dt>
        <dd class="jn ls yv asr cfw">
          <p id="case-count" class="case-count avm awb axq">0</p>
          <div class="dark:bg-gray-800 aa aj bx ail ard arx ces">
            <div class="avv">
              <a
                href="#"
                id="defaultModals"
                class="avz ayc bla"
                data-modal-toggle="defaultModalsMenu"
                data-modal-load="4"
                >View all<span class="t"> Total Case stats</span></a
              >
            </div>
          </div>
        </dd>
      </div>
      <div class="dark:bg-gray-800 ab adb ado alj ard asg auy bbd ces che" data-aos="slide-up">
        <dt>
          <div class="aa adp ajk aqn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="nx rz bac"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
              ></path>
            </svg>
          </div>
          <p class="jn adg avv avz axm">Total Accounts</p>
        </dt>
        <dd class="jn ls yv asr cfw">
          <p id="accounts-count" class="accounts-count avm awb axq">3</p>
          <div class="dark:bg-gray-800 aa aj bx ail ard arx ces">
            <div class="avv">
              <a
                href="#"
                id="defaultModals"
                class="avz ayc bla"
                data-modal-toggle="defaultModalsMenu"
                data-modal-load="5"
                >View all<span class="t"> Total Accounts stats</span></a
              >
            </div>
          </div>
        </dd>
      </div>
    </dl>
  </div>
  <div class="le lw yb zl caj cyh">
    <div class="dark:bg-gray-800 ab adb ado alj ard asg auy bbd ces che">
      <canvas id="record-case-line"></canvas>
    </div>
    <div class="dark:bg-gray-800 ab adb ado alj ard asg auy bbd ces che">
      <canvas id="record-case-bar"></canvas>
    </div>
  </div>
  <div class="le lw yb zl caj cyh">
  <div class="dark:bg-gray-800 ab adb ado alj ard asg auy bbd ces che">
    <canvas id="record-case-radar"></canvas>
  </div>
  <div class="dark:bg-gray-800 ab adb ado alj ard asg auy bbd ces che">
    <canvas id="record-case-area"></canvas>
  </div>
  </div>
  <div class="my-8"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
      `;
  }

  function _sdk_create_jQueryTables() {
    var css0 = document.createElement("link");
    css0.setAttribute("id", "jquery-datatables-css");
    css0.setAttribute("rel", "stylesheet");
    css0.setAttribute(
      "href",
      url_default_page +
        "assets/vendor/jquery-tables/dist/css/jquery.dataTables.css"
    );
    document.head.appendChild(css0);

    var scrpt0 = document.createElement("script");
    scrpt0.setAttribute("id", "jquery-js");
    scrpt0.src =
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.js";
    document.head.appendChild(scrpt0);

    setTimeout(() => {
      var scrpt1 = document.createElement("script");
      scrpt1.setAttribute("id", "jquery-datatables-js");
      scrpt1.src =
        url_default_page +
        "assets/vendor/jquery-tables/dist/js/jquery.dataTables.js";
      document.head.appendChild(scrpt1);
    }, 500);
  }

  function _sdk_create_chartjs() {
    var scrpt2 = document.createElement("script");
    scrpt2.setAttribute("id", "chart-js");
    scrpt2.src =
      url_default_page + "assets/vendor/chartjs/dist/js/chartjs-2.6.0.js";
    document.head.appendChild(scrpt2);
    setTimeout(() => {
      var scrpt3 = document.createElement("script");
      scrpt3.setAttribute("id", "chart-script");
      scrpt3.innerHTML = _sdk_create_chartscript();
      document.body.appendChild(scrpt3);
    }, 1000);
  }

  function _sdk_create_aos() {
    var css1 = document.createElement("link");
    css1.setAttribute("id", "aos-css");
    css1.setAttribute("rel", "stylesheet");
    css1.setAttribute(
      "href",
      url_default_page + "assets/vendor/aos/dist/css/aos-2.3.0.css"
    );
    document.head.appendChild(css1);

    var scrpt4 = document.createElement("script");
    scrpt4.setAttribute("id", "aos-js");
    scrpt4.src =
      url_default_page + "assets/vendor/aos/dist/js/aos-2.3.0.min.js";
    document.head.appendChild(scrpt4);

    setTimeout(() => {
      var scrpt5 = document.createElement("script");
      scrpt5.setAttribute("id", "aos-script");
      scrpt5.innerHTML =
        "$(document).ready( function () { AOS.init({ offset: 20, duration: 1200, }) } );";
      document.head.appendChild(scrpt5);
    }, 500);
  }

  function _sdk_create_chartscript() {
    return `
      window.chartColors = {
        red: "rgb(255, 99, 132)",
        orange: "rgb(255, 159, 64)",
        yellow: "rgb(255, 205, 86)",
        green: "rgb(75, 192, 192)",
        blue: "rgb(54, 162, 235)",
        purple: "rgb(153, 102, 255)",
        grey: "rgb(201, 203, 207)",
      };
      window.chartBackground = {
        red: "rgb(255 224 230)",
        blue: "rgb(215 236 251)",
      }
      var MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      var lineChartData = {
        type: "line",
        data: {
          labels: [
            "${_sdk_create_chartdata.createMonth()}"
          ],
          datasets: [
            {
              label: "Total Case",
              backgroundColor: window.chartColors.red,
              borderColor: window.chartColors.red,
              data: [${_sdk_create_chartdata.createCount()}],
              fill: false,
            },
            {
              label: "Total Accounts",
              backgroundColor: window.chartColors.blue,
              borderColor: window.chartColors.blue,
              data: [3],
              fill: false,
            }
          ],
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: "Chart.js Line Chart",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Month",
                },
              },
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Value",
                },
              },
            ],
          },
        },
      };
      var barChartData = {
        type: 'bar',
        data: {
          labels: ["${_sdk_create_chartdata.createMonth()}"],
          datasets: [
            {
              label: "Total Case",
              backgroundColor: window.chartColors.red,
              borderColor: window.chartColors.red,
              borderWidth: 1,
              data: [${_sdk_create_chartdata.createCount()}],
            },
            {
              label: "Total Accounts",
              backgroundColor: window.chartColors.blue,
              borderColor: window.chartColors.blue,
              borderWidth: 1,
              data: [3],
            },
          ],
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart'
            }
        }
    };
    var radarChartData = {
      type: "radar",
      data: {
        labels: [["Total Case", "Total Accounts"], "Total Case", "Total Accounts"],
        datasets: [
          {
            label: "Total Case",
            backgroundColor: window.chartBackground.red,
            borderColor: window.chartColors.red,
            pointBackgroundColor: window.chartColors.red,
            data: [${_sdk_create_chartdata.createCount()} + 3,${_sdk_create_chartdata.createCount()},3],
          },
          {
            label: "Total Case",
            backgroundColor: window.chartBackground.blue,
            borderColor: window.chartColors.blue,
            pointBackgroundColor: window.chartColors.blue,
            data: [${_sdk_create_chartdata.createCount()},${_sdk_create_chartdata.createCount()},3],
          },
        ],
      },
      options: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Radar Chart",
        },
        scale: {
          ticks: {
            beginAtZero: true,
          },
        },
      },
    };
    var areaChartData = {
      data: {
        labels: ["Total Case", "Total Accounts"],
        datasets: [
          {
            label: "Total Case",
            backgroundColor: [
              window.chartBackground.blue,
              window.chartBackground.red
            ],
            data: [${_sdk_create_chartdata.createCount()},3],
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          position: "right",
        },
        title: {
          display: true,
          text: "Chart.js Polar Area Chart",
        },
        scale: {
          ticks: {
            beginAtZero: true,
          },
          reverse: false,
        },
        animation: {
          animateRotate: false,
          animateScale: true,
        },
      },
    };

      var rcl = document.querySelector("#record-case-line").getContext("2d");
      window.myLine = new Chart(rcl, lineChartData);

      var rcb = document.querySelector("#record-case-bar").getContext("2d");
      window.myBar  = new Chart(rcb, barChartData);

      var rcr = document.querySelector("#record-case-radar").getContext("2d");
      window.myRadar  = new Chart(rcr, radarChartData);

      var rcpa = document.querySelector("#record-case-area").getContext("2d");
      window.myPolarArea = Chart.PolarArea(rcpa, areaChartData);
    `;
  }

  var _sdk_create_chartdata = (function () {
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let dataArrayCount = sessionStorage.getItem("_sdk_record_police");
    let obj = {};

    obj.createCase = function () {
      let output1 = "";
      let output2 = "";
      let arrData = [];
      let objectArrStringify = JSON.stringify(data_arr2);
      for (let is = 0; is < objectArrStringify.length; is++) {
        output1 += objectArrStringify[is];
      }
      console.log(output1);
      let objectArrParse = JSON.parse(output1);
      console.log(objectArrParse);
      for (let ip = 0; ip < objectArrParse.length; ip++) {
        output2 = objectArrParse[ip].title;
        arrData.push(output2);
      }
      console.log(arrData);
      return arrData;
    };

    obj.createCount = function () {
      let countTables = 0;
      if (dataArrayCount) {
        let objectArrCount = JSON.parse(dataArrayCount);
        for (var i = 0; i < objectArrCount.length; i++) {
          countTables = i + 1;
        }
      } else {
        countTables = 0;
      }
      return countTables;
    };

    obj.createMonth = function () {
      let countTables = "";
      if (dataArrayCount) {
        let objectArrCount = JSON.parse(dataArrayCount);
        for (var i = 0; i < objectArrCount.length; i++) {
          let dates = new Date(objectArrCount[i].datetimes);
          countTables = monthNames[dates.getMonth()];
        }
      } else {
        countTables = "";
      }
      return countTables;
    };

    return obj;
  })();

  function _sdk_read_data() {
    var countTables = 0;
    const dataTablesCard = document.querySelectorAll(".case-count");
    if (dataTablesCard) {
      const dataArrayCount = sessionStorage.getItem("_sdk_record_police");
      if (dataArrayCount) {
        const objectArrCount = JSON.parse(dataArrayCount);
        for (var ic = 0; ic < objectArrCount.length; ic++) {
          countTables = ic + 1;
        }
      } else {
        countTables = 0;
      }

      dataTablesCard[0].innerHTML = countTables;
    }
  }

  setTimeout(() => {
    _sdk_read_data(),
      _sdk_create_jQueryTables(),
      _sdk_create_aos(),
      _sdk_create_chartjs();
    // _sdk_create_disqus();
  }, 1000);

  return _sdk_pages();
}
