import React from "react";

function SvgIcon({ children, src = "", alt = "", classNames = "" }) {
	return <img classNames={classNames} src={src} alt={alt} />;
}
export default SvgIcon;
