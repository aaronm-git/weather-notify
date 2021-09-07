import React, { useState, useEffect } from "react";
import { getWeather } from "../../utils/weatherApi";
import { Row, Col, ListGroup } from "react-bootstrap";

const Selected = ({ selected, setError }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getWeatherCards = async () => {
      const weatherCards = [];
      if (selected.length) {
        for (let index = 0; index < selected.length; index++) {
          const result = await getWeather(selected[index].url);
          const city = result.data;
          const weatherCard = (
            <ListGroup key={selected[index].id} className="shadow-sm">
              <ListGroup.Item>
                <Row>
                  <Col>
                    <img
                      src={"https:" + city.current.condition.icon}
                      alt={city.current.condition.text}
                    />
                    <h2 className="d-inline mx-1">
                      {Math.floor(city.current.temp_f)}
                    </h2>
                    <small className="text-muted">&deg;F</small>
                  </Col>
                  <Col className="text-right">
                    <small className="d-block">
                      {city.location.name}, {city.location.region}
                    </small>
                    <small className="d-block">{city.location.localtime}</small>
                    <small className="d-block">
                      {city.current.condition.text}
                    </small>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          );
          weatherCards.push(weatherCard);
        }
      }
      return weatherCards;
    };

    const run = async () => {
      const weatherCards = await getWeatherCards();
      setCities(weatherCards);
    };
    run();
    const interval = setInterval(() => {
      run();
    }, 60000);
    return () => clearInterval(interval);
  }, [selected]);

  return <div>{cities.length ? cities : null}</div>;
};

export default Selected;
