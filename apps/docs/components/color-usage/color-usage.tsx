import * as React from 'react';
import { ColorStepLabel } from './color-step-label';
import { ColorUsageRange } from './color-usage-range';
import styles from './index.module.css';
import { Swatch } from './swatch';

export function ColorUsage() {
  return (
    <div className={styles.ColorsHomeGrid}>
      <div className="col-span-11 col-start-2 grid w-full grid-cols-12">
        <ColorUsageRange className="col-span-2">Backgrounds</ColorUsageRange>
        <ColorUsageRange className="col-span-3">
          Interactive components
        </ColorUsageRange>
        <ColorUsageRange className="col-span-3">
          Borders and separators
        </ColorUsageRange>
        <ColorUsageRange className="col-span-2">Solid colors</ColorUsageRange>
        <ColorUsageRange className="col-span-2">
          Accessible text
        </ColorUsageRange>
      </div>

      <div className="col-span-11 col-start-2 grid w-full grid-cols-12">
        <ColorStepLabel>1</ColorStepLabel>
        <ColorStepLabel>2</ColorStepLabel>
        <ColorStepLabel>3</ColorStepLabel>
        <ColorStepLabel>4</ColorStepLabel>
        <ColorStepLabel>5</ColorStepLabel>
        <ColorStepLabel>6</ColorStepLabel>
        <ColorStepLabel>7</ColorStepLabel>
        <ColorStepLabel>8</ColorStepLabel>
        <ColorStepLabel>9</ColorStepLabel>
        <ColorStepLabel>10</ColorStepLabel>
        <ColorStepLabel>11</ColorStepLabel>
        <ColorStepLabel>12</ColorStepLabel>
      </div>

      {(
        [
          'gray',
          'mauve',
          'slate',
          'sage',
          'olive',
          'sand',
          'tomato',
          'red',
          'ruby',
          'crimson',
          'pink',
          'plum',
          'purple',
          'violet',
          'iris',
          'indigo',
          'blue',
          'cyan',
          'teal',
          'jade',
          'green',
          'grass',
          'bronze',
          'gold',
          'brown',
          'orange',
          'amber',
          'yellow',
          'lime',
          'mint',
          'sky',
        ] as const
      ).map((scale) => (
        <React.Fragment key={scale}>
          <div className="col-span-1 flex flex-col">
            <p className="radial-mask-02 flex items-center justify-end py-2 font-mono text-ghost-aa9 text-xs uppercase tracking-widest">
              {scale.charAt(0).toUpperCase() + scale.slice(1)}
            </p>
          </div>
          <div className="col-span-11 grid grid-cols-12 items-center justify-items-center">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((step) => (
              <Swatch key={step} scale={scale} step={step.toString() as '1'} />
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
