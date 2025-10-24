/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 37.7 29.07"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#a47764"}
        d={
          "m23.8 29.07-.95-1.47c6.53-4.28 9.79-8.57 9.79-12.85 0-2.18-.95-3.44-2.84-3.79l-4.42 4.11c-1.4-.49-2.69-1.39-3.84-2.69-1.16-1.3-1.74-2.97-1.74-5s.81-3.77 2.42-5.21S25.96.01 28.59.01 33.4.9 35.12 2.7c1.72 1.79 2.58 4.27 2.58 7.42 0 6.88-4.63 13.2-13.9 18.96Zm-19.8 0-.95-1.47c6.53-4.28 9.79-8.57 9.79-12.85 0-2.18-.95-3.44-2.84-3.79l-4.42 4.11c-1.4-.49-2.69-1.39-3.84-2.69C.58 11.08 0 9.41 0 7.38S.81 3.6 2.42 2.16C4.04.72 6.16 0 8.79 0s4.81.89 6.53 2.69c1.72 1.79 2.58 4.27 2.58 7.42 0 6.88-4.63 13.2-13.9 18.96"
        }
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
