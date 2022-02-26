let btn = document.querySelector(".button");
let qr_code = document.querySelector(".qr-code");

btn.addEventListener("click", () => {
  let input = document.querySelector("#input-text");
  if (input.value != "") {
    if (qr_code.childElementCount == 0) {
      generate(input);
    } else {
      qr_code.innerHTML = "";
      generate(input);
    }
  } else {
    console.log("Please input! ");
    qr_code.style = "display: none";
  }
});

function generate(input) {
  qr_code.style = "";
  var qrcode = new QRCode(qr_code, {
    text: `${input.value}`,
    width: 180,
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  let download = document.createElement("button");
  qr_code.appendChild(download);

  let download_Link = document.createElement("a");
  download_Link.setAttribute("download", "qr_code.png");
  download_Link.innerText = "Download";
  download.appendChild(download_Link);

  let qr_img = document.querySelector(".qr-code img");
  let qr_canvas = document.querySelector("canvas");

  if (qr_img.getAttribute("src") == null) {
    setTimeout(() => {
      download_Link.setAttribute("href", `${qr_canvas.toDataURL()}`);
    }, 300);
  } else {
    setTimeout(() => {
      download_Link.setAttribute("href", `${qr_img.getAttribute("src")}`);
    }, 300);
  }
}
