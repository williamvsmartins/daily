import { BsFillPlusCircleFill, BsFillPenFill } from "react-icons/bs";
import { Container, Content, LogoContainer, LogoIcon, Logo, OptionsContainer, Value, Coins, IconCoin, AddButton, Avatar} from './styles'

function Header({user}) {


    return (
        <Container>
            <Content>
                <LogoContainer>
                    <LogoIcon>

                    </LogoIcon>
                    <Logo>
                        Daily
                    </Logo>
                </LogoContainer>
                <OptionsContainer>
                    <Value>
                        <Coins>
                            {user?.value}
                        </Coins>
                        <IconCoin>
                            <BsFillPenFill />
                        </IconCoin>
                        <AddButton>
                           <BsFillPlusCircleFill />
                        </AddButton>
                    </Value>
                    <Avatar>
                        <img src={user?.picture} referrerpolicy="no-referrer"/>
                    </Avatar>
                </OptionsContainer>
            </Content>
        </Container>
    )
}

export default Header;