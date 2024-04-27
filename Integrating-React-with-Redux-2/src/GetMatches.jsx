import{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const GetMatches = () => {
  const match = useSelector((store) => store.match);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      let a = await fetch(
        `https://jsonmock.hackerrank.com/api/football_matches?page=${page}`
      );
      let res = await a.json();
      setData(res.data);
    };
    getData();
  }, [page]);

  const Rows = () => {
    let arr = [];
    for (let i = 1; i < 11; i++) {
      arr.push(i);
    }

    return (
      <div id="page">
        {arr.map((e, i) => (
          <button key={i} onClick={() => setPage(e)}>
            {e}
          </button>
        ))}
      </div>
    );
  };

  const handleClick = () => {
    dispatch({ type: "GET", payload: data });
  };
  return (
    <div id="btn2">
      <h2>Football Matches</h2>
      <button onClick={handleClick}>Get Matches Data</button>
      <Rows />
      {match.footballMatches.map((e, i) => (
        <div
          key={i}
          style={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            margin: "auto",
            marginTop: "5%",
            marginBottom: "5%",
            width: "60%",
            padding: "1%",
          }}
        >
          <h2>
            {e.competition} - {e.year}
          </h2>
          <h3>{e.round}</h3>
          <h4>
            {e.team1} vs {e.team2}
          </h4>
          <p>
            {" "}
            {e.team1goals} : {e.team2goals}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GetMatches;
