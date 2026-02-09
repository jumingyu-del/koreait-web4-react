import { useMutation } from "@tanstack/react-query"
import { signinAPI } from "../../../apis/endpoints/auth";
import { useAuthStore } from "../../../stores/authStore";
import { toast } from "react-toastify";

export const useSigninMutation = () => {
    const {login} = useAuthStore();
    return useMutation({
        mutationFn: signinAPI,
        onSuccess: (data) => {
            const accessToken = data;
            login(accessToken);
            // 전역토스트 - 로그인 성공
            // warning / success/ error
            toast.success("로그인성공");
        },
        onError: (error) => {
            const errorMsg = error.response.data;
            // 토스트로 에러메세지
            toast.error(errorMsg);
        }
    });
}