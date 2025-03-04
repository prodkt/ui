import * as React from "react"
import type { SVGProps } from "react"
import clsx from "clsx"

export const RestWithoutTextLogomark = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={14}
    viewBox="0 0 16 14"
    fill="none"
    {...props}
    className={clsx("dark:text-gray-100 text-[#273646]", className)}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.24.333a.667.667 0 0 0-.632.456l-.258.772a.332.332 0 0 0-.016.084 2.99 2.99 0 0 0-.323.186.327.327 0 0 0-.072-.024l-.79-.163a.658.658 0 0 0-.704.32l-.423.739a.671.671 0 0 0 .078.775l.535.61a.402.402 0 0 0 .022.022l.017.015a3.051 3.051 0 0 0 0 .417.346.346 0 0 0-.04.037l-.534.61a.671.671 0 0 0-.078.775l.423.739a.658.658 0 0 0 .704.32l.79-.164a.293.293 0 0 0 .072-.023c.103.068.211.13.323.186a.332.332 0 0 0 .016.083l.258.772c.09.273.345.456.632.456h.853a.667.667 0 0 0 .633-.455l.257-.773a.38.38 0 0 0 .016-.083c.112-.056.22-.118.323-.186.023.01.047.018.072.023l.79.163a.659.659 0 0 0 .705-.32l.422-.738a.67.67 0 0 0-.077-.776l-.536-.609-.015-.016a.355.355 0 0 0-.024-.021 3.062 3.062 0 0 0 0-.417.33.33 0 0 0 .04-.038l.535-.609a.671.671 0 0 0 .077-.775l-.422-.739a.659.659 0 0 0-.705-.32l-.79.163a.325.325 0 0 0-.072.024A2.994 2.994 0 0 0 12 1.645a.34.34 0 0 0-.016-.084L11.725.79a.667.667 0 0 0-.632-.456h-.853Zm1.76 4a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M3.5 7.004A5.344 5.344 0 0 1 6 3.714v1.638a3.996 3.996 0 0 0-1.208 1.983l-.27 1.055-1.089-.054a1.889 1.889 0 0 0-.06-.002h-.044a2 2 0 0 0 .004 4h10a1.333 1.333 0 0 0 .334-2.626l-1.009-.26.009-1.115H14v.084a2.668 2.668 0 0 1-.667 5.25h-10a3.333 3.333 0 1 1 0-6.667h.055l.112.004Z"
    />
  </svg>
)
