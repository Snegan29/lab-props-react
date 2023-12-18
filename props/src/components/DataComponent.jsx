import React from "react"
import ReactDOM from "react-dom"

export default function image(props) {
    return (
            < div className="image" >
                <img src={props.img} />
            </div >
        )
    }