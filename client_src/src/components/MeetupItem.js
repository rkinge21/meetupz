import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MeetupItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meetups_arr_item:props.item
        }
    }

    render() {
        return (
            <li className="collection-item">
                <Link to={`/meetups/${this.state.meetups_arr_item.id}`} >
                    {this.state.meetups_arr_item.name}
                </Link>
            </li>
        )
    }
}
export default MeetupItem;
