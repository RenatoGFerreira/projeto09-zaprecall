import { Link } from "react-router-dom"
import logo from "../../assets/img/logo.png"
import { LogoContainer } from "./StyledHeader"

export default function Header() {
    return (
        <LogoContainer>
            <Link to="/">
                <img src={logo} alt="logo do Zaprecall" />
                <h1>ZapRecall</h1>
            </Link>
        </LogoContainer>
    )
}
