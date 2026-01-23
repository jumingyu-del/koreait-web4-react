import React, { useState } from 'react'
import { useBookList } from './store/bookStore'

export default function Zustand04() {
    const {books, removeBook, updateBook, addBook} = useBookList();
    const [form, setForm] = useState({
        title: "",
        author: "",
        price: "",        
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    const handleAdd = () => {
        addBook(form);
        setForm({
            title: "",
            author: "",
            price: ""
        })
    }

  return (
    <div>
        <h2>책 정보 입력</h2>
        <input 
            type="text" 
            name='title'
            placeholder='책 제목'
            onChange={handleChange}
            value={form.title}
        />
        <input 
            type="text" 
            name='author'
            placeholder='책 저자'
            onChange={handleChange}
            value={form.author}
        />
        <input 
            type="number" 
            name='price'
            placeholder='책 가격'
            onChange={handleChange}
            value={form.price}
        />
        <button onClick={handleAdd}>추가</button>
        <ul>
            {books.map((book) => {
                return <Book 
                    key={book.id}  
                    book={book}
                    onUpdate={updateBook}
                    onRemove={removeBook}
                />
            })}
        </ul>
    </div>
  )
}

// onRemove, onUpdate는 useBookList로 받은 함수
function Book({book, onRemove, onUpdate}) {
    const {title, author, price} = book;
    const [isEditing, setIsEditing] = useState(false);
    const [editPrice, setEditprice] = useState(price);

    const handleUpdate = () => {
        onUpdate(book.id, editPrice);
        setIsEditing(false);
    }


    return (
        <li>
            <strong>{title}</strong> - {author}
            {/* 수정하기 버튼 누르면 
            1. price를 다시 입력할 수 있게 input
            2. 취소버튼
            3. 완료버튼
            */}
            {isEditing ?
                <>
                    <input type="number" value={editPrice} onChange={(e) => setEditprice(e.target.value)}/>
                    <button onClick={() => setIsEditing(false)}>취소</button>
                    <button onClick={handleUpdate}>완료</button>
                </>
            :
            <>
                <span>{price}원</span>
                <button onClick={() => setIsEditing(true)}>수정</button>
                <button onClick={() => onRemove(book.id)}>삭제</button>
            </>
            }           
        </li>
    )
}
