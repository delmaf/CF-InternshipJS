import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Search from "./Search";
import { DATASET } from "../mockData";

const Main = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");

  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState(query || "");

  //--------------------------------  UI Emotion’s styled components----------------------------------------
  const Content = styled.p(`
  padding-left: 50px;
  color: red;
`);

  useEffect(() => {
    setTimeout(() => {
      setData(DATASET);
    }, 300);
  }, []);

  const onChangHandle = (e) => {
    setSearchValue(e.target.value);
  };

    //--------------------------------  simple Filter after input 3+ char----------------------------------------
  const filteredData = data.filter((word) => {
    if (!(searchValue.length > 2)) {
      return true;
    } else {
      return word.includes(searchValue);
    }
  });

  return (
    <div>
      <Search value={searchValue} onChangeValue={onChangHandle} />
      {filteredData.map((e, i) => {
        return <Content key={i}> {e} </Content>;
      })}
    </div>
  );
};

export default Main;
