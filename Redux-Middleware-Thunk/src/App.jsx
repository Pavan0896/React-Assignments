import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { errorAction, fetchAction, successAction } from "./Store/actions";
import { useRef } from "react";

function App() {
  const data = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const sort = useRef("")
  let search;

  const fetchData = () => {
    
    if(sort.current == ""){
      search = ""
    } else {
      search = `sort=price&order=${sort.current}`
    }
    return function (dispatch) {
      dispatch(fetchAction());
      fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?${search}`
      )
        .then((res) => res.json())
        .then((res) => dispatch(successAction(res)))
        .catch((error) => dispatch(errorAction()));
    };
  };

  return (
    <>
      <div>
        <button onClick={() => dispatch(fetchData())}>Get Data</button>
      </div>
      <div>
      <label>Sort by Price</label>
        <select onChange={(e)=>{sort.current=e.target.value;
        dispatch(fetchData());
        }}>
          
          <option value="">All</option>
          <option value="asc">Low to High</option>
          <option value="desc">Hight to Low</option>
        </select>
      </div>
      <div
        style={{
          marginTop: "2%",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "2%",
        }}
      >
        {!data.isLoading ? (
          data.data == undefined ? null : (
            data.data.map((e) => (
              <div
                key={e.id}
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  width: "100%",
                  margin: "auto",
                  padding: "2%",
                }}
              >
                <img
                  src={e.image}
                  alt="coffee"
                  style={{ width: "100%", height: "280px" }}
                />
                <h3>{e.title}</h3>
                <p>Price ₹{e.price}</p>
              </div>
            ))
          )
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

export default App;
