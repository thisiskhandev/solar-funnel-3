$(document).ready(function () {
  let zip = document.getElementById("zip");
  let nextBtn = document.querySelector(".slick-next.slick-arrow");
  let rangeBill = document.querySelector("#range");
  let billRangeInp = document.querySelector("#billAmt");
  zip.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      console.log("Enter");
      nextBtn.click();
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
});
