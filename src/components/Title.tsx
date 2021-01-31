import React, {memo} from "react"
import styled from "styled-components"
import {FaCode} from "react-icons/fa"

type I_TITULO = {
  label: string
}

const SkillContainer: React.FC<I_TITULO> = (props) => {
  return (
    <>
      <TitleDash>
        <FaCode size={50} />
        <h1>{props.label}</h1>
      </TitleDash>
    </>
  )
}

const TitleDash = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: 4rem;
  svg {
    color: ${props => props.theme.dash.titulo}
  }
  h1 {
    color: ${props => props.theme.dash.titulo};
    margin-left: 30px;
  }
  @media(max-width: 920px) {
    margin-bottom: 1rem;
  }
`

export default memo(SkillContainer)