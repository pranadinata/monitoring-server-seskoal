import { useEffect, useRef } from 'react';
import Script from 'next/script';

const QRCodeComponent = () => {
  const qrContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderQRCode = () => {
      if (window.QrCreator && qrContainerRef.current) {
        window.QrCreator.render({
          text: "coba",
          radius: 0.5,
          ecLevel: "H",
          fill: "#536DFE",
          background: null,
          size: 256,
        }, qrContainerRef.current);
      }
    };
    // console.log('masuk')

    renderQRCode();
  }, []);

  return (
    <>
      <Script 
        src="https://cdn.jsdelivr.net/npm/qr-creator/dist/qr-creator.es6.min.js"
        onLoad={() => console.log("QR Creator Script Loaded!")}
        strategy="afterInteractive"
      />
      <div ref={qrContainerRef} id="qrcode" style={{ width: '256px', height: '256px' }} />
    </>
  );
};

export default QRCodeComponent;