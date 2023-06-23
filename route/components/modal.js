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
export function modals() {
  const $triggerModalsEl = document.querySelectorAll("[data-modal-toggle]");
  const $counTriggerModalsEl = $triggerModalsEl.length;
  for (let im = 0; im < $counTriggerModalsEl; im++) {
    const $rowsTriggerModalsEl = $triggerModalsEl[im];
    const $loopTriggerModalsEl =
      $triggerModalsEl[im].getAttribute("data-modal-toggle");
    const $targetModalsEl = document.querySelectorAll(
      "#" + $loopTriggerModalsEl
    );
    const $countargetModalsEl = $targetModalsEl.length;
    for (let iml = 0; iml < $countargetModalsEl; iml++) {
      const $rowsTargetModalsEl = $targetModalsEl[iml];
      const modals = new Modal($rowsTargetModalsEl, $rowsTriggerModalsEl);
      $triggerModalsEl[im].addEventListener("click", function (e) {
        e.preventDefault();
        modals.show();
      });
      const $triggerCloseModalsEl =
        document.querySelectorAll("[data-modal-hide]");
      const $counTriggerCloseModalsEl = $triggerCloseModalsEl.length;
      for (let imc = 0; imc < $counTriggerCloseModalsEl; imc++) {
        $triggerCloseModalsEl[imc].addEventListener("click", function (e) {
          modals.hide();
        });
      }
    }
  }
}
