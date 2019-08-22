import React, {Component} from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gastank from "../pictures/gastank.png";
import "../styles/kunden.css";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import NavLink from "react-router-dom";

export default class kunden extends Component {

    constructor(props) {
        super(props);

        this.setState = {
            behaelter: "",
            plz: "",
        };
    }


    render() {
        return (
            <div>
                <Row>
                    <Col><h3 class="text-center">Wählen Sie die Optionen für den Preisvergleich aus:
                    </h3></Col>
                </Row>
                <Row>
                    <Col/>
                    <Col><h4 class="text-center"><br/>1. Behältergröße</h4></Col>
                    <Col/>
                </Row>
                <div className="selected-behltergrsse">
                    <Row>
                        <Col/>
                        <Col/>
                        <Col>
                            <label>
                                <input type="radio" name="tankgroesse" id="1.2t"/>
                                <Image src={gastank} height="120" width="120"/>
                                <br/><h6 class="text-center">1,2 Tonnen</h6>
                            </label>
                        </Col>
                        <Col>
                            <label>
                                <input type="radio" name="tankgroesse" id="2.1t"/>
                                <Image src={gastank} height="120" width="120"/>
                                <br/><h6 className="text-center">2,1 Tonnen</h6>
                            </label>
                        </Col>
                        <Col>
                            <label>
                                <input type="radio" name="tankgroesse" id="2.9t"/>
                                <Image src={gastank} height="120" width="120"/>
                                <br/><h6 className="text-center">2,9 Tonnen</h6>
                            </label>
                        </Col>
                        <Col/>
                        <Col/>
                    </Row>
                    <Row>
                        <Col/>
                        <Col><h4 class="text-center"><br/>2. Postleitzahl</h4></Col>
                        <Col/>
                    </Row>
                    <Row>
                        <Col/>
                        <Col>
                            <br/>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">PLZ</InputGroup.Text>
                                </InputGroup.Prepend>
                                    <input type="text" aria-describedby="basic-addon1" name="plz"
                                           onChange={this.handleChange}  className="form-control"/>
                            </InputGroup>
                        </Col>
                        <Col/>
                    </Row>
                    <Row>
                        <Col/>
                        <Col><h4 class="text-center"><br/>3. Losschicken</h4></Col>
                        <Col/>
                    </Row>
                    <Row>
                        <Col/>
                        <Col>
                            <br/>
                            <div class="text-center">
                                <Button type="submit" class="btn btn-primary">Anbieter finden</Button>
                            </div>
                        </Col>
                        <Col/>
                    </Row>
                    <Row><br/></Row>
                </div>

            </div>
        )
    }
}