import React, { useState } from 'react'

export default function Usestate05() {
    const [todos, setTodos] = useState([]);
    const [inputVal, setInputVal] = useState("");

    // 정의해놓은 상태들로
    // input에 To-do를 입력하면,
    // ul 안에 li들로 Todo들이 보이게 만들어 주세요
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputVal(value);
    }

    const addTodoCLick = () => {
        // [] -> ["빨래하기"]
        // push 원본이 수정되는 메서드
        // 1. setter에는 언제나 새 객체를 넣어줘야 함
        // 2. prev는 배열, 객체도 기억하고 있으니 spread 권장
        // const newTodos = [...todos, inputVal];
        // setTodos(newTodos);
        setTodos((prev) => [...prev, inputVal]);
    };

  return (
    <div>
        <input 
            type="text" 
            // value가 inputVal
            // 변경되면 inputVal이 바뀌어야 함
            value={inputVal}
            onChange={handleInputChange}
            placeholder="TO-DO 입력"
        />
        <button onClick={addTodoCLick}>TO-DO 추가</button>
        <ul>
            {
                todos.map((todo, i) => {
                    // key로 index를 넣으면 안됨
                    // 리액트가 리스트로 렌더링 할때
                    // 실제 데이터 기준으로 변경을 감지하는게 아니라
                    // key를 기준으로 변경을 감지함
                    return <li key={i}>{todo}</li>;
                })
            }
        </ul>
    </div>
  );
}
