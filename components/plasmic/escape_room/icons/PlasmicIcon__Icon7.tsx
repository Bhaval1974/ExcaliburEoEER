/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      data-name={"Isolation Mode"}
      viewBox={"0 0 35.42 44.25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <symbol id={"a"} viewBox={"0 0 37.24 46.52"}>
          <path
            fill={"#ffcb39"}
            stroke={"#fff"}
            strokeMiterlimit={"10"}
            d={
              "M18.62.5C8.61.5.5 8.61.5 18.62c0 7.94 11.42 21.34 16.13 26.52a2.68 2.68 0 0 0 3.98 0c4.71-5.18 16.13-18.57 16.13-26.52C36.74 8.61 28.62.5 18.62.5Zm0 26.18c-5.1 0-9.24-4.1-9.24-9.21s4.14-9.22 9.24-9.22 9.23 4.14 9.23 9.22-4.14 9.21-9.23 9.21Z"
            }
          ></path>
        </symbol>
      </defs>

      <use
        xlinkHref={"#a"}
        width={"37.24"}
        height={"46.52"}
        transform={"scale(.95)"}
      ></use>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
