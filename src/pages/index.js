import React from "react"
import {Link} from "gatsby"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/about/">ABOUT</Link>
      <h1>Hello Shiv!</h1>
      <p>What a wonderful world.</p>
      <img
        src="https://source.unsplash.com/random/800x400"
        alt="https://source.unsplash.com/random/400x200"
      />
    </div>
  )
}
