// axios는 객체 하나를 만들어서 재사용 가능
// -> 여러 설정을 미리 정의하고 재사용

import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080/product"
});

// 상품 검색 API 호출 함수
export const getSearchProductApi = async (q) => {
    // "http://localhost:8080/product/search"
    const response = await instance.get("/search", {
        // params로 정의하면 쿼리스트링 알아서 조립해줌
        // "http://localhost:8080/product/search?nameKeyword=키보드"
        params: {
            nameKeyword: q
        }
    });
    return response;
}

// 상품 단건 등록 api
// post요청 -> body가 존재
// 매개변수로 body 데이터를 받아온다
export const addProductApi = async (product) => {
    const response = instance.post("/add", product);
    return response;
}

// 다건 추가
// [{}, {}..]
export const addBulkProductApi = async (products) => {
    const response = await instance.post("/add/bulk", products);
    return response;
}

// 전체 상품조회 api 함수 정의 - get 요청(/all)
export const getAllProductApi = async () => {
    const response = await instance.get("/all");
    return response;
}

// 삭제 api 함수
export const deleteProductApi = async (id) => {
    const response = await instance.delete(`/${id}`);
    return response;
}