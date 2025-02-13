import * as React from "react"
import { SVGProps } from "react"

export const PendoLogomark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={20}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#pendo-logomark-a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.548 9.894h9.861v9.642l9.861-9.642V.252h-9.86L.547 9.894Z"
        fill="#FF4876"
      />
    </g>
    <defs>
      <clipPath id="pendo-logomark-a">
        <path fill="currentColor" transform="translate(.5)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
