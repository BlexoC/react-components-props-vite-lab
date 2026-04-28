import React from "react";

const ArticleList = (prop) =>{
    return (<>
        <main>
           {prop.map(article => (

            <Article
                preview={prop.preview}
                date={prop.date}
                title={prop.title}
            />
           ))}
        </main>
     </>
    )

}

export default ArticleList;