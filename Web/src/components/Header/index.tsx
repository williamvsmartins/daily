import { BsFillPlusCircleFill, BsFillPenFill } from "react-icons/bs";
import { Container, Content, LogoContainer, LogoIcon, Logo, OptionsContainer, Value, Coins, IconCoin, AddButton, Avatar} from './styles'

function Header() {
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
                            2333
                        </Coins>
                        <IconCoin>
                            <BsFillPenFill />
                        </IconCoin>
                        <AddButton>
                           <BsFillPlusCircleFill />
                        </AddButton>
                    </Value>
                    <Avatar>
                        <img src="data:image/png;base64,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"/>
                    </Avatar>
                </OptionsContainer>
            </Content>
        </Container>
    )
}

export default Header;