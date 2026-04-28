import React from "react";

const Article = ({title, date, preview}) =>{
    return (<>
        <article></article>
        <h1>{title}</h1>
        <small>{date}</small>
        <p>{preview}</p>
        </>
    )

}

export default Article;