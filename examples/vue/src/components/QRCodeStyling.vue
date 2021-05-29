<template>
  <div class="hello">
    <h1>QR code styling for Vue</h1>
    <div id="qr-code" ref="qrCode"> </div>
    <label>
      <input v-model="options.data" placeholder="Add data">
      <select v-model="extension">
        <option value="svg">SVG</option>
        <option value="png">PNG</option>
        <option value="jpeg">JPEG</option>
        <option value="webp">WEBP</option>
      </select>
      <button v-on:click="download">Download</button>
    </label>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import QRCodeStyling, {
  DrawType,
  TypeNumber,
  Mode,
  ErrorCorrectionLevel,
  DotType,
  CornerSquareType,
  CornerDotType,
  Extension
} from 'qr-code-styling';

@Options({
  mounted : function() {
    this.qrCode.append(this.$refs["qrCode"]);
  },
  watch: {
    ['options.data']: function() {
      this.qrCode.update(this.options);
    }
  },
  methods: {
    download() {
      this.qrCode.download({ extension: this.extension as Extension })
    }
  },
  data: () => {
    const options = {
      width: 300,
      height: 300,
      type: 'svg' as DrawType,
      data: 'http://qr-code-styling.com',
      image: '/favicon.ico',
      margin: 10,
      qrOptions: {
        typeNumber: 0 as TypeNumber,
        mode: 'Byte' as Mode,
        errorCorrectionLevel: 'Q' as ErrorCorrectionLevel
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4,
        margin: 20,
        crossOrigin: 'anonymous',
      },
      dotsOptions: {
        color: '#41b583',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
        // },
        type: 'rounded' as DotType
      },
      backgroundOptions: {
        color: '#ffffff',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
        // },
      },
      cornersSquareOptions: {
        color: '#35495E',
        type: 'extra-rounded' as CornerSquareType,
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
        // },
      },
      cornersDotOptions: {
        color: '#35495E',
        type: 'dot' as CornerDotType,
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
        // },
      }
    };
    return {
      options,
      extension: 'svg',
      qrCode: new QRCodeStyling(options)
    }
  }
})
export default class QRCodeStylingComponent extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
