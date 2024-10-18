const { QRCodeStyling } = require('qr-code-styling/lib/qr-code-styling.common.js');
const nodeCanvas = require('canvas');
const { JSDOM } = require('jsdom');
const fs = require('fs');

const options = {
  width: 300,
  height: 300,
  data: "https://www.facebook.com/",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  dotsOptions: {
    color: "#4267b2",
    type: "rounded"
  },
  backgroundOptions: {
    color: "#e9ebee",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 20
  }
}

// For canvas type
const qrCodeImage = new QRCodeStyling({
  jsdom: JSDOM, // this is required
  nodeCanvas, // this is required,
  ...options,
  imageOptions: {
    saveAsBlob: true,
    crossOrigin: "anonymous",
    margin: 20
  },
});

qrCodeImage.getRawData("png").then((buffer) => {
  fs.writeFileSync("test.png", buffer);
});

// For svg type
const qrCodeSvg = new QRCodeStyling({
  jsdom: JSDOM, // this is required
  type: "svg",
  ...options
});

qrCodeSvg.getRawData("svg").then((buffer) => {
  fs.writeFileSync("test.svg", buffer);
});

// For svg type with the inner-image saved as a blob
// (inner-image will render in more places but file will be larger)
const qrCodeSvgWithBlobImage = new QRCodeStyling({
  jsdom: JSDOM, // this is required
  nodeCanvas, // this is required
  type: "svg",
  ...options,
  imageOptions: {
    saveAsBlob: true,
    crossOrigin: "anonymous",
    margin: 20
  }
});

qrCodeSvgWithBlobImage.getRawData("svg").then((buffer) => {
  fs.writeFileSync("test_blob.svg", buffer);
});
