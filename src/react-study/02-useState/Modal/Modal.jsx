const overlayStyle = { // 배경
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const modalStyle = {
    backgroundColor: "white",
    width: "420px",
    height: "360px",
    padding: "20px",
    borderRadius: "8px",
};

export default function Modal({isOpen, post, onClick}) {

    if(!isOpen) return null;
    // jsx에서 falsy, [], boolean 표현 안 됨

  return (
    <div style={overlayStyle}>
        <div style={modalStyle}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {/* 눌리면 isOpen이 true가 되어야 함 */}
            <button onClick={onClick}>닫기</button>
        </div>
    </div>
  );
}
