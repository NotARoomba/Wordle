import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="error-page-div">
            <p className="error-page-title">404</p>
            <div className="error-page-button"><Link to={'/'} >Home</Link></div>
        </div>
    )
}