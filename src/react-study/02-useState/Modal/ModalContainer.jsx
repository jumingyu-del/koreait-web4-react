import React, { useState } from 'react'
import Modal from './Modal'

export default function ModalContainer() {
    const [isOpen, setIsOpen] = useState(false);
    const post = {
        title: "첫번째 게시물",
        content: "첫번째 게시물을 클릭하셨습니다."
    };
    // 열기 버튼 -> 모달 보이기
    // 모달 안에 닫기 버튼 -> 모달 사라지기

  return (
    <div>
        <button onClick={() => setIsOpen(true)}>모달 열기</button>
        <Modal 
            isOpen={isOpen} 
            post={post}
            onClick={() => setIsOpen(false)}
        />
    </div>
  );
}
