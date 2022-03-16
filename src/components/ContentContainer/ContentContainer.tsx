import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    max-width: 64rem;
    margin: 6rem auto;
    border: 1px solid #333;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`

const ContentContainer:React.FC = ({children}) => {
    return <Container>{children}</Container>
}

export default ContentContainer