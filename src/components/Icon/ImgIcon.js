import React from "react";
import Image from "../Image";

function ImgIcon({ children, src = "", alt = "", className = "" }) {
	return <Image className={className} src={src} alt={alt} />;
}
export default ImgIcon;
