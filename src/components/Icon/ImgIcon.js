import React from "react";

function ImgIcon({ children, src = "", alt = "", classNames = "" }) {
	return <img classNames={classNames} src={src} alt={alt} />;
}
export default ImgIcon;
