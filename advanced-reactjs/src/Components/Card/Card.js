import React, { useContext } from "react"
import { ThemesContext } from "../Theme/Theme"
import Form from "../Form/Form"

function Card() {
    const theme = useContext(ThemesContext)
    console.log('theme:valores', theme)
    return (
        <div style={{padding: '50px'}}>
            <Form />
            <button style={{background: theme.background, color: theme.color}}>Card Button</button>
        </div>
    )
}

export default Card