import * as React from "react"
import { SVGProps } from "react"

export const RadixLogomark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={20}
    viewBox="0 0 15 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#radix-logomark-a)" fill="currentColor">
      <path d="M7.25 19.555c-3.222 0-5.833-2.798-5.833-6.25s2.611-6.25 5.833-6.25v12.5ZM7.25.388H1.417v5.834H7.25V.388ZM11 6.222a2.917 2.917 0 1 0 0-5.834 2.917 2.917 0 0 0 0 5.834Z" />
    </g>
    <defs>
      <clipPath id="radix-logomark-a">
        <path fill="currentColor" transform="translate(.5)" d="M0 0h14v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
