import React from 'react'
// css -> css in JS
// emotion or style-component
export default function NavItem({id, label, isActive, onClick}) {
  return (
    <li 
        onClick={() => onClick(id)}
        // 상태에 따라 서로 다른 스타일
        style={{cursor:"pointer", fontWeight: isActive ? "700" : "200"}}
    >
        {label}
    </li>
);
}
