import React, { useState } from 'react'

export default function UseState04() {
    const [count, setCount] = useState(0);
    const increse = () => {
        setCount(count + 1);
        // setCount(count + 1);
        // count가 2씩 증가할까? (x) 1씩 증가
        // -> 두 번 호출해도 setter들은 리액트가
        // batch 처리를 함
        // 그때의 count 값은 둘다 0으로 동일

        // 함수형 업데이트
        // setter에 함수를 매개변수로 전달가능
        // 리액트가 첫번재 매개변수에 이전값을 넣어준다.
        // 이전값을 쓰는 경우 함수형 업데이트를 하는게 권장
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    };
    const decrease = () => {
        // 값이 하나만 바뀌는 경우
        // 함수형 업데이트하지 않아도 ok
        // 복잡해질 가능성 때문에
        // 함수형 업데이트 쓰는 습관이 좀 더 권장
        setCount(count - 1);
    };

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increse}>+1</button>
        <button onClick={decrease}>-1</button>
    </div>
  );
}
