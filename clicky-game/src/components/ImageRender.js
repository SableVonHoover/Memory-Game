import React from "react";

var divPic = (imgUrl) => {
  return { backgroundImage: `url(${imgUrl})` };
};

function ImageRender(props) {
  return (
    <div className="click-image"
      id={props.id}
      style={divPic(props.image)}
      onClick={() => props.imgClick(props.id)} >
    </div>
  );
}

export default ImageRender;