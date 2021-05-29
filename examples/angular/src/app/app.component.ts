import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import QRCodeStyling, { Extension } from 'qr-code-styling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'QR code styling for Angular';
  data = 'http://qr-code-styling.com';
  extension = 'svg';
  qrCode = null;

  @ViewChild('canvas', { static: true }) canvas: ElementRef;

  ngOnInit(): void {
    this.qrCode = new QRCodeStyling({
      width: 300,
      height: 300,
      type: 'svg',
      data: this.data,
      image: '/favicon.ico',
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
      },
      dotsOptions: {
        color: '#BD022D',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
        // },
        type: 'rounded'
      },
      backgroundOptions: {
        color: '#e9ebee',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
        // },
      },
      cornersSquareOptions: {
        color: '#BD022D',
        type: 'extra-rounded',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
        // },
      },
      cornersDotOptions: {
        color: '#BD022D',
        type: 'dot',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
        // },
      }
    });

    this.qrCode.append(this.canvas.nativeElement);
  }

  onKey(event: any): void {
    this.data = event.target.value;
    this.qrCode.update({
      data: this.data
    });
  }

  onChange(event: any): void {
    this.extension = event.target.value;
  }

  download(): void {
    this.qrCode.download({ extension: this.extension as Extension });
  }
}
