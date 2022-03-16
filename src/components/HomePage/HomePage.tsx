import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Post } from "../interfaces/interfaces";

import ContentContainer from "../ContentContainer/ContentContainer"

const HomePage = () => {
    const [postData, setPostData] = useState<Post[] | null>(null)

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(data => 
            setPostData(data.categories.slice(0,3))
            )
        .catch(
            // handle errors
        )
    }, [])

    return (
        <ContentContainer>
            {postData ? (
                postData.map((post: Post) => {
                    return (
                        <Card key={post.idCategory} data={post}/>
                    )
                })
            ) : ( <div>loading ...</div> )}
        </ContentContainer>
    )
}

export default HomePage