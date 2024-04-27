import { useReducer, useRef } from "react";

import "./App.css";

function App() {
  const details = useRef([]);
  const initialState = {
    name: "",
    establishment_year: "",
    address: {
      building: "",
      street: "",
      city: {
        name: "",
        locality: {
          pincode: "",
          landmark: "",
        },
      },
      state: "",
      coordinates: {
        latitude: "",
        longitude: "",
      },
    },
    courses_offered: [],
  };

  const reducer = (data, { type, payload }) => {
    switch (type) {
      case "NAME":
      case "ESTABLISHED": {
        return { ...data, ...payload };
      }
      case "ADDRESS": {
        return { ...data, address: { ...data.address, ...payload } };
      }
      case "CITY": {
        return {
          ...data,
          address: {
            ...data.address,
            city: { ...data.address.city, ...payload },
          },
        };
      }

      case "CITY_LOCALITY": {
        return {
          ...data,
          address: {
            ...data.address,
            city: {
              ...data.address.city,
              locality: { ...data.address.city.locality, ...payload },
            },
          },
        };
      }

      case "COORDINATES": {
        return {
          ...data,
          address: {
            ...data.address,
            coordinates: {
              ...data.address.coordinates,
              ...payload,
            },
          },
        };
      }

      case "COURSES": {
        return { ...data, ...payload };
      }

      case "SUBMIT_RESET":
        return {
          name: "",
          establishment_year: "",
          address: {
            building: "",
            street: "",
            city: {
              name: "",
              locality: {
                pincode: "",
                landmark: "",
              },
            },
            state: "",
            coordinates: {
              latitude: "",
              longitude: "",
            },
          },
          courses_offered: [],
        };
      default:
        throw new Error("invalid action type");
    }
  };

  const [data, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    details.current = [{ data }];
    dispatch({ type: "SUBMIT_RESET" });
  };

  return (
    <div id="container">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <form onSubmit={handleSubmit}>
          <input
            id="name"
            type="text"
            value={data.name}
            placeholder="Name"
            onChange={(e) => {
              dispatch({
                type: "NAME",
                payload: {
                  [e.target.id]: e.target.value,
                },
              });
            }}
          />
          <br />
          <input
            id="establishment_year"
            type="number"
            value={data.establishment_year}
            placeholder="established year"
            onChange={(e) => {
              dispatch({
                type: "ESTABLISHED",
                payload: {
                  [e.target.id]: e.target.value,
                },
              });
            }}
          />
          <br />
          <input
            id="building"
            type="text"
            value={data.address.building}
            placeholder="building"
            onChange={(e) => {
              dispatch({
                type: "ADDRESS",
                payload: {
                  [e.target.id]: e.target.value,
                },
              });
            }}
          />
          <br />
          <input
            id="street"
            type="text"
            value={data.address.street}
            placeholder="street"
            onChange={(e) => {
              dispatch({
                type: "ADDRESS",
                payload: {
                  [e.target.id]: e.target.value,
                },
              });
            }}
          />
          <br />

          <input
            id="name"
            type="text"
            value={data.address.city.name}
            placeholder="city"
            onChange={(e) => {
              dispatch({
                type: "CITY",
                payload: {
                  [e.target.id]: e.target.value,
                },
              });
            }}
          />
          <br />
          <input
            id="pincode"
            type="number"
            value={data.address.city.locality.pincode}
            placeholder="pincode"
            onChange={(e) => {
              dispatch({
                type: "CITY_LOCALITY",
                payload: {
                  [e.target.id]: e.target.value,
                },
              });
            }}
          />
          <br />
          <input
            id="landmark"
            type="text"
            value={data.address.city.locality.landmark}
            placeholder="landmark"
            onChange={(e) => {
              dispatch({
                type: "CITY_LOCALITY",
                payload: {
                  [e.target.id]: e.target.value,
                },
              });
            }}
          />
          <br />
          <input
            id="state"
            type="text"
            value={data.address.state}
            placeholder="state"
            onChange={(e) => {
              dispatch({
                type: "ADDRESS",
                payload: {
                  [e.target.id]: e.target.value,
                },
              });
            }}
          />
          <br />
          <input
            id="latitude"
            type="number"
            value={data.address.coordinates.latitude}
            placeholder="latitude"
            onChange={(e) => {
              dispatch({
                type: "COORDINATES",
                payload: {
                  [e.target.id]: e.target.value,
                },
              });
            }}
          />
          <br />
          <input
            id="longitude"
            type="number"
            value={data.address.coordinates.longitude}
            placeholder="longitude"
            onChange={(e) => {
              dispatch({
                type: "COORDINATES",
                payload: {
                  [e.target.id]: e.target.value,
                },
              });
            }}
          />
          <br />
          <input
            id="courses_offered"
            type="text"
            value={data.courses_offered}
            placeholder="courses offered"
            onChange={(e) => {
              dispatch({
                type: "COURSES",
                payload: {
                  [e.target.id]: e.target.value,
                },
              });
            }}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
      <div style={{ marginLeft: "40%" }}>
        {details.current.map((e, i) => (
          <div key={i}>
            <h2>Name: {e.data.name}</h2>
            <h4>Established in the Year : {e.data.establishment_year}</h4>
            <h4>
              Address : {e.data.address.building}, {e.data.address.street},{" "}
              {e.data.address.city.name}, {e.data.address.state} -{" "}
              {e.data.address.city.locality.pincode}
            </h4>
            <h4>Landmark : {e.data.address.city.locality.landmark}</h4>
            <h4>
              Co-ordinates : Latitude:{e.data.address.coordinates.latitude}{" "}
              Longitude:{e.data.address.coordinates.longitude}
            </h4>
            <h4>Courses offered : {e.data.courses_offered}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
