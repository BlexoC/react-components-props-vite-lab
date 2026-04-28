import { text } from "node:stream/consumers";
import React from "react";

const About = ({text}) =>{
    return (<>
        <aside>
            <img src="https://via.placeholder.com/215" alt ="blog logo"></img>
            <p>{text}</p>
        </aside>

        </>
    )

}

export default About;