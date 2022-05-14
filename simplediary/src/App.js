import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "레호",
    content: "안녕1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "홍길동",
    content: "안녕2",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "유관순",
    content: "안녕3",
    emotion: 1,
    created_date: new Date().getTime(),
  },
];
function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
