import LogoPorto from '../../../assets/portoicone-header.png'
import Dropdown from '../../components/MenuNav/DropDown'
import { StyledHeader } from './Header.style'
import { StyledDivHeader } from './Header.style'
import { StyledInputHeader } from './Header.style'
import { StyledImgPorto } from './Header.style'

interface InputProps{
    RemoverInput?: boolean
}

export const Header = ({RemoverInput}: InputProps) => {

    return (
            <StyledHeader>
            <StyledDivHeader>
                <StyledImgPorto src={LogoPorto.src} alt="Logo da Porto Seguro" />
                <StyledInputHeader type="search" name="input-header" id="input-header" placeholder='Digite aqui o que procura' RemoverInput = {RemoverInput}/>
                    <Dropdown />
            </StyledDivHeader>
            </StyledHeader>
    )
}