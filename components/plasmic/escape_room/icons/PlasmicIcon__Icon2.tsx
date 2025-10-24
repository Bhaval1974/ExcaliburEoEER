/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
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
          "m13.9 0 .95 1.47c-6.53 4.29-9.8 8.57-9.8 12.85 0 2.18.95 3.44 2.84 3.79L12.31 14c1.4.49 2.69 1.39 3.84 2.69 1.16 1.3 1.74 2.97 1.74 5s-.81 3.77-2.42 5.21-3.74 2.16-6.37 2.16-4.81-.89-6.53-2.69C.85 24.58-.01 22.1-.01 18.95 0 12.08 4.63 5.76 13.9 0m19.8 0 .95 1.47c-6.53 4.28-9.79 8.57-9.79 12.85 0 2.18.95 3.44 2.84 3.79L32.12 14c1.4.49 2.69 1.39 3.84 2.69 1.16 1.3 1.74 2.97 1.74 5s-.81 3.77-2.42 5.21c-1.62 1.44-3.74 2.16-6.37 2.16s-4.81-.89-6.53-2.69c-1.72-1.79-2.58-4.27-2.58-7.42 0-6.88 4.63-13.2 13.9-18.96Z"
        }
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
