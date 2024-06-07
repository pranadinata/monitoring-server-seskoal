"use client"
import React from "react";
import axios from "axios";



export default function page() {
  const checkQr = () => {
    axios
      .get(
        "http://127.0.0.1:3300/auth/qr"
      )
      .then((result) => {
        console.log(result)
      });
  };
  
  return (
    <>
      <main className="relative min-h-screen flex flex-col bg-white overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">

          <button  onClick={checkQr}>Cek QR</button>
        </div>
        {/* <script type="module">
            </script>
            <div id="qrcode"></div>
            <script type="module">
                import QrCreator from "https://cdn.jsdelivr.net/npm/qr-creator/dist/qr-creator.es6.min.js";
                let container = document.getElementById("qrcode");
                QrCreator.render({
                    text: "2@uKoV5yANuH8EIcdk8H3Z9aags7tppPkA3SHYHUi5ygcTrgCroZ9GRN60J2mDid/jC4CGPc7s6GvaDg==,YajA+1PCY66piL4Bs91bK28I/QyjD6GejBJUz9TwMVc=,kPtX1XldtNPH8QdflWqE+9YQKqhufFSBwLA++nSd21U=,QAdI9QBup6nCJPLiIzsGlDeA1lzjdDXfamLFpkuay5E=,1",
                    radius: 0.5, // 0.0 to 0.5
                    ecLevel: "H", // L, M, Q, H
                    fill: "#536DFE", // foreground color
                    background: null, // color or null for transparent
                    size: 256, // in pixels
                }, container);
            </script> */}
      </main>
    </>
  );
}
