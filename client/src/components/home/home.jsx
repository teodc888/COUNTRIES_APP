import React from "react";
import { useSelector } from "react-redux";


export function Home() {
    const country = useSelector(state => state.country);
    return (
    <>
        {
        country.length &&
        country.map(element => {
            return (
            <>

                <h1>{element.name}</h1>
                <p>{element.continente}</p>
                <img src={element.imagen} />

        

            </>
            )
        })
        }


    </>
    );
}

export default Home;