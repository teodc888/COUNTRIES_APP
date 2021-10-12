import "./landingPage.css";
import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import {AllCountries} from "../../redux/actions"

function LandingPage (){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AllCountries())
    }, [])
    return(
        <>
            <button>Bienvenido</button>
        </>
    )
}

export default LandingPage;