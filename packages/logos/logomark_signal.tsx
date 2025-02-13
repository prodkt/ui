import * as React from "react"
import { SVGProps } from "react"

export const SignalLogomark = ({
  color = "slate",
  ...props
}: { color?: string } & SVGProps<SVGSVGElement>) => (
  <svg
    width={156}
    height={161}
    viewBox="0 0 156 161"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M92.918 115.291c0 2.894-2.976 4.833-5.624 3.663l-75.527-33.37a18.512 18.512 0 0 1-11.03-16.93c0-13.378 13.755-22.338 25.99-16.932l63.805 28.191a4.005 4.005 0 0 1 2.386 3.664v31.714Z"
      fill="url(#signal-logomark-a)"
      fillOpacity={0.5}
    />
    <path
      d="M92.918 115.291c0 2.894-2.976 4.833-5.624 3.663l-75.527-33.37a18.512 18.512 0 0 1-11.03-16.93c0-13.378 13.755-22.338 25.99-16.932l63.805 28.191a4.005 4.005 0 0 1 2.386 3.664v31.714Z"
      fill="url(#signal-logomark-b)"
    />
    <path
      d="M92.918 115.291c0 2.894-2.976 4.833-5.624 3.663l-75.527-33.37a18.512 18.512 0 0 1-11.03-16.93c0-13.378 13.755-22.338 25.99-16.932l63.805 28.191a4.005 4.005 0 0 1 2.386 3.664v31.714Z"
      stroke={`var(--${color}-11)`}
      strokeOpacity={0.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M92.918 6.172c0-2.894-2.976-4.833-5.624-3.663l-75.527 33.37a18.512 18.512 0 0 0-11.03 16.93v16.233c0 5.735 5.899 9.577 11.144 7.259L90.53 41.55a4.005 4.005 0 0 0 2.387-3.664V6.172Z"
      fill="url(#signal-logomark-c)"
      stroke={`var(--${color}-11)`}
      strokeOpacity={0.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M62.578 153.876c0 2.894 2.976 4.833 5.624 3.663l75.527-33.37a18.51 18.51 0 0 0 11.03-16.931c0-13.377-13.755-22.337-25.991-16.93l-63.803 28.191a4.004 4.004 0 0 0-2.387 3.663v31.714Z"
      fill="url(#signal-logomark-d)"
      fillOpacity={0.5}
    />
    <path
      d="M62.578 153.876c0 2.894 2.976 4.833 5.624 3.663l75.527-33.37a18.51 18.51 0 0 0 11.03-16.931c0-13.377-13.755-22.337-25.991-16.93l-63.803 28.191a4.004 4.004 0 0 0-2.387 3.663v31.714Z"
      fill="url(#signal-logomark-e)"
    />
    <path
      d="M62.578 153.876c0 2.894 2.976 4.833 5.624 3.663l75.527-33.37a18.51 18.51 0 0 0 11.03-16.931c0-13.377-13.755-22.337-25.991-16.93l-63.803 28.191a4.004 4.004 0 0 0-2.387 3.663v31.714Z"
      stroke={`var(--${color}-11)`}
      strokeOpacity={0.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M62.578 44.757c0-2.894 2.976-4.833 5.624-3.663l75.527 33.37a18.512 18.512 0 0 1 11.03 16.931v16.232c0 5.736-5.899 9.577-11.143 7.259L64.964 80.135a4.005 4.005 0 0 1-2.386-3.663V44.757Z"
      fill="url(#signal-logomark-f)"
      stroke={`var(--${color}-11)`}
      strokeOpacity={0.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="signal-logomark-a"
        x1={0.737}
        y1={85.28}
        x2={91.789}
        y2={76.643}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={`var(--${color}-4`} stopOpacity={0} />
        <stop offset={1} stopColor={`var(--${color}-4`} />
      </linearGradient>
      <linearGradient
        id="signal-logomark-b"
        x1={92.637}
        y1={50.123}
        x2={0.737}
        y2={50.123}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={`var(--${color}-11)`} stopOpacity={0} />
        <stop offset={1} stopColor={`var(--${color}-11)`} />
      </linearGradient>
      <linearGradient
        id="signal-logomark-c"
        x1={0.737}
        y1={37.916}
        x2={92.225}
        y2={35.152}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.661} stopColor={`var(--${color}-11)`} />
        <stop offset={1} stopColor={`var(--${color}-11)`} stopOpacity={0.25} />
      </linearGradient>
      <linearGradient
        id="signal-logomark-d"
        x1={154.759}
        y1={123.865}
        x2={63.707}
        y2={115.229}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={`var(--${color}-4`} stopOpacity={0} />
        <stop offset={1} stopColor={`var(--${color}-4`} />
      </linearGradient>
      <linearGradient
        id="signal-logomark-e"
        x1={62.859}
        y1={88.708}
        x2={154.759}
        y2={88.708}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={`var(--${color}-11)`} stopOpacity={0} />
        <stop offset={1} stopColor={`var(--${color}-11)`} />
      </linearGradient>
      <linearGradient
        id="signal-logomark-f"
        x1={154.759}
        y1={76.501}
        x2={63.271}
        y2={73.738}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.661} stopColor={`var(--${color}-11)`} />
        <stop offset={1} stopColor={`var(--${color}-11)`} stopOpacity={0.25} />
      </linearGradient>
    </defs>
  </svg>
)
