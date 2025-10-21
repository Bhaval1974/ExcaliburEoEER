/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckSvgIcon(props: CheckSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      data-name={"Layer 2"}
      viewBox={"0 0 42.12 42.12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <symbol id={"a"} viewBox={"0 0 49.27 49.27"}>
          <g data-name={"Isolation Mode"}>
            <circle
              cx={"24.63"}
              cy={"24.63"}
              r={"24.13"}
              fill={"#0078a6"}
              stroke={"#fff"}
              strokeMiterlimit={"10"}
            ></circle>

            <path
              fill={"#fff"}
              d={
                "M21.86 33.81c-.53 0-1.04-.21-1.41-.59l-5.86-5.86a.284.284 0 0 1 0-.4l2.43-2.43c.11-.11.29-.11.4 0l4.44 4.44 11.55-11.55c.11-.11.29-.11.4 0l2.43 2.43c.11.11.11.29 0 .4L23.28 33.21c-.38.38-.88.59-1.41.59Z"
              }
            ></path>
          </g>
        </symbol>
      </defs>

      <use
        xlinkHref={"#a"}
        width={"49.27"}
        height={"49.27"}
        transform={"scale(.85)"}
      ></use>
    </svg>
  );
}

export default CheckSvgIcon;
/* prettier-ignore-end */
