import React, { useContext, useState } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import { Container } from './styles'

interface Props{
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)
  // const [checked, setChecked] = useState(false)

  // function handleChecked(){
  //   setChecked(!checked)
  // }

  return (
    <Container>
      Hello World
      <Switch 
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.2, colors.primary)}
        onColor={shade(0.2, colors.secundary)}
      /> 
    </Container>
  )
}

export default Header;