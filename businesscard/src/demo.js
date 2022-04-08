import React from "react";
import { Redirect } from "react-router-dom"

export default function Demo({auth}){
    if (!auth){
        return <Redirect to="/" ></Redirect>
    }
    return(
        <h1>Demo</h1>
    )
}