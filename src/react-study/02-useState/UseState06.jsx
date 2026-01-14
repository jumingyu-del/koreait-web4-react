import React, { memo, useState } from 'react'

export default function UseState06() {
    const [memos, setMemos] = useState([]);
    const [inputVal, setInputVal] = useState("");
    const [done, setDone] = useState(false);

    // [{id: Date.now(), text: "빨래하기", done: true}, ..{}]
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputVal(value);
    };

    const addMemoClick = () => {
        setMemos((prev) => {
            return [...prev, {
                id: Date.now(),
                text: inputVal,
                done: done
            }];
        });
        setInputVal("");
    };
    
    const handleCheckClick = (e) => {
        // 체크박스 체크시 true 담겨있음 <> 체크 x -> false
        const checkVal = e.target.checked;
        setDone(checkVal);
    };

    // 체크박스는 우리가 추가한 만큼 생기기 때문에
    // 데이터식별이 필요함 -> id를 매개변수로 받아야 한다
    const handleToggleDone = (id) => {
        // memo: {id:~, text:~, done:true}
        const newMemos = memos.map((memo) => {
            if(memo.id === id) {
                return {
                    ...memo,
                    done: !memo.done
                }
            } else {
                return memo;
            }
        });
        setMemos(newMemos);
    };
    
    const handleAllCheck = () => {
        const newMemos = memos.map((memo) => {
            if(!memo.done) {
                return {
                    ...memo,
                    done: true
                }
            } else {
                return memo;
            }
        });
        setMemos(newMemos);
    };
    
    const handleAllNonCheck = () => {
        const newMemos = memos.map((memo) => {
            if(memo.done) {
                return {
                    ...memo,
                    done: false
                }
            } else {
                return memo;
            }
        });
        setMemos(newMemos);
    };

  return (
    <div>
        <input 
            type="text" 
            value={inputVal}
            onChange={handleInputChange}
        />
        <input type="checkbox" checked={done} onChange={handleCheckClick}/>
        <button onClick={addMemoClick}>메모 추가하기</button>
        <button onClick={handleAllCheck}>모두 체크하기</button>
        <button onClick={handleAllNonCheck}>모두 체크해제</button>
        <ul>
            {memos.map((memo) => {
                // return <li key={memo.id}>{memo.text}</li>;
                const {id, text, done} = memo;
                return( 
                    // memos 기준으로 렌더링된 결과
                    // -> setMemos를 호출해야 된다
                    <li key={id}>
                        {text}
                        {/* () => fx(id): fx(id)를 호출하는 함수 */}
                        {/* fx(id): 호출결과 */}
                        {/* {}로 함수를 전달 할 때, 매개변수도 같이 줘야 할 때 */}
                        {/* () => fx(매개변수)로 작성 */}
                        <input type="checkbox" checked={done} onChange={() => handleToggleDone(id)} />
                    </li>);
            })}
        </ul>
        <ul>
            {/* 체크가 된 memo의 text들이 <li>빨래하기</li> */}
            {memos.filter((memo) => {
                return memo.done;
            }).map((memo) => {
                const {id, text} = memo;
                return (
                    <li key={id}>{text}</li>
                );
            })}
        </ul>
    </div>
  )
}
