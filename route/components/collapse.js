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
export function collapses() {
  const $triggerCollapseEl = document.querySelectorAll(
    "[data-collapse-toggle]"
  );
  const $countriggerCollapseEl = $triggerCollapseEl.length;
  for (var i = 0; i < $countriggerCollapseEl; i++) {
    var $rowstriggerCollapseEl = $triggerCollapseEl[i];
    var $looptriggerCollapseEl = $triggerCollapseEl[i].getAttribute(
      "data-collapse-toggle"
    );
    var $targetCollapseEl = document.querySelectorAll(
      "#" + $looptriggerCollapseEl
    );
    var $countargetCollapseEl = $targetCollapseEl.length;
    for (var ii = 0; ii < $countargetCollapseEl; ii++) {
      var $rowstargetCollapseEl = $targetCollapseEl[ii];
      var collapse = new Collapse(
        $rowstargetCollapseEl,
        $rowstriggerCollapseEl
      );
      collapse.toggle();
    }
  }

  function _sdk_modals_trigger() {
    const $triggerCollapseBtn = document.querySelectorAll(
      "[data-collapse-toggle]"
    );
    const $counTriggerCollapseBtn = $triggerCollapseBtn.length;
    for (let ic = 0; ic < $counTriggerCollapseBtn; ic++) {
      $triggerCollapseBtn[ic].addEventListener("click", function (e) {
        e.preventDefault();
        const $loopTriggerCollaseEl = this.getAttribute("data-collapse-toggle");
        const $targetCollapseEl = document.querySelectorAll(
          "#" + $loopTriggerCollaseEl
        );
        const countargetCollapseBtn = $targetCollapseEl.length;
        for (let icl = 0; icl < countargetCollapseBtn; icl++) {
          if (hasClass($targetCollapseEl[icl], "hidden")) {
            $targetCollapseEl[icl].setAttribute(
              "class",
              "z af ls kg ls ti ug uh vr z-50"
            );
            _sdk_loop_collapse_content(
              $targetCollapseEl[icl],
              $loopTriggerCollaseEl,
              "dark:bg-gray-900 ls uo ym aao ade alj arf asj"
            );
          } else {
            $targetCollapseEl[icl].setAttribute(
              "class",
              "ly cpt cqa crh cuo cwj cyt"
            );
            _sdk_loop_collapse_content(
              $targetCollapseEl[icl],
              $loopTriggerCollaseEl,
              "dark:bg-gray-900 ls uo ym aao ade aff afp alj arf"
            );
          }
        }
      });
    }
  }

  function _sdk_loop_collapse_content(targets, attrDrop, attrClass) {
    const $targetCollapseElContent = targets.querySelectorAll(
      "#" + attrDrop + "Content"
    );
    const countargetCollapseBtnContent = $targetCollapseElContent.length;
    for (let i = 0; i < countargetCollapseBtnContent; i++) {
      $targetCollapseElContent[i].setAttribute("class", attrClass);
    }
  }

  function hasClass(element, className) {
    return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
  }

  return _sdk_modals_trigger();
}
