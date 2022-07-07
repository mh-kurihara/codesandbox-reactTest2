import React, { useEffect, useState } from "react";
//import { ColorfulMeaage } from "./components/ColorfulMessage";
import ColorfulMeaage from "./components/ColorfulMessage";

const App = () => {
  console.log("start");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    console.log("useEffect");
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    /* eslint react-hooks/exhaustive-deps : off */
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMeaage color="blue">お元気ですか？</ColorfulMeaage>
      <ColorfulMeaage color="pink">元気です</ColorfulMeaage>
      {/* <p style={contentStyle}>お元気ですか？</p> */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p> ﾟДﾟ</p>}
    </>
  );
};

export default App; // 他でも使用するため
