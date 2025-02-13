import * as React from "react"
import { SVGProps } from "react"

export const OlioLogomark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={160}
    height={160}
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#olio-logomark-a)">
      <path
        d="M137.5 137.544C122.5 152.515 103.333 160 80 160s-42.5-7.485-57.5-22.456C7.5 122.386 0 103.298 0 80.281c0-23.205 7.5-42.386 22.5-57.544C37.5 7.579 56.667 0 80 0s42.5 7.579 57.5 22.737c15 15.158 22.5 34.339 22.5 57.544 0 23.017-7.5 42.105-22.5 57.263Zm-86.944-26.105c7.222 8.234 16.944 12.35 29.166 12.35 12.222 0 22.037-4.116 29.445-12.35 7.407-8.234 11.111-18.62 11.111-31.158 0-12.726-3.704-23.205-11.111-31.439-7.408-8.421-17.223-12.631-29.445-12.631-12.222 0-21.944 4.21-29.166 12.631-7.223 8.421-10.834 18.9-10.834 31.439 0 12.538 3.611 22.924 10.834 31.158Z"
        fill="url(#olio-logomark-b)"
      />
    </g>
    <path
      d="M135.728 135.78C121.247 150.23 102.742 157.5 80 157.5c-22.742 0-41.247-7.27-55.728-21.72C9.777 121.131 2.5 102.695 2.5 80.28c0-22.61 7.283-41.138 21.777-55.785C38.761 9.86 57.265 2.5 80 2.5s41.239 7.359 55.723 21.995C150.217 39.142 157.5 57.671 157.5 80.281c0 22.414-7.277 40.849-21.772 55.499Zm-87.052-22.693c7.755 8.842 18.197 13.202 31.046 13.202 12.85 0 23.37-4.359 31.303-13.178 7.876-8.754 11.753-19.762 11.753-32.83 0-13.24-3.868-24.341-11.743-33.1-7.927-9.006-18.45-13.47-31.313-13.47-12.868 0-23.315 4.468-31.064 13.504-7.662 8.933-11.436 20.013-11.436 33.066 0 13.05 3.774 24.05 11.454 32.806Z"
      stroke="url(#olio-logomark-b)"
      strokeWidth={1}
    />
    <defs>
      <linearGradient
        id="olio-logomark-b"
        x1={80}
        y1={0}
        x2={80}
        y2={160}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" stopOpacity={0.9} />
        <stop offset={1} stopColor="currentColor" stopOpacity={0.5} />
      </linearGradient>
      <filter
        id="olio-logomark-a"
        x={0}
        y={0}
        width={160}
        height={161.005}
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
        <feOffset dy={1.005} />
        <feGaussianBlur stdDeviation={10.005} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0" />
        <feBlend in2="shape" result="effect1_innerShadow_248_348" />
      </filter>
    </defs>
  </svg>
)
