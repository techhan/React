import {useRef, useState} from "react";

const DiaryEditor = () => {

    // useRef의 MutableRefObject는 HTML의 DOM 요소에 접근할 수 있도록 하는 기능
    const authorInput = useRef();
    const contentInput = useRef();
    

    const [state, setState] = useState({
        author:"",
        content:"",
        emotion:1,
        }
    );

    const handleChangeState = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);

        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit =(e) => {
        if(state.author.length < 1) {
            //focus
            authorInput.current.focus();
            //useRef를 이용해 생성한 객체는 현재 가리키는 값을 current로 가져올 수 있음.
            // 즉 authorInput.current는 input을 가리킨다.
            return ;
        }

        if(state.content.length < 5) {
            //focus
            contentInput.current.focus();
            return ;
        }
        alert("저장 성공");
    }

    return (
    <div className='DiaryEditor'>
        <h2>오늘의 일기</h2>
        <div>
            <input name="author" value={state.author} 
            onChange={handleChangeState}
            ref={authorInput}
            />
        </div>
        <div>
            <textarea name="content" valeu={state.content} 
            onChange={handleChangeState}
            ref={contentInput}
            />
        </div>
        <div>
        <span>오늘의 감정 점수 :  </span>
            <select name='emotion' value={state.emotion} onChange={handleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>
                일기 저장하기
            </button>
        </div>
    </div>
    );
};

export default DiaryEditor;