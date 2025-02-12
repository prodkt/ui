import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { Tooltip } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { AccessibleIcon, Theme, VisuallyHidden } from '@radix-ui/themes';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { copy } from '../../lib/clipboard';
import styles from './CustomSwatch.module.css';

const brightColors = ['amber', 'yellow', 'lime', 'mint', 'sky'];

interface CustomSwatchProps extends React.ComponentPropsWithoutRef<'button'> {
  scale: string;
  step: string;
  cssVariable: string;
  hex: string;
  hexA: string;
  p3: string;
  p3A: string;
}

export const CustomSwatch = ({
  scale,
  step,
  cssVariable,
  hex,
  hexA,
  p3,
  p3A,
  style,
  ...props
}: CustomSwatchProps) => {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const { resolvedTheme } = useTheme();
  const friendlyScaleName = `${scale.charAt(0).toUpperCase() + scale.slice(1)}`;
  const friendlyColorName = `${friendlyScaleName} ${step}`;
  const otherTheme = resolvedTheme === 'light' ? 'dark' : 'light';
  const isGray = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'].includes(
    scale
  );

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          styles.CustomSwatchTrigger,
          styles.CustomSwatchTransparencyGrid
        )}
        {...props}
      >
        <span style={{ backgroundColor: cssVariable, ...style }}>
          <VisuallyHidden>
            {scale} {step}
          </VisuallyHidden>
        </span>
      </DialogTrigger>

      <Theme asChild>
        <DialogContent
          ref={contentRef}
          className={styles.CustomSwatchContent}
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            contentRef.current?.focus();
          }}
        >
          <div className="relative">
            <div
              className={styles.CustomSwatchTransparencyGrid}
              style={{ height: '240px' }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: cssVariable,
                }}
              />
            </div>

            <h3 className="my-4 text-sm">{friendlyColorName}</h3>

            <div className="grid grid-cols-2 gap-x-5 gap-y-2">
              <p className="text-gray-500 text-sm">Usage</p>
              <div>
                <p className="text-sm">
                  {['1', '2'].includes(step) && 'Backgrounds'}
                  {['3', '4', '5'].includes(step) && 'Interactive components'}
                  {['6', '7'].includes(step) && 'Borders and separators'}
                  {['8'].includes(step) &&
                    isGray &&
                    'Borders, focus rings, disabled text'}
                  {['8'].includes(step) && !isGray && 'Borders, focus rings'}
                  {['9', '10'].includes(step) &&
                    isGray &&
                    'Solid backgrounds, disabled text'}
                  {['9', '10'].includes(step) &&
                    !isGray &&
                    'Solid backgrounds, buttons'}
                  {['11'].includes(step) && 'Secondary text, links'}
                  {['12'].includes(step) && 'High-contrast text'}
                </p>
              </div>

              <p className="text-gray-500 text-sm">Pairs with</p>
              <div>
                <p className="text-sm">
                  {['1', '2'].includes(step) && 'Steps 11, 12 text'}
                  {['3'].includes(step) && 'Steps 11 labels, Step 12 text'}
                  {['4'].includes(step) && 'Steps 11, 12 labels'}
                  {['5'].includes(step) && 'Step 12 labels'}
                  {['6', '7', '8'].includes(step) && 'Steps 1–5 backgrounds'}
                  {['9', '10'].includes(step) &&
                    (brightColors.includes(scale) ? 'Dark text' : 'White text')}
                  {['11', '12'].includes(step) && 'Background colors'}
                </p>
              </div>

              <Separator />

              <p className="text-gray-500 text-sm">Solid color</p>

              <div className="flex h-8 w-8 items-center justify-center">
                <CopyButton>{hex}</CopyButton>
              </div>

              <div className="col-span-1 flex items-center">
                <p className="text-gray-500 text-sm">Alpha color</p>

                <Popover modal>
                  <PopoverTrigger>
                    <AccessibleIcon label="Learn more">
                      <InfoCircledIcon />
                    </AccessibleIcon>
                  </PopoverTrigger>
                  <PopoverContent
                    side="top"
                    align="center"
                    style={{ width: 380 }}
                  >
                    <p className="mb-4 text-sm">Alpha colors</p>
                    <p className="text-sm">
                      Alpha color is a translucent color that achieves the same
                      look against a neutral background. Alpha colors are used
                      for elements that need to retain contrast when overlayed
                      over different backgrounds
                    </p>
                    <p className="text-sm">
                      Radix Colors alphas are designed against white background
                      in light mode and Gray 1 in dark mode.
                    </p>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="col-span-2 flex h-8 w-8 items-center justify-center">
                <CopyButton>{hexA}</CopyButton>
              </div>

              <p className="col-span-1 text-gray-500 text-sm">P3 color</p>
              <div className="col-span-3 flex h-8 w-8 items-center justify-center">
                <CopyButton>{p3}</CopyButton>
              </div>

              <p className="col-span-1 text-gray-500 text-sm">P3 alpha</p>
              <div className="col-span-2 flex h-8 w-8 items-center justify-center">
                <CopyButton>{p3A}</CopyButton>
              </div>
            </div>

            <Theme
              asChild
              hasBackground={false}
              appearance={(() => {
                if (+step < 9) {
                  return 'inherit';
                }

                if (+step < 11) {
                  const isBright = brightColors.includes(scale);
                  return isBright ? 'light' : 'dark';
                }

                return otherTheme;
              })()}
            />
          </div>
        </DialogContent>
      </Theme>
    </Dialog>
  );
};

interface CopyButtonState {
  open: boolean;
  text: 'Click to copy' | 'Copied';
  timeout: ReturnType<typeof setTimeout> | null;
}

const CopyButton = ({
  onClick,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>) => {
  const ref = React.useRef<HTMLButtonElement>(null);

  const [state, setState] = React.useReducer(
    (
      prevState: CopyButtonState,
      newState: Partial<CopyButtonState>
    ): CopyButtonState => {
      // Start a timeout to change the text when tooltip is closed
      if (newState.open === false) {
        newState.timeout = setTimeout(() => {
          setState({
            text: 'Click to copy',
            timeout: null,
          });
        }, 1000);
      }

      // Clear a previous timeout when tooltip state changes
      if (prevState.timeout) {
        clearTimeout(prevState.timeout);
        prevState.timeout = null;
      }

      return { ...prevState, ...newState };
    },
    {
      open: false,
      text: 'Click to copy',
      timeout: null,
    }
  );

  return (
    <Tooltip
      disableHoverableContent
      onOpenChange={(open) => setState({ open })}
      open={state.open}
    >
      <Button
        variant="ghost"
        ref={ref}
        style={{ userSelect: 'auto' }}
        onClick={(event) => {
          onClick?.(event);
          const originalDefaultPrevented = event.defaultPrevented;

          // Prevent tooltip closing on click
          event.preventDefault();
          const text = ref.current?.textContent;

          if (text) {
            setState({
              open: true,
              text: 'Copied',
            });

            if (!originalDefaultPrevented) {
              void copy(text);
            }
          }
        }}
        {...props}
      />
    </Tooltip>
  );
};
