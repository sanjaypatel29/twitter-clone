import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import Home from "./Home";

export default function PrivateRoutes() {

    const auth = useSelector(state => state.auth.auth)
    console.log(auth);
    return (
        <>
            {
                !auth ? (
                    <Redirect to="/" />
                ) : (
                        <switch>
                            <Route path="/home" render={() => <Home />} />
                        </switch>
                    )
            }

        </>
    );

};
