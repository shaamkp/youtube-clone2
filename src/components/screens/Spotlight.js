import React, { useState } from "react";
import styled from "styled-components";
import RelatedVideos from "./RelatedVideos";
import ScrollView from "./ScrollView";
import VideoPlayer from "./VideoPlayer";

function Spotlight() {
  const [urls, setUrl] = useState("https://youtu.be/oo1YiqhZzzQ");
  console.log(urls);
  return (
    <Cover>
      <MobileView>
        <VideoPlayer urls={urls} />
        <ScrollView />
        <RelatedVideos urls={urls} setUrl={setUrl} />
      </MobileView>
    </Cover>
  );
}

export default Spotlight;
const Cover = styled.div`
  height: 100vh;
  // width:500px;
  // height:700px;
  // background:red;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MobileView = styled.div`
  width: 500px;
  height: 700px;
  // background:red;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 1px 10px 2px #000;
`;
