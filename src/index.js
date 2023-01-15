import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <h1>CI/CD Pipeline for a React App!</h1>
      <h2>Test Deploy to AWS CodePipeline to an S3 bucket.  I am using github for my repository. </h2>
      <h3>http://cicd-pipeline-react-demo.s3-website-us-east-1.amazonaws.com/</h3>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));