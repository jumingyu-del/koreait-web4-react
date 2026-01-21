import React from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate, useSearchParams } from 'react-router-dom'

export default function Router05() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<OrderList />}/>
            <Route path='/order' element={<OrderDetail />}/>
        </Routes>
    </BrowserRouter>
  )
}

// url: "/"
function OrderList() {
    const orders = [
        {product: "노트북", quantity: 1, status: "배송중"},
        {product: "키보드", quantity: 2, status: "배송완료"},
        {product: "마우스", quantity: 3, status: "주문접수"},
    ]

    return (
        <div>
            <h1>주문목록</h1>
            <div>
                {/* orders를 map을 사용하여 카드형식으로 뿌려주세요
                    상품이름만 보이면 됩니다
                    해당 이름 클릭시 OrderDetail 컴포넌트 렌더링
                    이때 props로 데이터 전달 x -> URL로 데이터 전달
                */}
                {orders.map((order) => {
                    const {product, quantity, status} = order;
                    const url = `/order?product=${product}&quantity=${quantity}&status=${status}`;
                    return (
                        <div>
                            <Link to={url}>{product}</Link>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

// url: /order
function OrderDetail() {
    // props가 아니라 url로 데이터를 전달받아
    // 각 정보를 렌더링해주세요
    const [searchParams] = useSearchParams();
    const navigator = useNavigate();

    // 쿼리스트링에서 뽑아온 데이터 -> string
    const product = searchParams.get("product")
    const quantity = searchParams.get("quantity")
    const status = searchParams.get("status")

    return (
        <div>
            <h1>주문 상세 페이지</h1>
            <div>
                <p>상품명: {product}</p>
                <p>주문 수량: {quantity}</p>
                <p>배송 상태: {status}</p>
            </div>
            <button onClick={() => navigator("/")}>목록으로</button>
        </div>
    )
}
