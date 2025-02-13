import * as React from "react"
import { SVGProps } from "react"

export const LitLogomark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={17}
    height={20}
    viewBox="0 0 17 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#lit-logomark-a)">
      <g clipPath="url(#lit-logomark-b)">
        <path
          d="M8.603.036 4.615 4.024v7.975L8.603 8.01V.036Zm0 7.975v7.975L12.59 12V4.024L8.603 8.01ZM12.59 12v7.975l3.988-3.988V8.011L12.59 12Zm-7.975 0L.628 8.01v7.975l3.987 3.988v-7.975Z"
          fill="currentColor"
        />
      </g>
    </g>
    <defs>
      <clipPath id="lit-logomark-a">
        <path
          fill="currentColor"
          transform="translate(.415)"
          d="M0 0h16.17v20H0z"
        />
      </clipPath>
      <clipPath id="lit-logomark-b">
        <path
          fill="currentColor"
          transform="translate(.415)"
          d="M0 0h16.17v20H0z"
        />
      </clipPath>
    </defs>
  </svg>
)
