

import './App.css';
import exampleImage from "./assets/example-image.jpg";

import Comments from "./Comments";

const App = () => {
  return (
    <>
      <div className='App'>
      <img src={exampleImage} alt="Example" />
      </div>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </>
  );
};

export default App;
  