import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  // 여기에서 store에 접근하여 counter의 값을 가져오려면,
  // useSelector를 사용
  const data = useSelector((state) => state);
  console.log("data", data);

  return <div>Redux!</div>;
};

export default App;
