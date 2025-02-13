import type { SVGProps } from 'react';

export const PlanFoundryLogomark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={160}
    height={160}
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M159.675 48.131H48.13L80 16.261h55.772c4.781 0 9.561 3.187 11.951 7.17l11.952 24.7ZM12.276 136.57c2.39 4.781 7.171 7.171 11.951 7.171H80l31.87-31.87H.325l11.951 24.699Zm124.293 11.155c4.78-2.391 7.171-7.171 7.171-11.952V80.001l-31.87-31.87v111.545l24.699-11.951ZM23.431 12.277c-4.78 2.39-7.171 7.171-7.171 11.952V80l31.87 31.87V.326l-24.7 11.951Z"
      fill="currentColor"
    />
  </svg>
);

export default PlanFoundryLogomark;

export const PlanFoundryLogomarkGradient = ({
  color = 'iris',
  className,
  ...props
}: { color?: string; className?: string } & SVGProps<SVGSVGElement>) => (
  <svg
    width={162}
    height={162}
    viewBox="0 0 162 162"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M160.35 48.805H48.805l31.87-31.87h55.772c4.781 0 9.561 3.187 11.951 7.17l11.952 24.7ZM12.951 137.244c2.39 4.78 7.17 7.171 11.951 7.171h55.773l31.87-31.87H1l11.951 24.699Zm124.293 11.154c4.78-2.39 7.171-7.17 7.171-11.951V80.675l-31.87-31.87V160.35l24.699-11.952ZM24.106 12.951c-4.78 2.39-7.171 7.17-7.171 11.951v55.773l31.87 31.87V1l-24.7 11.951Z"
      fill={`var(--${color}-12)`}
    />
    <path
      d="M160.35 48.805H48.805l31.87-31.87h55.772c4.781 0 9.561 3.187 11.951 7.17l11.952 24.7ZM12.951 137.244c2.39 4.78 7.17 7.171 11.951 7.171h55.773l31.87-31.87H1l11.951 24.699Zm124.293 11.154c4.78-2.39 7.171-7.17 7.171-11.951V80.675l-31.87-31.87V160.35l24.699-11.952ZM24.106 12.951c-4.78 2.39-7.171 7.17-7.171 11.951v55.773l31.87 31.87V1l-24.7 11.951Z"
      fill="url(#a)"
      style={{
        mixBlendMode: 'overlay',
      }}
    />
    <path
      d="M160.35 48.805H48.805l31.87-31.87h55.772c4.781 0 9.561 3.187 11.951 7.17l11.952 24.7ZM12.951 137.244c2.39 4.78 7.17 7.171 11.951 7.171h55.773l31.87-31.87H1l11.951 24.699Zm124.293 11.154c4.78-2.39 7.171-7.17 7.171-11.951V80.675l-31.87-31.87V160.35l24.699-11.952ZM24.106 12.951c-4.78 2.39-7.171 7.17-7.171 11.951v55.773l31.87 31.87V1l-24.7 11.951Z"
      fill="url(#b)"
      style={{
        mixBlendMode: 'overlay',
      }}
    />
    <path
      d="M160.35 48.805H48.805l31.87-31.87h55.772c4.781 0 9.561 3.187 11.951 7.17l11.952 24.7ZM12.951 137.244c2.39 4.78 7.17 7.171 11.951 7.171h55.773l31.87-31.87H1l11.951 24.699Zm124.293 11.154c4.78-2.39 7.171-7.17 7.171-11.951V80.675l-31.87-31.87V160.35l24.699-11.952ZM24.106 12.951c-4.78 2.39-7.171 7.17-7.171 11.951v55.773l31.87 31.87V1l-24.7 11.951Z"
      fill="url(#c)"
      style={{
        mixBlendMode: 'overlay',
      }}
    />
    <path
      d="M160.35 48.805H48.805l31.87-31.87h55.772c4.781 0 9.561 3.187 11.951 7.17l11.952 24.7ZM12.951 137.244c2.39 4.78 7.17 7.171 11.951 7.171h55.773l31.87-31.87H1l11.951 24.699Zm124.293 11.154c4.78-2.39 7.171-7.17 7.171-11.951V80.675l-31.87-31.87V160.35l24.699-11.952ZM24.106 12.951c-4.78 2.39-7.171 7.17-7.171 11.951v55.773l31.87 31.87V1l-24.7 11.951Z"
      fill="url(#d)"
      style={{
        mixBlendMode: 'overlay',
      }}
    />
    <path
      d="M160.35 48.805H48.805l31.87-31.87h55.772c4.781 0 9.561 3.187 11.951 7.17l11.952 24.7ZM12.951 137.244c2.39 4.78 7.17 7.171 11.951 7.171h55.773l31.87-31.87H1l11.951 24.699Zm124.293 11.154c4.78-2.39 7.171-7.17 7.171-11.951V80.675l-31.87-31.87V160.35l24.699-11.952ZM24.106 12.951c-4.78 2.39-7.171 7.17-7.171 11.951v55.773l31.87 31.87V1l-24.7 11.951Z"
      stroke="var(--gray-1)"
      strokeMiterlimit={16}
    />
    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(90 32 80.5) scale(112)"
      >
        <stop offset={0.5} stopOpacity={0.5} />
        <stop offset={1} stopColor={`var(--${color}-12)`} stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 -111.5 111.5 0 49 112.5)"
      >
        <stop offset={0.5} stopOpacity={0.5} />
        <stop offset={1} stopColor={`var(--${color}-12)`} stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(180 56.25 56.25) scale(111.5)"
      >
        <stop offset={0.5} stopOpacity={0.5} />
        <stop offset={1} stopColor={`var(--${color}-12)`} stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="d"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(112 0 0 112 49 49)"
      >
        <stop offset={0.5} stopOpacity={0.5} />
        <stop offset={1} stopColor={`var(--${color}-12)`} stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
