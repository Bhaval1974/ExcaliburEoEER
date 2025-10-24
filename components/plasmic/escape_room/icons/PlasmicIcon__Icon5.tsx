/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
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

      <g fill={"#fff"}>
        <rect
          width={"6.71"}
          height={"24.78"}
          x={"21.34"}
          y={"17.9"}
          rx={".49"}
          ry={".49"}
        ></rect>

        <rect
          width={"6.71"}
          height={"24.78"}
          x={"32.53"}
          y={"17.9"}
          rx={".49"}
          ry={".49"}
        ></rect>
      </g>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
