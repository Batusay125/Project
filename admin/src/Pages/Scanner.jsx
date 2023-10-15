import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "./Style.css";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

function Scanner() {
  const [scanResult, setScanResult] = useState();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
    <div className="main-div">
      
      <div className="scanner-div">
        
        {scanResult ? <div>Result: {scanResult}</div> : <div id="reader"></div>}
      </div>
    </div>
  );
}

export default Scanner;