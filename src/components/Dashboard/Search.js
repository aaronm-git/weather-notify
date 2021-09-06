import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { weatherAutoComplete } from "../../utils/weatherApi";
import { AsyncTypeahead } from "react-bootstrap-typeahead"; // ES2015
import "react-bootstrap-typeahead/css/Typeahead.css";

const Search = () => {
  const [cityResults, setCityResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (query.length) {
      setLoading(true);
      const results = await weatherAutoComplete(query);
      setLoading(false);
      console.log(results);
      setCityResults(results);
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Search</Form.Label>
        <AsyncTypeahead
          id="cityList"
          isLoading={loading}
          onSearch={handleSearch}
          onInputChange={handleSearch}
          options={cityResults.map((city) => city.name)}
          placeholder="Search for a city..."
          maxResults={5}
          multiple
          autoFocus
          delay={500}
        />
      </Form.Group>
    </Form>
  );
};

export default Search;
