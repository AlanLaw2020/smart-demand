import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';
import { InputGroup, Row, Dropdown, DropdownButton, Container, Button, FormControl, Col } from 'react-bootstrap';




//システム日時
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <Clock />
        </div>
    );
}



export default Clock;
