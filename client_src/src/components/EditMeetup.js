import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditMeetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name:'',
            city:'',
            address:''
        }
        this.handleInputChnage = this.handleInputChnage.bind(this);
    }
    UNSAFE_componentWillMount() {
        this.getMeetupDetails();
    }
    getMeetupDetails() {
        let meetupID = this.props.match.params.id;
        axios.get(`http://localhost:1991/api/meetups/${meetupID}`)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    city: response.data.city,
                    address: response.data.address
                }, () => {
                    console.log(this.state);
                });
            })
            .catch(err => console.log(err));
    }

    editMeetupFunction(newMeetup) {
        console.log(newMeetup); // This will print values on console of the Name,City and Address field
        axios.request({
            method: 'put',
            url: `http://localhost:1991/api/meetups/${this.state.id}`,
            data: newMeetup
        }).then(response => {
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    onSubmit(e) {
        //console.log(this.refs.name.value);  // This will print values on console of the Name field
        const newMeetup = {
            name: this.refs.name.value,
            city: this.refs.city.value,
            address: this.refs.address.value
        }
        this.editMeetupFunction(newMeetup)
        e.preventDefault();
    }
    handleInputChnage(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/" >Back</Link>
                <h3>Edit Meetup User Details</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref="name" value={this.state.name}
                            onChange={this.handleInputChnage} />
                        <label htmlFor="name" >Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="city" ref="city" value={this.state.city}
                            onChange={this.handleInputChnage} />
                        <label htmlFor="city" >City</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="address" ref="address" value={this.state.address}
                            onChange={this.handleInputChnage} />
                        <label htmlFor="address" >Address</label>
                    </div>
                    <input type="submit" value="save" className="btn" />
                </form>
            </div>
        )
    }
}
export default EditMeetup;
