import React, {useState, useRef} from "react";
import QrReader from "react-qr-reader";


function QrTry() {

    const [scanResultFile, setScanResultFile] = useState('');
    const [scanResultWebCam, setScanResultWebCam] =  useState('');
    const classes = useStyles();
    const qrRef = useRef(null);


    const handleErrorFile = (error) => {
        console.log(error);
      }
      const handleScanFile = (result) => {
          if (result) {
              setScanResultFile(result);
          }
      }
      const onScanFile = () => {
        qrRef.current.openImageDialog();
      }
      const handleErrorWebCam = (error) => {
        console.log(error);
      }
      const handleScanWebCam = (result) => {
        if (result){
            setScanResultWebCam(result);
        }
       }

  return (
    <div className="container">
        <div className="card">
            <h2>Generate and download</h2>
            <div className="cardContent">
                <div className="Container1 grid">

                    <div className="containerButton grid">
                        <Button>Scan QR code</Button>
                        <QrReader
                        ref={qrRef}
                        delay={300}
                        style={{width: '100%'}}
                        onError={handleErrorFile}
                        onScan={handleScanFile}
                        legacyMode
                        />
                        <h3>Scanned Code: {scanResultFile}</h3>
                    </div>
                    <div className="containerButton2 grid">
                    <h3>Qr Code Scan by Web Cam</h3>
                         <QrReader
                         delay={300}
                         style={{width: '100%'}}
                         onError={handleErrorWebCam}
                         onScan={handleScanWebCam}
                         />
                          <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default QrTry;