/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HotspotSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HotspotSvgIcon(props: HotspotSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      data-name={"Layer 2"}
      viewBox={"0 0 96.23 96.23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <symbol id={"a"} viewBox={"0 0 50.96 50.96"}>
          <path
            fill={"#ffe05c"}
            d={
              "M25.48 50.96C11.43 50.96 0 39.53 0 25.48S11.43 0 25.48 0s25.48 11.43 25.48 25.48-11.43 25.48-25.48 25.48"
            }
            opacity={".2"}
          ></path>

          <path
            fill={"#ffe05c"}
            d={
              "M25.48 40.96C16.94 40.96 10 34.01 10 25.48S16.95 10 25.48 10s15.48 6.95 15.48 15.48-6.95 15.48-15.48 15.48"
            }
            opacity={".5"}
          ></path>

          <circle
            cx={"25.48"}
            cy={"25.48"}
            r={"11.48"}
            fill={"#ffb966"}
            stroke={"#fff"}
            strokeMiterlimit={"10"}
          ></circle>
        </symbol>
      </defs>

      <use
        xlinkHref={"#a"}
        width={"50.96"}
        height={"50.96"}
        transform={"scale(1.89)"}
      ></use>
    </svg>
  );
}

export default HotspotSvgIcon;
/* prettier-ignore-end */
