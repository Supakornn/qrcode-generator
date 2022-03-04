# qrcode-generator

This project made with html css js

![image](https://cdn.discordapp.com/attachments/925063485556150292/947107867549380648/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3932353036333438353535363135303239322f3934373130363631323436323632303734322f756e6b6e6f776e2e706e67.png)

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
