import './App.css';
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import * as firebase from './firebase';

const Vote = (props) => {
    const [voteDataOptions, setVoteDataOptions] = useState();
    const [voteDataFields, setVoteDataFields] = useState();

    useEffect(() => {
        (async () => {
            const dataShell = await firebase.getVotesList();
            const data = dataShell.data();
            console.log(data.fields);
            setVoteDataFields(data.fields);
            setVoteDataOptions(data.options);
        })()
    }, []);

    return (
        <div>
            <h3>Bist du diesen Mittwoch dabei?</h3>
            {voteDataFields && voteDataFields.map((item) => (
                <div>{item}</div>
            ))
            }
        </div>
    )
}

export default Vote;