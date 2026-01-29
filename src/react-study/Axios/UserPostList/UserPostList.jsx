import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getUserAPi, getUserPosts } from "../apis/studyApi";

export default function UserPostList() {
    const {userId} = useParams(); // URL에서 userId 추출
    // get 요청 데이터를 받아줄 상태
    const [posts, setPosts] = useState([]);
    // 로딩중인 상태인지 저장하는 상태? -> react-Query

    // 1. api 요청 핸들러
    const getUserPostsData = async () => {
        const postsRes = await getUserPosts(userId);
        // res 객체의 data 필드에 body값들이 저장되어있음
        setPosts(postsRes.data);
    }
    // 2. 핸들 결과를 호출하는 useEffect
    // url이 바뀔때마다 get요청 -> userId가 바뀔때마다

    useEffect(() => {
       getUserPostsData();
    }, [userId]);

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((p) => {
                    const {id, title} = p;
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{title}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}
