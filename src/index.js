import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <h1>CI/CD Pipeline for a React App!</h1>
      <h2>Deploying to AWS CodePipeline to an s3 bucket.  I am using github for my repository. </h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));