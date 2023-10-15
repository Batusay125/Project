import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

function QRCodeReader() {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <h1>QR Code Reader</h1>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {result && <p>Scanned QR Code: {result}</p>}
    </div>
  );
}

export default QRCodeReader;
