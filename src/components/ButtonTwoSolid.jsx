import React from "react";

function Button() {
  const handleClick = () => {
    alert("나는 버튼2-2");
  };

  return (
    /**
     * 과제 레벨 B-2
     * 사진 명세에 따라 버튼 컴포넌트를 완성해 주세요
     * Button/Solid/Primary variation에 해당하는 버튼을 만들어 주세요
     * @see https://www.notion.so/alom/02-JSX-1ad00201d4ac802e8a9ed0afaed7e72e?pvs=4
     */
    <button className="button" onClick={handleClick}>
      나는 버튼2
    </button>
  );
}

export default Button;
