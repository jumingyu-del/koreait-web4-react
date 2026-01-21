import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react"
// 1. src/assets에 저장된 이미지 -> 빌드시 포함된다
import batmanImg from "../../assets/다크나이트.webp"
// 2. public/assets에 저장된 이미지 -> 정적이미지
// "/"로 접근할 수 있음

const cardStyle = (isActive) => css`
    position: relative;
    width: ${isActive ? "220px" : "120px"};
    height: ${isActive ? "330px" : "180px"};
    padding: 10px;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    overflow: hidden;
    border-radius: 8px;
`;

const imageStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const contentStyle = css`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
`;

// 화살표함수형으로 만드는 컴포넌트
const MovieCard = ({movie, isActive, onClick}) => {
    const {title, year, description, imgUrl} = movie;
    
    return (
        // 전달받은 props에 따라 결과가 다름
        <div onClick={onClick} css={cardStyle(isActive)}>
            <img src={imgUrl} alt={title} css={imageStyle}/>
            <div css={contentStyle}>
                <h4>{title}</h4>
                <small>{year}</small>
                {isActive && <p>{description}</p>}
            </div>
        </div>
    );
}

const MOVIES = [
    {
        id: 1,
        title: "인셉션",
        year: 2010,
        description: "꿈 속에서 꿈꾸는 범죄스릴러",
        imgUrl: "https://i.namu.wiki/i/7D7wOgD2QOI6rjmXEJpQwmE-SE6tinJn2BK7doRu3tyYZ5XjfZ902np0oX4BT59HihjRam1-EZXWbTM-cJm2tMbcFcHQMQt72zs5F6QF85GrmMix_r4nAh9BrIeq_KLYlTHT4QAesAVrpbEC7Nc9vw.webp"
    },
    {
        id: 2,
        title: "인터스텔라",
        year: 2014,
        description: "인류생존과 시공간 표현한 SF 영화",
        imgUrl: "https://i.namu.wiki/i/1Vk9H1zrSoe3myPN8uog-ERk2v22_KwVN_iU9fGEjH9UUpZq-TALEtn1Fg_etEyS53hM9OG3rJRlKYpAa-tZaFiyiQ82UuB7rmj7vx0d374R3Gj0cehQj61y6e2UUM6TJDFhfm3sj_py1etZYjy24w.webp"
    },
    {
        id: 3,
        title: "배트맨: 다크나이트",
        year: 2008,
        description: "히스레저의 조커가 멋지다",
        imgUrl: batmanImg
    }
]

const layout = css`
    display: flex;
    justify-content: center;
    gap: 12px;
`;

export default function Emotion02() {
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        // setInterval(() => {}, ms) 함수
        // ms마다 첫번째 매개변수로 전달받은 함수를 실행
        const intervalId = setInterval(() => {
            setActiveId((prev) => {
                if (prev === null) {
                    // 아무것도 선택되어 있지 않으면 -> null
                    // 0번째 movie(js객체)의 id값으로 설정
                    return MOVIES[0].id;
                }

                // 어떤 movie가 선택됬는지 식별
                // movie의 id로 MOVIES의 몇번째 idx에 있는지?
                // find() -> 객체리턴, findIndex -> idx 리턴
                const currentIdx = MOVIES.findIndex((m) => prev === m.id);

                // 다음 idx
                // 현재 idx가 마지막 idx라면 -> 0 아니면 +1
                const nextIdx = currentIdx === MOVIES.length - 1 ? 0 : currentIdx +1;

                return MOVIES[nextIdx].id;
            });

        }, 3000);

        // setInterval, setTimeout 등
        // 브라우저 api를 useEffect에서 사용한 경우
        // 언마운트시 해제해줘야함
        return () => clearInterval(intervalId);
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
