import { useEffect, useState } from "react";
import Card from "../Card/Card";
import ContentContainer from "../ContentContainer/ContentContainer";
import { Post } from "../interfaces/interfaces";

interface PostArray {
    categories: Post[];
}

const AllPosts: React.FC = () => {
    const [postData, setPostData] = useState<PostArray | null>(null)

    //useEffect(() => { function call when compoent is mounted }, [dependency array])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(data => setPostData(data))
        .catch(
            // handle errors
        )
    }, [])

    return (
        <ContentContainer>
            {postData ? (
                postData.categories.map((post) => <Card key={post.idCategory} data={post}/>)
            ) : ( <div>loading ...</div> )}
        </ContentContainer>
    )
}

export default AllPosts