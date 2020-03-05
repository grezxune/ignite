import React from "react"

export default () => {
  return (
    <footer
      style={{
        width: "100%",
        display: "flex",
        background: `#580D7D`,
        color: "white",
        padding: 12,
      }}
    >
      © {new Date().getFullYear()}, Stevens Point Ignite Young Professionals
    </footer>
  )
}
