import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, SidebarContainer, ContentContainer} from './styles'

function Layout ({ children }) {
    return (
        <>
            <Header></Header>
            <Container>
                <ContentContainer>
                    {children}
                </ContentContainer>
                 <SidebarContainer>
                    <Sidebar></Sidebar>
                </SidebarContainer>
            </Container>
        </>
    );
}

export default Layout;