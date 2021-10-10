import React from 'react'
import { Nav, LogoContainer,Logo, TextLogo, List ,ListItem, Profile, ItemLink} from './style'

import logo from '../../assets/img/Logo.png'

const NavBar=({photoUser})=> {
    return (
        <Nav>
            <LogoContainer>
                <Logo src={logo}/>
                <TextLogo>ElderHand</TextLogo>
            </LogoContainer>

            <List>
                <ListItem><ItemLink>Clases</ItemLink></ListItem>
                <ListItem><ItemLink>Comunidad</ItemLink></ListItem>
                <ListItem><ItemLink>Preguntas</ItemLink></ListItem>
                <ListItem><ItemLink><Profile src={photoUser}/></ItemLink></ListItem>
            </List>

        </Nav>
    )
}

export default NavBar
