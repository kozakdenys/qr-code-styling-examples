"use client"
import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import QRCodeStyling, { Options, FileExtension } from "qr-code-styling";
import styles from "./page.module.css";

export default function ClientQR() {
  const [options, setOptions] = useState<Options>({
    width: 300,
    height: 300,
    type: 'svg',
    data: 'http://qr-code-styling.com',
    image: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
    margin: 10,
    qrOptions: {
      typeNumber: 0,
      mode: 'Byte',
      errorCorrectionLevel: 'Q'
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 20,
      crossOrigin: 'anonymous',
      saveAsBlob: true,
    },
    dotsOptions: {
      color: '#222222',
    },
    backgroundOptions: {
      color: '#5FD4F3',
    },
  });
  const [fileExt, setFileExt] = useState<FileExtension>("svg");
  const [qrCode, setQrCode] = useState<QRCodeStyling>();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQrCode(new QRCodeStyling(options));
  }, [])

  useEffect(() => {
    if (ref.current) {
      qrCode?.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode?.update(options);
  }, [qrCode, options]);

  const onDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOptions(options => ({
      ...options,
      data: event.target.value
    }));
  };

  const onExtensionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFileExt(event.target.value as FileExtension);
  };

  const onDownloadClick = () => {
    if (!qrCode) return;
    qrCode.download({
      extension: fileExt
    });
  };

  return (
    <>
      <h2>Client QR code styling for Next.js</h2>
      <div className={styles.qrWrapper} ref={ref}/>
      <div className={styles.inputWrapper}>
        <input value={options.data} onChange={onDataChange} className={styles.inputBox}/>
        <select onChange={onExtensionChange} value={fileExt}>
          <option value="svg">SVG</option>
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WEBP</option>
        </select>
        <button onClick={onDownloadClick}>Download</button>
      </div>
    </>
  );
}
