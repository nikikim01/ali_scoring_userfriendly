import React, { Component } from "react";
import ScoreTests from "../modules/ScoreTests.js";
import "./TestScoringPage.css";

class TestScoringPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    

    render() {
        return (
            <>
                <ScoreTests />
            </>

        );
    }
}
export default TestScoringPage;