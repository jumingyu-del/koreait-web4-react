import React, { useState } from 'react'

export default function UseState09() {
    const [author, setAuthor] = useState("");
    const [comment, setComment] = useState(null);

    const comments = [
        {author: "홍길동", title: "배송 빨라요"},
        {author: "김길동", title: "배송 느려요"},
        {author: "이길동", title: "아자스"},
        {author: "박길동", title: "포장 꼼꼼해요"},
        {author: "최길동", title: "생각보다 크기가 작아요"},
    ]

    const handleSearchClick = () => {
        // 내 풀이
        for(let comment of comments) {
            if(author === comment.author) {
                setComment(comment.title);
                return comment;
            }
        };

        // 1. for문
        let found = null;
        for (let i = 0; i < comments.length; i++) {
            let comment = comments[i];
            if(comment.author === author) {
                // setComment(comment);
            }
        };

        // 2. 리스트.find()
        // 순회하면서 함수의 return 값이 true인 요소를 리턴
        found = comments.find((comment) => {
            return comment.author === author
        });

        // setComment(found);

        // 3. filter
        found = comments.filter((comment) => {
            return comment.author === author;
        });

        // setComment(found.length > 0 ? found[0] : null);
    };

  return (
    <div>
        <h1>리뷰 검색(작성자)</h1>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="작성자 이름을 입력하세요"/>
        <button onClick={handleSearchClick}>검색</button>
        {/* 검색결과가 있으면, title을 보여주세요 */}
        {/* 없으면, <h2>"해당 작성자의 글을 찾을 수 없습니다."</h2> */}
        <h2>
            {comment ? comment : "해당 작성자의 글을 찾을 수 없습니다."}
        </h2>
    </div>
  )
}
