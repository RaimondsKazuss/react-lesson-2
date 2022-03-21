import styled from "styled-components"
import { Post } from "../interfaces/interfaces";
import { Link, useParams } from "react-router-dom";

const StyledCard = styled(Link)`
    width: 19rem;
    height: 19rem;
    text-align: center;
    padding: 1rem;
`

const Image = styled.img`
    max-width: 16rem;
`

const Description = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`

const Card: React.FC<{data: Post}> = ({data}) => {
    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = data;
    
    return (
        <StyledCard onClick={():void => {}} to={`/categories/${strCategory.toLowerCase()}`}>
            <div>{strCategory}</div>
            <Image src={strCategoryThumb} alt={strCategory}/>
            <Description>{strCategoryDescription}</Description>
        </StyledCard>
    )
}

export default Card