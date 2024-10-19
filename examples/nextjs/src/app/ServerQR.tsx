import React from "react";
import QRCodeStyling, {
  TypeNumber,
  Mode,
  ErrorCorrectionLevel,
  Options,
} from "qr-code-styling";
import { JSDOM } from "jsdom";
import nodeCanvas from "canvas";
import styles from "@/app/page.module.css";

const options: Options = {
  width: 300,
  height: 300,
  type: 'svg',
  jsdom: JSDOM,
  nodeCanvas,
  data: 'http://qr-code-styling.com',
  image: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
  margin: 10,
  qrOptions: {
    typeNumber: 0 as TypeNumber,
    mode: 'Byte' as Mode,
    errorCorrectionLevel: 'Q' as ErrorCorrectionLevel
  },
  imageOptions: {
    saveAsBlob: true,
    hideBackgroundDots: true,
    imageSize: 0.4,
    margin: 20,
    crossOrigin: 'anonymous',
  },
  dotsOptions: {
    color: '#222222',
  },
  backgroundOptions: {
    color: '#5FD4F3',
  },
}

export default async function ClientQR() {
  const qrCode = new QRCodeStyling(options);
  const buffer = await qrCode.getRawData("svg")
  const svg = buffer?.toString();

  return (
    <>
      <h2>Server QR code styling for Next.js</h2>
      {svg ? (<div className={styles.qrWrapper} dangerouslySetInnerHTML={{__html: svg}}/>) : null}
    </>
  );
}
