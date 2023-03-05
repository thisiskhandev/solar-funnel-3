$(document).ready(function () {
  // Variables
  let zip = document.getElementById("zip");
  let nextBtn = document.querySelector(".slick-next.slick-arrow");
  let rangeBill = document.getElementById("range");
  let billRangeInp = document.getElementById("billAmt");
  let phone = document.getElementById("phone");
  
  // Actions
  zip.addEventListener("keypress", (e) => {
    if (!e.target.value == "") {
      if (e.key === "Enter") {
        console.log("Enter");
        nextBtn.click();
      }
    }
  });

  rangeBill.addEventListener("change", function () {
    billRangeInp.value = this.value;
  });

  $(billAmt).on("input propertychange", (e) => {
    $('input[type="range"]').val(e.target.value).trigger("change");
  });

  $(billAmt).change((e) => {
    if (e.target.value >= 600) {
      e.target.value = 600;
    } else if (e.target.value <= 100) {
      e.target.value = 100;
    }
  });

  phone.addEventListener("keyup", (e) => {
    let val = e.target.value;
    e.target.value = val
      .replace(/\D/g, "")
      .replace(/(\d{1,4})(\d{1,3})?(\d{1,3})?/g, function (txt, f, s, t) {
        if (t) {
          return `(${f})-${s}-${t}`;
        } else if (s) {
          return `(${f})-${s}`;
        } else if (f) {
          return `(${f})`;
        }
      });
  });

  $('button.btn[type="submit"]').click(function () {
    setTimeout(() => {
      if ($("form.solar_form").hasClass("was-validated")) {
        $(".responsive").slick("slickGoTo", 0);
      }
    });
  });
  
});
