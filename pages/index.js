import React from "react";

function Homepage(props) {
  return (
    <div>
      <h1>Welcome to {props.blogTitle}!</h1>
      Whaddupp bitchessss
    </div>
  );
}

Homepage.getInitialProps = () => {
  return {
    blogTitle: "WATCĦBAR",
  };
};

export default Homepage;
