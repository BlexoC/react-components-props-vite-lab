import React from "react";

const Article = ({title, date, preview}) =>{
    return (<>
        <article></article>
        <h3>{title}</h3>
        <small>{date}January 1, 1970</small>
        <p>{preview}</p>
        </>
    )

}

export default Article;