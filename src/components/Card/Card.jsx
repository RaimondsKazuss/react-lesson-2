import styled from "styled-components"

const StyledCard = styled.div`
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

const Card = ({data}) => {

    return (
        <StyledCard>
            <div>{data.strCategory}</div>
            <Image src={data.strCategoryThumb} alt={data.strCategory}/>
            <Description>{data.strCategoryDescription}</Description>
        </StyledCard>
    )
}

export default Card