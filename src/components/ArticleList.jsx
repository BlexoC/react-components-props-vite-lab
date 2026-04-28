import React from "react";

const Article =['date', 'title', 'id', 'preview']

function ArticleList ({props}){
    return (
        <main>
           {props.map(article => (

            <Article
            key={props.id}
            title={props.title}
            date={props.date}
            preview={props.preview}
             />

            
           ))}
        </main>
    )

}

export default ArticleList;