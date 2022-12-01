import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="139" cy="141" r="138"/>
    <rect x="0" y="298" rx="10" ry="10" width="280" height="21"/>
    <rect x="1" y="341" rx="10" ry="10" width="280" height="74"/>
    <rect x="0" y="441" rx="10" ry="10" width="95" height="30"/>
    <rect x="144" y="434" rx="25" ry="25" width="136" height="50"/>
    <rect x="213" y="485" rx="0" ry="0" width="1" height="1"/>
  </ContentLoader>
)

export default Skeleton

