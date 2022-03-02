import React, { useState } from "react";
import logo from "./logo.svg";
import "./style.css";
import { Button, Container, Col, Form, Row } from "react-bootstrap";

//create place obj

//add to lab
const WanderLab = ({ index, onCreatePlace }) => {
  const [cityName, setcityName] = useState("");
  const [type, settype] = useState("");
  const [eat, seteat] = useState("");
  const [mustTryFood, setmustTryFood] = useState("");
  const [drink, setdrink] = useState("");
  const [mustTryDrink, setmustTryDrink] = useState("");
  const [see, setsee] = useState("");
  const [especiallySee, setespeciallySee] = useState("");
  const [mustDo, setmustDo] = useState("");
  const [explore, setexplore] = useState("");
  const [budget, setBudget] = useState(0);
  const [content, setContent] = useState("");

  const createPlace = (event) => {
    event.preventDefault();
    const place = {
      id: index,
      cityName,
      type,
      eat,
      mustTryFood,
      drink,
      mustTryDrink,
      see,
      especiallySee,
      mustDo,
      explore,
      budget,
      content,
    };
    onCreatePlace(place);

    //reset the form
    setcityName("");
    seteat("");
    settype("");
    setmustTryFood("");
    setdrink("");
    setmustTryDrink("");
    setsee("");
    setespeciallySee("");
    setmustDo("");
    setexplore("");
    setBudget("");
    setContent("");
  };
  const Place = ({
    cityName,
    eat,
    type,
    mustTryFood,
    drink,
    mustTryDrink,
    see,
    especiallySee,
    mustDo,
    explore,
    budget,
    content,
    onShowPlace,
    onCalculateTotal,
  }) => {
    //Declare a new state var called quantity
    const [quantity, setQuantity] = useState(0);

    const buy = () => {
      //alert('You selected this place')
      setQuantity(quantity + 1);
      onCalculateTotal(budget);
    };
  };

  return (
    <Container>
      <Row>
        <Col>
          <div id="lab-header">
            <h1>welcome to your wander lab</h1>
            <p>
              use this space to build your itenerary advisor and preview on the
              right.{" "}
            </p>
          </div>

          <Form>
            <Form.Group className="mb-1">
              <Form.Label> City + Time of day:</Form.Label>
              <Form.Control
                type="text"
                value={cityName}
                placeholder="name of city"
                onChange={(e) => setcityName(e.target.value)}
              />

              <br />
              <Form.Select
                className="form-control"
                aria-label="Default select example"
                id="type"
                name="type"
                value={type}
                onChange={(e) => settype(e.target.value)}
              >
                <option> time of day</option>
                <option value="1">in a day</option>
                <option value="2">in an afternoon</option>
                <option value="3">in an evening</option>
                <option value="4">at night</option>
              </Form.Select>
              <br />
              <Form.Label> Upload a photo </Form.Label>

              <Form.Control type="file" name="file" className="form-control" />
            </Form.Group>
            <br />
            <Form.Group className="mb-1">
              <Form.Label> Eat: </Form.Label>
              <Form.Control
                type="text"
                value={eat}
                placeholder="best place to eat"
                onChange={(e) => seteat(e.target.value)}
              />
              <br />
              <Form.Control
                type="text"
                value={mustTryFood}
                placeholder="must try food"
                onChange={(e) => setmustTryFood(e.target.value)}
              />{" "}
              <br />
              <Form.Label> Drink: </Form.Label>
              <Form.Control
                type="text"
                value={drink}
                placeholder="grab a beverage here"
                onChange={(e) => setdrink(e.target.value)}
              />{" "}
              <br />
              <Form.Control
                type="text"
                value={mustTryDrink}
                placeholder="must try drink on the menu"
                onChange={(e) => setmustTryDrink(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-1">
              <Form.Label> See: </Form.Label>
              <Form.Control
                className="input-lrg"
                type="text"
                value={see}
                onChange={(e) => setsee(e.target.value)}
              />
              <Form.Label> Especially: </Form.Label>
              <Form.Control
                type="text"
                value={especiallySee}
                onChange={(e) => setespeciallySee(e.target.value)}
              />
              <Form.Label> Do: </Form.Label>
              <Form.Control
                className="input-lrg"
                type="text"
                value={mustDo}
                onChange={(e) => setmustDo(e.target.value)}
              />
              <Form.Label> Explore: </Form.Label>
              <Form.Control
                className="input-lrg"
                type="text"
                value={explore}
                onChange={(e) => setexplore(e.target.value)}
              />
            </Form.Group>
            <Form.Label> Budget </Form.Label>
            <Form.Control
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
            <br />
            <br />
            <Form.Label> Content </Form.Label>
            <Form.Control
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />{" "}
            <br />
            <Button onClick={createPlace}> Add to Wander Lab</Button>
            <hr />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default WanderLab;