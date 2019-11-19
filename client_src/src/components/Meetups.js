import React, { Component } from 'react';
import axios from 'axios';
import MeetupItem from './MeetupItem';

class Meetups extends Component{
    constructor() {
        super();
        this.state = {
            meetups_arr: []
        }
    }
    UNSAFE_componentWillMount () {
        this.getMeetups();
    }

    getMeetups() {
        axios.get('http://localhost:1991/api/meetups')
            .then(response => {
                //console.log(response.data);
                this.setState({ meetups_arr: response.data }, () => {
                    //console.log(this.state);
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        const meetupItems = this.state.meetups_arr.map((meetup_key, index_val) => {
            return (
                //<li className="collection-item">{meetup_key.name}</li>
                <MeetupItem key={meetup_key.id} item={meetup_key} />
            )
        })
        return (
            <div>
                <h1>Meetups</h1>  
                <ul className="collection"> {meetupItems}</ul>
            </div>
        );
    }
}

export default Meetups;
