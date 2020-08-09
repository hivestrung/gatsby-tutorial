import React from "react"

import Container from "../components/container"
import User from "../components/user"


export default function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
      <User
        username="hivestrung"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="hi i am hivestrung i am very high strung"
      />
      <User
        username="not-hivestrung"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="i am not"
      />
    </Container>
  )
}
