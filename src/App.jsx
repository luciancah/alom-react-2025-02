import React from "react";
import "./App.css";
import ButtonOne from "./components/ButtonOne";
import ButtonTwoOutlined from "./components/ButtonTwoOutlined";
import ButtonTwoSolid from "./components/ButtonTwoSolid";

function App() {
  return (
    <div className="App">
      <h3>2025 아롬 리액트팀 2주차 과제</h3>
      <div>
        <h4>레벨 A: 버튼 컴포넌트 맘대로 스타일링 하기</h4>
        <ButtonOne />
      </div>
      <div>
        <h4>레벨 B: 버튼 컴포넌트 첨부 사진대로 스타일링 하기</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <div>
            <h5>레벨 B-1: Button/Outlined/Primary</h5>
            <ButtonTwoOutlined />
          </div>
          <div>
            <h5>레벨 B-2: Button/Solid/Primary</h5>
            <ButtonTwoSolid />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
