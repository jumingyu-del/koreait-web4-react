/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import only_logo from "../../../assets/only_logo.svg"
import { Link } from "react-router-dom";
import FormInput from "./components/FormInput";
import { useForm } from "../../hooks/useForm";
import { useRef, useState } from "react";
import { useSignupMutation, useSignupValidation } from "./hooks/useSignup";

export default function Signup() {
    const {formVal, handleChange} = useForm({
        username: "",
        password: "",
        passwordConfirm: "",
        name: "",
        email: ""
    });
    // [{}, {}, {}] => {}
    const [errors, setErrors] = useState({});
    const {mutate, isPending} = useSignupMutation();
    const {newError, isAllValidate} = useSignupValidation(formVal);

    // 포커스 이동 2~마지막 직전 input까지 ref 생성
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    // 포커스 이동용 핸들러
    const handleUsernameKeyDown = (e) => {
        if(e.key === "Enter") {
            passwordRef.current.focus();
        }
    }
    const handlePasswordKeyDown = (e) => {
        if(e.key === "Enter") {
            passwordConfirmRef.current.focus();
        }
    }
    const handlePasswordConfirmKeyDown = (e) => {
        if(e.key === "Enter") {
            nameRef.current.focus();
        }
    }
    const handleNameKeyDown = (e) => {
        if(e.key === "Enter") {
            emailRef.current.focus();
        }
    }
    const handleEmailKeyDown = (e) => {
        if(e.key === "Enter") {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        if(isPending) return;
        // FE의 validation
        if(!isAllValidate) {
            setErrors(newError);
            return;
        };

        // spread - rest 문법
        const {passwordConfirm, ...signupDto} = formVal;
        mutate(signupDto, {
            onError:(error) => {
                const adiviceError = error.response.data;
                if(
                    error.response.status === 400
                    && Array.isArray(adiviceError)
                )     
                {
                    let trimedError = {};
                    // [{username: "~~"}, {password: "~"}]
                    // -> {username: "~~"}, {password: "~"}
                    for(let errorObj of adiviceError) {
                        trimedError = {...trimedError, ...errorObj};
                    }
                    setErrors(trimedError);
                }
            }
        })
    }

  return (
    <div css={s.container}>
        <div css={s.signupBox}>
            <div css={s.logoBox}>
                <img src={only_logo} alt="logo" css={s.logo}/>
            </div>
            <h1 css={s.title}>회원가입</h1>
            <div css={s.formBox}>
                <FormInput 
                    type="text"
                    label="아이디"
                    name="username"
                    value={formVal.username}
                    onChange={handleChange}
                    placeholder="4~20자 영문 소문자, 숫자"
                    error={errors.username}
                    onKeyDown={handleUsernameKeyDown}
                />
                <FormInput 
                    type="password"
                    label="비밀번호"
                    name="password"
                    value={formVal.password}
                    onChange={handleChange}
                    placeholder="비밀번호를 입력하세요"
                    error={errors.password}
                    ref={passwordRef}
                    onKeyDown={handlePasswordKeyDown}
                    />
                <FormInput 
                    type="password"
                    label="비밀번호 확인"
                    name="passwordConfirm"
                    value={formVal.passwordConfirm}
                    onChange={handleChange}
                    placeholder="비밀번호를 다시 입력하세요"
                    error={errors.passwordConfirm}
                    ref={passwordConfirmRef}
                    onKeyDown={handlePasswordConfirmKeyDown}
                />
                <FormInput 
                    type="text"
                    label="이름"
                    name="name"
                    value={formVal.name}
                    onChange={handleChange}
                    placeholder="이름을 입력하세요"
                    error={errors.name}
                    ref={nameRef}
                    onKeyDown={handleNameKeyDown}
                />
                <FormInput 
                    type="email"
                    label="이메일"
                    name="email"
                    value={formVal.email}
                    onChange={handleChange}
                    placeholder="sample@email.com"
                    error={errors.email}
                    ref={emailRef}
                    onKeyDown={handleEmailKeyDown}
                />
                <button css={s.btn} onClick={handleSubmit}>회원가입</button>
                <div css={s.linkBox}>
                    <span css={s.linkText}>이미 계정이 있으신가요?</span>
                    <Link to="/signin" css={s.link}>로그인</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
