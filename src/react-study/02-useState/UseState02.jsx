import React, { useState } from 'react'

export default function UseState02() {
    // setter를 호출하면 컴포넌트는 재호출된다.
    // let myNumber = 5; // 재호출시 myNumber에는 다시 5가 담김
    const [count, setCount] = useState(0);

    const handlePlusClick = () => {
        setCount(count + 1);
    };
    
    const handleMinusClick = () => {
        setCount(count - 1);
    };

  return (
    // +1버튼을 누르면 h3태그에 있는 숫자가 +1되도록
    // -1버튼을 누르면 h3태그에 있는 숫자가 -1되도록
    <div>
        <h1>카운터</h1>
        <h3>{count}</h3>
        <button onClick={handlePlusClick}>+1</button>
        <button onClick={handleMinusClick}>-1</button>
    </div>
  );
}
