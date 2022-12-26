import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, SidebarContainer, ContentContainer} from './styles'
import { User } from "../../pages/home";

function Layout ({ user, children }) {
    return (
        <>
            <Header user={user}></Header>
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