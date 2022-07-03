import React from "react";
import styled from "styled-components";

const ScrollView = () => {
  const Data = [
    {
      id: 1,
      name: "all",
      active: true,
    },
    {
      id: 2,
      name: "from your search",
      active: false,
    },
    {
      id: 3,
      name: "supercar",
      active: false,
    },
    {
      id: 4,
      name: "racing",
      active: false,
    },
    {
      id: 5,
      name: "fashion",
      active: false,
    },
    {
      id: 6,
      name: "movies",
      active: false,
    },
    {
      id: 7,
      name: "series",
      active: false,
    },
    {
      id: 7,
      name: "series",
      active: false,
    },
    {
      id: 7,
      name: "series",
      active: false,
    },
  ];
  return (
    <Cover>
      <Wrapper>
        {Data.map((item) => (
          <Card className={item.active && "active"}>{item.name}</Card>
        ))}
      </Wrapper>
    </Cover>
  );
};

export default ScrollView;
const Cover = styled.div`
  height: 40px;
  width: 100%;
  background: #fff;
  display: flex;
  overflow-x: scroll;
  max-width: 500px;
  border-bottom: 1px solid #141414;
  ::-webkit-scrollbar {
    display: none;
  }
  align-items: center;
`;
const Card = styled.span`
    padding:4px 8px;
    border:.5px solid #000;
    border-radius:20px;
    font-size:16px;
    background:#ddd;
    margin-right:10px;
    white-space: nowrap;
    text-transform : capitalize;
    cursor: pointer;
    &.active{
        background : #706a6a;
        color : #fff;
    }
}
    
`;
const Wrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  max-width: 500px;
  width: 95%;
  margin: 0 auto;
  ::-webkit-scrollbar {
    display: none;
  }
  align-items: center;
`;
