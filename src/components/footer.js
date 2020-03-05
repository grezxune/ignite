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
      © {new Date().getFullYear()}, Built by
      <a
        href="https://www.tommytreb.com"
        style={{ marginLeft: 5, color: "white" }}
      >
        Tommy Treb
      </a>
    </footer>
  )
}
