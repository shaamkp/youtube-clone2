import React from "react";
import styled from "styled-components";
import Datas from "../../videos.json";

function RelatedVideos({ setUrl, urls }) {
  console.log(Datas, "ppopopo");
  console.log(urls, "ppopopobb");

  return (
    <Cover>
      <Wrapper>
        {Datas.map((item) => (
          <Container onClick={() => setUrl(item.video_url)}>
            <Top>
              <img src={item.thumbnail} alt="Image" />
            </Top>
            <Bottom>
              <Left>
                <img src={item.channel_dp} alt="image" />
              </Left>
              <Right>
                <VideTitle>{item.name}</VideTitle>
                <Channel>
                  {item.channel},{item.date}
                </Channel>
              </Right>
            </Bottom>
          </Container>
        ))}
      </Wrapper>
    </Cover>
  );
}

export default RelatedVideos;

const Cover = styled.div`
  width: 100%;
  height: 400px;
  overflow-x: scroll;
`;
const Container = styled.div`
  margin-top: 20px;
  cursor: pointer;
`;
const Top = styled.div`
  width: 100%;
  img {
    width: 100%;
    display: block;
  }
`;
const Bottom = styled.div`
  margin-top: 10px;
  display: flex;
`;
const Left = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const Right = styled.div``;
const VideTitle = styled.h4`
  font-size: 16px;
  color: #000;
`;
const Channel = styled.p`
  font-size: 12px;
  color: #141414;
`;
const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
`;
