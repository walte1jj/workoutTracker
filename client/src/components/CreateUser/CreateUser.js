import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CreateUser() {
    const [Username, setUsername] = useState([])

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    const onChangeUsername = ((e) => {
        useState({
            username: e.target.value
        })
    })

    const onSubmit = ((e) => {
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => alert(res.data))
            .catch(err => console.error(err))

        useState({
            username: ""
        })
    })
    
}
