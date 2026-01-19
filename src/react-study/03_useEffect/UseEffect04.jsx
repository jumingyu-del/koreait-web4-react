import React, { useEffect, useState } from 'react'

export default function UseEffect04() {
    const [formVal, setFormVal] = useState({
        email : "",
        password: ""
    });
    // {"email": "@넣어주세요", "password": "8자 이상"}
    const [errorMsg, setErrorMsg] = useState({});
    const [isDisabled, setIsDIsabled] = useState(false);

    // 이벤트 객체로 현재 입력하고 있는 input 특정하여
    // setForm에 js 객체를 업데이트
    const inputChangehandler = (e) => {
        const {name, value} = e.target;
        setFormVal((prev) => {
            return {
                ...prev,
                [name]: value // 중복된 key면 업데이트
            }
        });
    }

    useEffect(() => {
        setIsDIsabled(() => true);

        const newErrorMsg = {}
        // 1. 이메일에 @가 있는지 검사
        // -> 에러메세지 set
        if( formVal.email.length > 0 && !formVal.email.includes("@") ) {
            newErrorMsg.email = "이메일 형식에 맞게 입력";
        }
        // 2. 비밀번호의 길이가 8미만인지 검사
        // -> 에러메세지 set
        if(formVal.password.length > 0 && formVal.password.length < 8) {
            newErrorMsg.password = "비밀번호는 8자 이상";
        }
        setErrorMsg(newErrorMsg);

        // 만약에 newErrorMsg가 빈 {}라면?
        // -> 잘 입력했음
        // -> 버튼 활성화
        const keys = Object.keys(newErrorMsg) // key들만 리스트로 반환
        if(formVal.email && formVal.password && keys.length === 0) {
            setIsDIsabled(false);
        }

    }, [formVal]);

  return (
    <div>
        <div>
            <input 
                type="email" 
                name="email"
                placeholder='이메일'
                value={formVal.email}
                onChange={inputChangehandler}
                />
            {errorMsg.email && <p>{errorMsg.email}</p>}
        </div>
        <div>
            <input 
                type="password" 
                name="password"
                placeholder='비밀번호'
                value={formVal.password}
                onChange={inputChangehandler}
            />
            {errorMsg.password && <p>{errorMsg.password}</p>}
        </div>
        {/* 유효성 통과 x -> disabled */}
        <button 
            disabled={isDisabled}
            onClick={() => alert("가입성공")}
            >가입하기</button>
    </div>
  )
}
