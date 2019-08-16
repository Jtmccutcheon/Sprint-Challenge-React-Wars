import React from "react";
import styled from "styled-components";

function StarWarsPeeps(props) {
    // console.log(props);



    const StyledDiv = styled.div`
        width: 28%;
        margin-top: 5rem;
        background-image: url('https://images.unsplash.com/photo-1533613220915-609f661a6fe1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80');
        background-position: center;
        /* position:fixed; */
        border-radius: .6rem;
        box-shadow: 1px 1px 5px #fff;

            h1 {
                color: #B4BDCC;
                text-shadow: 1px 1px 5px #fff;
                text-align: center;
            }
            p {
                /* font-size: 5rem; */
                text-transform: uppercase;
                text-align:left;
                color: white;
                margin: 0 0 1rem 1rem;
                font-family: Star Jedi, arial;

            }
    `;

    return (

        <StyledDiv>
            <h1>{props.name}</h1>
            <p>Gender: {props.gender}</p>
            <p>Hair Color: {props.haircolor}</p>
            <p>Eye Color:{props.eyecolor}</p>
            <p>Height (in): {props.height}</p>
            <p>Weight (mass): {props.mass}</p>
        </StyledDiv>
    );
}

export default StarWarsPeeps;
