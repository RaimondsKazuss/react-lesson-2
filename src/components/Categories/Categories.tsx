import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentContainer from "../ContentContainer/ContentContainer"

interface Category {
    strMeal: string
    strMealThumb: string
    idMeal: string
}

const Categories: React.FC = () => {
    const { categoryName } = useParams()
    const [categoryData, setCategoryData] = useState<Category[] | null>(null)

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
        .then(response => response.json())
        .then(data => setCategoryData(data.meals))
        .catch(
            // handle errors
        )
    }, [])    
    

    return (
        <ContentContainer>
            {categoryData ? (
                categoryData.map((category: Category) => {
                    return (
                        <div key={category.idMeal}>
                            <h3>{category.strMeal}</h3>
                            <img src={category.strMealThumb} alt=""/>
                        </div>
                    )
                })
            ) : ( <div>loading ...</div> )}
        </ContentContainer>
    )
}

export default Categories