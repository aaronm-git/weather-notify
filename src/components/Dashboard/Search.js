import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { weatherAutoComplete } from "../../utils/weatherApi";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015
import "react-bootstrap-typeahead/css/Typeahead.css";

const Search = ({ setSelected, setError }) => {
  const [cityResults, setCityResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (query.length) {
      try {
        setLoading(true);
        const results = await weatherAutoComplete(query);
        setLoading(false);
        setCityResults(results);
      } catch (error) {
        console.error(error);
        setError(error.message);
        setLoading(false);
      }
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Search</Form.Label>
        <Typeahead
          id="cityList"
          isLoading={loading}
          onInputChange={handleSearch}
          onChange={setSelected}
          options={cityResults}
          labelKey={"name"}
          placeholder="Search for a city..."
          maxResults={5}
          filterBy={() => true}
          multiple
          autoFocus
        />
      </Form.Group>
    </Form>
  );
};

export default Search;
