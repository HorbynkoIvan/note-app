import React from "react"
import {FormComponent} from "../components/Form";
import {Notes} from "../components/Notes";

export const Home = () => {
    const notes = new Array(3).fill("").map((_, index) => {
        return {id: index, title: `Note ${index +1}`}
    })
    return (
        <>
            <FormComponent/>
            <Notes notes={notes}/>
        </>
    )
}
