# qrcode-generator

This project made with html css js

![image](https://cdn.discordapp.com/attachments/925063485556150292/947106612462620742/unknown.png)

# Example

```js
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
```
