import { create } from "zustand";

export const useSurveyStore = create((set) => {
    return {
        surveyData: {
            // step1
            name: "",
            age: "",
            gender: "",

            // step2
            satisfaction: "",
            recommend: "",
            email: ""
        },

        setSurveyInfo: (objDate) => set((prev) => {
            // js 객체는 key 중복시 이후값이 이전값 덮어쓴다
            return {
                ...prev,
                surveyData: {...prev.surveyData, ...objDate}
            }
        }),

        // 이메일만 업데이트 할 수 있는 set
        setEmail: (email) => set((prev) => {
            return {
                ...prev,
                surveyData: {...prev.surveyData, email}
            }
        }),

        
    }   
})