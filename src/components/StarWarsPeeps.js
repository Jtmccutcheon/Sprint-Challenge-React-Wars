import React from "react";
import styled from "styled-components";

function StarWarsPeeps(props) {
    // console.log(props);
    const StyledDiv = styled.div`
        /* display: flex; */
        /* flex-direction: column; */
        /* justify-content: flex-start; */
        /* background-color: red; */

        div {
            border: 2px solid blue;

            h1 {
                color: #443e3e;
                text-shadow: 1px 1px 5px #fff;
            }
            p {
                /* font-size: 5rem; */
                text-transform: uppercase;
            }
        }
    `;



    return (
        <div>
            <StyledDiv>
                <div>
                    <h1>{props.name}</h1>
                    <div>
                        <p>Gener: {props.gender}</p>
                        <p>Hair Color: {props.haircolor}</p>
                        <p>Eye Color:{props.eyecolor}</p>
                        <p>Height (in): {props.height}</p>
                        <p>Weight (mass): {props.mass}</p>
                    </div>
                </div>



            </StyledDiv>
        </div>
    );
}

export default StarWarsPeeps;
