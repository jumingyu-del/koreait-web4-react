import React, { useEffect, useState } from 'react'

export default function UseEffect03() {
    const [temperature, setTemperature] = useState(8);
    const [msg, setMsg] = useState("");

    // 10도 이하 -> 추워요 메시지 출력
    // 10~25 -> 좋은 날씨
    // 25 초과 -> 더워요

    const increase = () => {
        setTemperature((prev) => prev + 1);
    }
    
    const decrease = () => {
        setTemperature((prev) => prev - 1);
    }

    useEffect(() => {
        if(temperature <= 10) {
            setMsg("추워요");
        } else if (temperature <= 25) {
            setMsg("좋은 날씨");
        } else if (temperature > 25) {
            setMsg("더워요");
        }

    }, [temperature]);

  return (
    <>
        <h2>에어컨 리모컨</h2>
        <h1>{temperature}도</h1>

        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>

        <h3>{msg}</h3>
    </>
  )
}
