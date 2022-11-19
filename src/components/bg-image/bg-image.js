import React from "react"

const BgImage = ({ image, height, children }) => {
  return (
    <div
      className="aaa"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: `${height}`,
      }}
    >
      {children}
    </div>
  )
}

export default BgImage
