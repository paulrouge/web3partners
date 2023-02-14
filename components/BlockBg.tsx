import React from 'react'

type Props = {
    width: string,
    height: string,
    position_top: number,
    position_right: number,
    z_index: number,
}

const BlockBg = (props: Props) => {
    const web3blue = "#0000FF"

    return (
    <div style={{
        backgroundColor: "#e5e5f7",
        opacity: 1,
        background: `linear-gradient(135deg, ${web3blue}55 25%, transparent 25%) -40px 0/ 80px 80px, linear-gradient(225deg, ${web3blue} 25%, transparent 25%) -40px 0/ 80px 80px, linear-gradient(315deg, ${web3blue}55 25%, transparent 25%) 0px 0/ 80px 80px, linear-gradient(45deg, ${web3blue} 25%, #e5e5f7 25%) 0px 0/ 80px 80px`,
        width: props.width,
        height: props.height,
        position: "absolute",
        top: props.position_top,
        right: props.position_right,
        zIndex: props.z_index,
    }}>
    </div>
  )
}

export default BlockBg