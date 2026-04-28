import { text } from "node:stream/consumers";
import React from "react";

const About = ({about, imageUrl, name}) =>{
    return (<>
        <aside>
            <img src="https://via.placeholder.com/215" alt="blog logo" />
            <p>{about}</p>
        </aside>

        </>
    )

}

export default About;