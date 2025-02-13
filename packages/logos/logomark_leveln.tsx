import * as React from "react"
import { SVGProps } from "react"

export const LevelnLogomark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={162}
    height={162}
    viewBox="0 0 162 162"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#leveln-logomark-a)">
      <path
        d="M123.33 150.028c23.544-12.236 37.67-37.022 37.67-63.69V21.08C161 9.784 152.21 1 140.909 1H89.113C41.084 1 4.043 33.002 1.217 75.357c-4.395 60.552 58.702 107.927 122.113 74.671Z"
        fill="url(#leveln-logomark-b)"
      />
    </g>
    <path
      d="M123.33 150.028c23.544-12.236 37.67-37.022 37.67-63.69V21.08C161 9.784 152.21 1 140.909 1H89.113C41.084 1 4.043 33.002 1.217 75.357c-4.395 60.552 58.702 107.927 122.113 74.671Z"
      stroke="var(--ruby-9)"
    />
    <defs>
      <radialGradient
        id="leveln-logomark-b"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(160.09956 -160.00626 107.84688 107.90977 .9 161.006)"
      >
        <stop stopColor="var(--ruby-11)" stopOpacity={0.996} />
        <stop offset={0.267} stopColor="var(--ruby-12)" />
        <stop offset={0.804} stopColor="var(--ruby-9)" />
      </radialGradient>
      <filter
        id="leveln-logomark-a"
        x={0.5}
        y={-9.5}
        width={171}
        height={171.001}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={10} dy={-10} />
        <feGaussianBlur stdDeviation={16} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0.92549 0 0 0 0 0.352941 0 0 0 0 0.447059 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_434_18643" />
      </filter>
    </defs>
  </svg>
)
