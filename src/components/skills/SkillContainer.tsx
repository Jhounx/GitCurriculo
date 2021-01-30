import React, {memo, useState, useEffect} from "react"
import {Container, StatusBar, StatusBarTitle, Text} from "./styles"
import {IconType} from "react-icons/lib";

export type I_SKILL = {
  tecnologia: string,
  icon: IconType,
  skill: number,
}

const SkillContainer: React.FC<I_SKILL> = (props) => {
  const [width, setWidth] = useState("0");
  useEffect(() => {
    setWidth(String(props.skill));
  }, [props.skill]);
  return (
    <Container>
      <props.icon size={50} />
      <StatusBar>
        <StatusBarTitle>{props.tecnologia}</StatusBarTitle>
        <div id="progressBar">
          <div id="line" style={{width: width + "%"}} />
        </div>
      </StatusBar>
      <Text>{props.skill}%</Text>
    </Container>
  )
}

export default memo(SkillContainer)