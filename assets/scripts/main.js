$(document).ready(function () {
  let zip = document.getElementById("zip");
  let nextBtn = document.querySelector(".slick-next.slick-arrow");
  let rangeBill = document.querySelector("#range");
  let billRangeInp = document.querySelector("#billAmt");
  let phone = document.getElementById("phone");
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
  billRangeInp.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.target.value = rangeBill.value;
      console.log(e.target.value);
      console.log(rangeBill.value);
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
