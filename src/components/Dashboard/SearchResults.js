import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import Autosuggest from "react-bootstrap-autosuggest";

const SearchResults = ({ cityResults }) => {
  //   const [cityResults, setcityResults] = useState([
  //     {
  //       name: "Miami",
  //       state: "FL",
  //       weather: { temp: 89, conditions: "Clear Sky" },
  //     },
  //     {
  //       name: "Austin",
  //       state: "TX",
  //       weather: { temp: 79, conditions: "Cloudy" },
  //     },
  //   ]);

  const Results = () => {
    const results = [];
    for (let index = 0; index < cityResults.length; index++) {
      const result = cityResults[index];
      const resultJSX = (
        <div key={result.id} style={{ borderBottom: "1px solid black" }}>
          <p>{result.cityName}</p>
          <p>{result.region}</p>
          <p>{result.country}</p>
        </div>
      );

      results.push(resultJSX);
    }
    return results;
  };

  return <Autosuggest datalist={[]} />;
};

export default SearchResults;
