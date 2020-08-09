import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/contact/">Contact</Link>
      <p></p>
      <a href="https://www.facebook.com">Facebook.com </a>
      <Header hdrTxt="some words that ARE seen" />
      <Header hdrTxt="It's actually really cool" />
      <p>Such wow. Very very React.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
