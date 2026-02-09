import { useMutation } from "@tanstack/react-query"
import { signupAPI } from "../../../apis/endpoints/auth"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

export const useSignupMutation = () => {
    const navigator = useNavigate();

    return useMutation({
        mutationFn: signupAPI,
        onSuccess: () => {
            toast.success("회원가입 성공!") // 전역토스트
            navigator("/signin");
        },
        onError: (error) => {
            // 서버에서 내려주는 validation 에러는
            // 상태로 처리할 것임
            console.log(error.response);
            const msg = error.response?.data;
            toast.error(msg);
        }
    })
}

export const useSignupValidation = (formVal) => {
    const {username, password, passwordConfirm, name, email} = formVal;

    // 목표: 빈 값 체크, 비번-비번확인 동일한지 체크
    // 검증 실패한 필드는 newError 객체에 key-value형태로 업데이트
    const newError = {};
    if(!username.trim()) {
        newError.username = "아이디를 입력해주세요";
    }

    if(!password.trim()) {
        newError.password = "비밀번호를 입력해주세요";
    }

    if(!passwordConfirm.trim()) {
        newError.passwordConfirm = "비밀번호 확인을 입력해주세요";
    } else if(password !== passwordConfirm) {
        newError.passwordConfirm = "비밀번호가 일치하지 않습니다"
    }

    if(!name.trim()) {
        newError.name = "이름을 입력해주세요";
    }

    if(!email.trim()) {
        newError.email = "이메일을 입력해주세요";
    }

    // 검사를 모두 통과했다면 -> newError: {}
    // 비어있는 js 객체라면 keys의 결과는 : []
    const isAllValidate = Object.keys(newError).length === 0;

    return {newError, isAllValidate}
}