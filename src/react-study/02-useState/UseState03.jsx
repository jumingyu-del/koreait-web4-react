import React, { useState } from 'react'

export default function UseState03() {
    const [formData, setFormData] = useState({
        name: "",
        major: "",
    });
    const [name, setName] = useState("");
    const [major, setMajor] = useState("");

    // onClick, onChange와 같은 이벤트 속성에
    // 등록된 함수는 첫번째 매개변수에
    // 리액트가 알아서 이벤트객체를 넣어준다.
    const handleNameChange = (event) => {
        const target = event.target;
        const value = target.value;
        setName(value);
    };

    const handleMajorChange = (e) => {
        const value = e.target.value;
        setMajor(value);
    };

    const handleInputChange = (e) => {
        // name 속성을 잘 이용해보세요
        const {name, value} = e.target;
        // name === "name" -> name Input
        // name === "major" -> major Input
        // -> 두개의 input 중 어떤 input인지 식별
        // setFormData()에 js 객체를 업데이트

        const newFormData = {
            ...formData, // 기존값 복사
            [name]: value, // 바뀐 값만 업데이트
        };
        setFormData(newFormData);
    };

  return (
    <div>
        <input 
            type="text"
            // value에 name을 넣어놨기 때문에
            // 업데이트 할 때마다 setter로 name을 업데이트해줘야 함
            value={formData.name}
            name="name"
            placeholder="이름입력"
            onChange={handleInputChange}
        />
        <input 
            type="text"
            value={formData.major}
            name="major"
            onChange={handleInputChange}
            placeholder="전공입력"
        />
        <p>이름:{formData.name}</p>
        <p>전공:{formData.major}</p>
    </div>
  );
}
