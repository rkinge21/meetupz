import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MeetupDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details:''
        }
    }
    UNSAFE_componentWillMount() {
        this.getMeetup();
    }

    onDelete() {
        let meetupID = this.props.match.params.id;
        axios.delete(`http://localhost:1991/api/meetups/${meetupID}`)
            .then(response => {
                this.props.history.push('/');
            }).catch(err => console.log(err));
    }

    getMeetup() {
        let meetupID = this.props.match.params.id;
        axios.get(`http://localhost:1991/api/meetups/${meetupID}`)
            .then(response => {
                this.setState({ details: response.data }, () => {
                    console.log(this.state);
                })
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/" >Back</Link>
                <h1>Hello, {this.state.details.name}</h1>
                <ul className="collection">
                    <li className="collection-item">City : {this.state.details.city}</li>
                    <li className="collection-item">Address : {this.state.details.address}</li>
                    <li className="collection-item">ID : {this.state.details.id}</li>
                </ul>
                <Link className="btn" to={`/meetups/edit/${this.state.details.id}`} >Edit</Link>
                <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
            </div>
        )
    }
}
export default MeetupDetails;
