import React from "react";

const Article =['date', 'title', 'date']

function ArticleList ({posts}){
    return (
        <main>
           {posts.map(article => (

            <Article
            key={posts}
             />

            
           ))}
        </main>
    )

}

export default ArticleList;