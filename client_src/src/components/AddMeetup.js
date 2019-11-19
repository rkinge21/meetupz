import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddMeetup extends Component {

    addMeetupFunction(newMeetup) {
        console.log(newMeetup); // This will print values on console of the Name,City and Address field
        axios.request({
            method: 'post',
            url: 'http://localhost:1991/api/meetups',
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
        this.addMeetupFunction(newMeetup)
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/" >Back</Link>
                <h3>Add Meetup User Details</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref="name" />
                        <label htmlFor="name" >Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="city" ref="city" />
                        <label htmlFor="city" >City</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="address" ref="address" />
                        <label htmlFor="address" >Address</label>
                    </div>
                    <input type="submit" value="save" className="btn" />
                </form>
            </div>
        )
    }
}
export default AddMeetup;
