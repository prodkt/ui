import * as React from "react"
import { SVGProps } from "react"

export const CraftLogomark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={120}
    height={161}
    viewBox="0 0 120 161"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#craft-logomark-a)">
      <path
        d="M6.786 133.738c-8.446-17.182-8.446-39.999.563-67.604C20.863 25.006 51.55.5 82.798.5c19.424 0 34.063 11.83 36.315 28.45 2.816 21.408-10.979 35.21-28.433 35.21-10.698 0-19.144-7.04-22.523-15.21l14.078-7.043c1.69 3.944 6.193 4.789 9.852 4.225 5.35-.844 8.728-6.477 7.882-13.24-1.126-7.886-7.319-14.083-18.58-14.083-20.55 0-43.072 21.69-54.052 50.14-7.32 19.155-8.727 38.593-4.223 52.114 4.505 13.522 15.203 21.126 28.435 21.126 22.24 0 40.538-17.745 46.45-34.366l16.328 3.945C100.815 145.57 74.915 160.5 50.703 160.5c-14.92 0-34.063-6.762-43.917-26.762Z"
        fill="url(#craft-logomark-b)"
      />
    </g>
    <defs>
      <linearGradient
        id="craft-logomark-b"
        x1={60}
        y1={0.5}
        x2={60}
        y2={160.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#841E30" />
        <stop offset={1} stopColor="#FF002E" />
      </linearGradient>
      <filter
        id="craft-logomark-a"
        x={0.521}
        y={0.5}
        width={118.959}
        height={161.784}
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
        <feOffset dy={1.784} />
        <feGaussianBlur stdDeviation={1.784} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0" />
        <feBlend in2="shape" result="effect1_innerShadow_434_18640" />
      </filter>
    </defs>
  </svg>
)
