import { Link } from "react-router-dom"
import styled from "styled-components"

const NavBar = styled.header`
    //usually 1rem = 16px
    position: absolute;
    height: 4rem;
    padding: 1rem;
    top: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`

const Logo = styled.a`
    width: 2rem;
    height: 2rem;
    display: block;
    background: #DBE2EF url('https://www.themealdb.com/images/category/beef.png') center/contain no-repeat;
`

const NavLink = styled(Link)`
    min-width: 4rem;
    padding: 0 0 0 1rem;
    text-decoration: none;

    &:visited {
        color: #112D4E;
    }
`

const ButtonLink = styled(NavLink)`
    width: 2rem;
    height: 2rem;
    text-align: center;
`

const Nav = () => {
    return (
        <NavBar>
            <Logo href="/"/>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/all-posts">All posts</NavLink>
            <ButtonLink to="/create">+</ButtonLink>
        </NavBar>
    )
}

export default Nav