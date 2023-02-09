import logo from "../../assets/img/logo.png"
import { LogoContainer } from "./StyledHeader"

export default function Header(){
    return(
        <LogoContainer>
            <img src={logo} alt="logo do Zaprecall" />
            <h1>ZapRecall</h1>
        </LogoContainer>
    )
}
