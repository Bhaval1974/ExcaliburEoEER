/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Isolation Mode"}
      viewBox={"0 0 60.58 60.58"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"30.29"} cy={"30.29"} r={"30.29"} fill={"#382f2c"}></circle>

      <path
        fill={"#fff"}
        d={
          "M44 18.76v23.07c0 .55-.61.87-1.07.57L25.91 30.87c-.4-.27-.4-.86 0-1.13l17.02-11.53c.45-.31 1.07.02 1.07.57Z"
        }
      ></path>

      <rect
        width={"3.36"}
        height={"24.78"}
        x={"17.74"}
        y={"17.9"}
        fill={"#fff"}
        rx={".49"}
        ry={".49"}
      ></rect>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
