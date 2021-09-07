import React, { useState, useEffect } from "react";
import { getWeather } from "../../utils/weatherApi";
import { Row, Col, ListGroup, Form, Badge } from "react-bootstrap";
import _, { set } from "lodash";

const Selected = ({ selected, setError, checked }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const run = async () => {
      const getWeatherCards = async () => {
        const weatherCards = [];
        if (selected.length) {
          for (let index = 0; index < selected.length; index++) {
            const result = await getWeather(selected[index].url);
            const city = result.data;
            const weatherCard = (
              <ListGroup
                id={selected[index].id}
                key={selected[index].id}
                className="shadow-sm"
              >
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
                      <small className="d-block">
                        {city.location.localtime}
                      </small>
                      <small className="d-block">
                        {city.current.condition.text}
                      </small>
                    </Col>
                  </Row>
                  <Row>
                    <Col hidden={!checked} className="text-right">
                      {city.current.temp_f > 90 ? (
                        <Badge className="bg-danger text-white">Hot</Badge>
                      ) : null}
                      {city.current.temp_f < 50 ? (
                        <Badge className="bg-primary text-white">Cold</Badge>
                      ) : null}
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

      const weatherCards = await getWeatherCards();
      setCities(weatherCards);
    };
    run();
    const interval = setInterval(() => {
      run();
    }, 60000);
    return () => clearInterval(interval);
  }, [selected, checked]);

  return <div>{cities.length ? cities : null}</div>;
};

export default Selected;
