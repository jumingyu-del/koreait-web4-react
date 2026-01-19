import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react"
import { layout } from './styles';

const cardStyle = (isActive) => css`
    width: ${isActive ? "220px" : "120px"};
    height: 200px;
    padding: 10px;
    box-sizing: border-box;
    background-color: ${isActive ? "#ddd" : "#eee"};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
`;

// 화살표함수형으로 만드는 컴포넌트
const MovieCard = ({movie, isActive, onClick}) => {
    const {title, year, description} = movie;
    
    return (
        // 전달받은 props에 따라 결과가 다름
        <div onClick={onClick} css={cardStyle(isActive)}>
            <h4>{title}</h4>
            <small>{year}</small>
            {isActive && <p>{description}</p>}
        </div>
    );
}

const MOVIES = [
    {
        id: 1,
        title: "인셉션",
        year: 2010,
        description: "꿈 속에서 꿈꾸는 범죄스릴러"
    },
    {
        id: 2,
        title: "인터스텔라",
        year: 2014,
        description: "인류생존과 시공간 표현한 SF 영화"
    },
    {
        id: 3,
        title: "배트맨: 다크나이트",
        year: 2008,
        description: "히스레저의 조커가 멋지다"
    }
]

export default function Emotion02() {
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        // setInterval(() => {}, ms) 함수
        // ms마다 첫번째 매개변수로 전달받은 함수를 실행

        // ms마다 setActiveId를 호출해서 조작하면?
    }, [])

  return (
    <div css={layout}>
        {/* map()으로 MovieCard를 렌더링 시켜 주세요 */}
        {MOVIES.map((movie) => {
            return <MovieCard 
                movie={movie} 
                key={movie.id} 
                onClick={() => setActiveId(activeId === movie.id ? null : movie.id)} // 같은 카드를 한번 더 누르면 null -> 해제
                isActive={activeId === movie.id}
            />
        })}
    </div>
  )
}
