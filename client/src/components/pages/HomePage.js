import React, { Component } from "react";
import "./HomePage.css"

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount() {
        document.title = "Home";
    }

    render() {
        return (
            <div>
                <h1 className="HomePage-title">ALI Proximal Vocabulary Automatic Scorer: How to Use</h1>
                <h3 className="HomePage-body">(This website was created to make it easier and quicker to score the receptive proximal vocabulary tests. Hopefully, this will also help reduce human error from manual scoring.)</h3>
                <h2 className="HomePage-body">To score a new batch of tests, head to the "Score Test(s)" page by clicking on the corresponding button in the Nav Bar. Then, drag and drop the csv file into the drop zone. The scoring will be shown on the page as well. You may use the "export to csv" button.</h2>
                <h4 className="HomePage-body u-red">You will need to download the "Form Responses 1" sheet from the "Proximal Vocabulary Test (Responses)" Google Sheet as a csv file. The columns that must be present (and possibly renamed) in the input batch csv file are</h4> 
                <h4 className="HomePage-columnNames">Timestamp</h4>
                <h4 className="HomePage-columnNames">ALI_ID</h4>
                <h4 className="HomePage-columnNames">Date</h4>
                <h4 className="HomePage-columnNames">Tester_Initials</h4>
                <h4 className="HomePage-columnNames">Title_of_Book</h4> 
                <h4 className="HomePage-columnNames">Pretest_or_Postest</h4>
                <h4 className="HomePage-columnNames">Receptive1</h4>
                <h4 className="HomePage-columnNames">Receptive2</h4>
                <h4 className="HomePage-columnNames">Receptive3</h4>
                <h4 className="HomePage-columnNames">Receptive4</h4>
                <h4 className="HomePage-columnNames">Receptive5</h4>
                <h4 className="HomePage-columnNames">Receptive6</h4>
                <h4 className="HomePage-columnNames">Receptive7</h4>
                <h4 className="HomePage-columnNames">Receptive8</h4>
                <h4 className="HomePage-columnNames">Receptive9</h4>
                <h4 className="HomePage-columnNames">Receptive10</h4>
                <h4 className="HomePage-columnNames">Receptive11</h4>
                <h4 className="HomePage-columnNames">Receptive12</h4>
                <h4 className="HomePage-columnNames">Receptive13</h4>
                <h4 className="HomePage-columnNames">Receptive14</h4>
                <h4 className="HomePage-columnNames">Receptive_Notes</h4>
                <h2 className="HomePage-body u-darkgreen">Currently, the answer key consists of answers for the following books:</h2>
                <h4 className="HomePage-columnNames u-lightgreen">Amina's Voice</h4>
                <h4 className="HomePage-columnNames u-darkgreen">Chasing Space Young Readers' Edition</h4>
                <h4 className="HomePage-columnNames u-lightgreen">Crenshaw</h4>
                <h4 className="HomePage-columnNames u-darkgreen">Frindle</h4>
                <h4 className="HomePage-columnNames u-lightgreen">Memphis, Martin, and the Mountaintop : The Sanitation Strike of 1968</h4>
                <h4 className="HomePage-columnNames u-darkgreen">Mr. Klutz Is Nuts</h4>
                <h4 className="HomePage-columnNames u-lightgreen">Puppies Dogs and Blue Northers : Reflections on Being Raised by a Pack of Sled Dogs</h4>
                <h4 className="HomePage-columnNames u-darkgreen">Schomburg: The Man Who Built A Library</h4>
                <h4 className="HomePage-columnNames u-lightgreen">The Bad Beginning</h4>
                <h4 className="HomePage-columnNames u-darkgreen">The Boy Who Invented TV : The Story of Philo Farnsworth</h4>
                <h4 className="HomePage-columnNames u-lightgreen">The Chocolate Touch</h4>
                <h4 className="HomePage-columnNames u-darkgreen">Thirty Minutes Over Oregon</h4>
                <h4 className="HomePage-columnNames u-lightgreen">Voice of Freedom : Fannie Lou Hamer, Spirit of the Civil Rights Movement</h4>
                <h4 className="HomePage-columnNames u-darkgreen">Who Was Galileo?</h4>
                <h4 className="HomePage-columnNames u-lightgreen">Who Was Maya Angelou?</h4>
                <h4 className="HomePage-columnNames u-darkgreen">Young Captain Nemo</h4>
                <h4 className="HomePage-columnNames u-lightgreen">We Are The Ship : The Story of Negro League Baseball</h4>
                <h4 className="HomePage-columnNames u-darkgreen">Bob</h4>
                <h4 className="HomePage-columnNames u-lightgreen">The Reptile Room</h4>
                <h4 className="HomePage-columnNames u-darkgreen">The Lemonade War</h4>

            </div>
        )
    }
}
export default HomePage;