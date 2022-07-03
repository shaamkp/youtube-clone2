import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

function VideoPlayer({ urls }) {
  console.log(urls);
  return (
    <Cover className="wraper">
      <ReactPlayer controls={true} url={urls} width="100%" height="100%" />
    </Cover>
  );
}

export default VideoPlayer;
const Cover = styled.div`
  // height:100vh;
  height: 250px;
  background: #fff;
`;
