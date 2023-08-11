import React from "react";
import { Image } from "../Image";

function SvgIcon({ children, src = "", alt = "", className = "" }) {
	return <Image className={className} src={src} alt={alt} />;
}
export default SvgIcon;
