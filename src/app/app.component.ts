import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import QRCodeStyling from 'qr-code-styling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'QR code styling for Angular';
  data = 'www.facebook.com';
  qrCode = null;

  @ViewChild('canvas', { static: true }) canvas: ElementRef;

  ngOnInit(): void {
    this.qrCode = new QRCodeStyling({
      width: 300,
      height: 300,
      data: this.data,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
      dotsOptions: {
        color: '#4267b2',
        type: 'rounded'
      },
      backgroundOptions: {
        color: '#e9ebee'
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 20
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
}
