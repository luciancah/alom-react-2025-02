import React from "react";

function Button() {
  const handleClick = () => {
    alert("나는 버튼1");
  };

  return (
    /**
     * 과제 레벨 A
     * 강의에서 배운 JSX 문법을 활용하여 마음대로 버튼을 스타일링 해주세요
     * 아래 스타일 태그 내부를 수정해도 좋아요
     * @see https://www.notion.so/alom/02-JSX-1ad00201d4ac802e8a9ed0afaed7e72e?pvs=4
     */
    <button
      className="button"
      onClick={handleClick}
      style={{
        backgroundColor: "red",
        color: "white",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
      }}
    >
      나는 버튼1
    </button>
  );
}

export default Button;
