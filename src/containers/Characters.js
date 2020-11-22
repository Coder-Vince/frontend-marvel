import React, { useState, useEffect } from "react";
import axios from "axios";

function Characters() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      // "http://localhost:3100/characters?orderBy=name" to run locally
      "https://marvelbacknd.herokuapp.com/"
    );
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <div className="posts">
        {data.results.map((item, index) => {
          const keys = Object.keys(item);
          // console.log(keys);
          // console.log(data.results);
          // console.log(
          //   item.thumbnail.path.substr(item.thumbnail.path.length - 9)
          // );
          return (
            <div className="cards">
              {/* <Link to={`/comics/${item._id}`} key={item._id}> */}
              {item.thumbnail.path.substr(item.thumbnail.path.length - 9) ===
              "available" ? null : (
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt="images"
                />
              )}

              <p>{item.name} :</p>
              {item.description ? <p>{item.description}</p> : null}
              {/* </Link> */}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Characters;
