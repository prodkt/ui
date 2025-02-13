'use client';

import { cn } from '@/lib/utils';
import {
  Fingerprint as AuthenticationIcon,
  BarChart as ChartsIcon,
  PenIcon as DataTablesIcon,
  Table as FormsIcon,
  List as ListIcon,
  Award as WizardsIcon,
} from 'lucide-react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { type FC, useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
type Props = {
  className?: string;
};

export const TabCarousel: FC<Props> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeListItem = list[activeIndex];

  const [shouldIncrement, setShouldIncrement] = useState(true);

  useEffect(() => {
    if (!shouldIncrement) {
      return;
    }

    let interval: NodeJS.Timeout;
    if (inView) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % list.length);
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [shouldIncrement, inView]);

  return (
    <div ref={ref} className={cn(className, 'w-full')}>
      <div className={cn('not-prose', 'w-full', 'px-4 md:px-10')}>
        <h2
          className={cn(
            'text-2xl sm:text-[32px]',
            'tracking-tight',
            'text-start',
            'p-0',
            'text-foreground'
          )}
        >
          I love{' '}
          <span
            className={cn(
              'font-semibold',
              'text-primary drop-shadow-[0_0_30px_var(--primary-a9)]'
            )}
          >
            bleeding edge
          </span>{' '}
          technology. Anything between low-code and full-code to design
          primitives and complete design systems.
        </h2>
        <p className={cn('mt-4 sm:mt-6', 'max-w-md', 'text-muted-foreground')}>
          In my exploration I've started crafting and coding my own tools to
          make the learning process more efficient and always have an outcome.
        </p>
      </div>

      <div className={cn('mt-8 sm:mt-12 lg:mt-20')}>
        <div
          className={cn(
            'select-none',
            'relative border border-active bg-gray-a2 outline outline-1 outline-gray-a3 outline-offset-2 ring-1 ring-gray-a3 ring-offset-2 ring-offset-gray-a1',
            'h-[752px] sm:h-[874px] md:h-[984px] lg:h-[688px]',
            'not-prose',
            'pt-4 sm:pt-10 lg:pt-20',
            'pb-4 lg:pb-0',
            'pl-4 sm:pl-10',
            'text-foreground',
            'rounded-2xl sm:rounded-3xl',
            'overflow-hidden',
            'bg-card',
            'bg-noise'
          )}
        >
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 3.5,
                ease: 'easeInOut',
              }}
              key={activeIndex}
              className={cn(
                'absolute',
                'inset-0',
                'z-0',
                'xs:bg-landing-sweet-spot-glow-position-xs',
                'lg:bg-landing-sweet-spot-glow-position-lg',
                'md:bg-landing-sweet-spot-glow-position-md',
                'xs:bg-landing-sweet-spot-glow-size-xs',
                'lg:bg-landing-sweet-spot-glow-size-lg',
                activeListItem.backgroundImage
              )}
              style={{
                backgroundRepeat: 'repeat, no-repeat',
              }}
            />
          </AnimatePresence>
          <div
            className={cn(
              'relative',
              'z-[1]',
              'w-full lg:h-full ',
              'flex flex-col items-start justify-start lg:grid lg:grid-cols-12'
            )}
          >
            <div
              className={cn(
                'not-prose',
                'flex w-full flex-col items-start justify-start',
                'relative',
                'my-auto h-3/4 pr-6',
                'sm:max-w-[540px] md:max-w-[760px] lg:max-w-[416px]',
                'lg:col-span-5'
              )}
            >
              <h3 className={cn('', 'txt-xlarge-plus')}>
                {activeListItem.title}
              </h3>
              <p
                className={cn(
                  'top-0 bottom-auto mt-6',
                  'text-base',
                  'text-muted-foreground'
                )}
              >
                {activeListItem.description}
              </p>
              <div
                className={cn(
                  'top-auto mt-auto pb-10',
                  'max-w-full',
                  'grid grid-cols-2',
                  'place-content-end place-items-end content-end items-end justify-items-end',
                  'w-full',
                  'gap-y-2 pr-4',
                  'sm:gap-2',
                  'not-prose'
                )}
              >
                {list.map((item, index) => {
                  const active = index === activeIndex;
                  const Icon = item.icon;

                  return (
                    <Button
                      variant="outline"
                      size="sm"
                      key={item.iconText}
                      onClick={() => {
                        setShouldIncrement(false);
                        setActiveIndex(index);
                      }}
                      className={cn(
                        '!bg-ghost-a1 appearance-none border-ghost-aa1 shadow-[0_-2px_10px_-1px_var(--ghost-a3),inset_0_-2px_1px_-1px_var(--ghost-a6)] outline outline-2 outline-transparent outline-offset-4 transition-all duration-100',
                        'focus:outline-none',
                        'cursor-pointer',
                        'w-full items-center justify-start',
                        active
                          ? '!bg-ghost-aa2 motion-transition-all motion-duration-500 !outline-ghost-aa1 border-ghost-aa8 border-solid shadow-[inset_0_-2px_10px_-1px_var(--ghost-aa3),inset_0_-14px_24px_-24px_var(--ghost-aa2)] outline outline-2 outline-offset-2 ring-1 ring-ghost-a7'
                          : 'bg-ghost-aa9'
                      )}
                    >
                      <div>
                        <Icon active={active} />
                      </div>
                      <div
                        className={cn(
                          'font-mono uppercase tracking-widest',
                          active ? '' : ''
                        )}
                      >
                        {item.iconText}
                      </div>
                    </Button>
                  );
                })}
              </div>
            </div>
            <div
              className={cn(
                'relative',
                'h-full',
                'mt-4 sm:mt-[72px] lg:mt-0',
                'flex',
                'lg:col-start-7 lg:col-end-13'
              )}
            >
              <div
                className={cn(
                  'w-full',
                  'h-full',
                  'creative-tab-slider-mask',
                  'z-[1]',
                  'lg:absolute',
                  'top-0 right-0'
                )}
              >
                {list.map((item, index) => {
                  const active = index === activeIndex;

                  return (
                    <div
                      key={index}
                      className={cn(
                        'after:absolute',
                        'after:inset-0',
                        'after:bg-transparent',
                        'after:rounded-l-3xl',
                        'after:z-[50]',
                        'before:overflow-hidden after:overflow-hidden',
                        'after:border after:border-gray-a6 after:border-r-0',
                        'after:shadow-[-1px_0_0_4px_var(--gray-a4),-1px_0_0_2px_var(--gray-1)]',
                        'after:size-full',
                        'after:m-0',
                        'rounded-l-3xl',
                        'object-cover',
                        'object-left-top',
                        'w-full md:w-[954px] lg:w-full',
                        'h-full lg:h-[506px]',
                        'md:pl-20 lg:pl-0',
                        'absolute',
                        'top-0 right-0',
                        active && 'delay-300',
                        active
                          ? 'motion-translate-x-0'
                          : 'motion-translate-x-full',
                        active ? 'opacity-100' : 'opacity-0',
                        'motion-duration-500 motion-ease-in-out transition-[transform,opacity]'
                      )}
                    >
                      <img
                        key={index}
                        src={item.image1Dark}
                        alt="UI of Prodkt"
                        className={cn(
                          'z-10',
                          'relative',
                          'rounded-l-3xl',
                          'object-cover',
                          'object-left-top',
                          'w-full md:w-[954px] lg:w-full',
                          'h-full lg:h-[506px]',
                          'md:pl-20 lg:pl-0',
                          'top-0 right-0',
                          active
                            ? 'motion-translate-x-0'
                            : 'motion-translate-x-full',
                          active ? 'opacity-100' : 'opacity-0',
                          'motion-duration-500 motion-ease-in-out transition-[transform,opacity]'
                        )}
                      />
                    </div>
                  );
                })}
              </div>

              {list.map((item, index) => {
                const active = index === activeIndex;

                return (
                  <div
                    key={index}
                    className={cn(
                      'block',
                      'z-[2]',
                      'w-[328px] sm:w-[488px]',
                      'absolute',
                      'bottom-0 sm:bottom-[4px] lg:bottom-[78px]',
                      '-left-2 lg:-left-20',
                      'rounded-xl',
                      'text-foreground',
                      'shadow-creative-tab-slider-code',
                      active && 'delay-300',
                      active
                        ? 'motion-translate-y-0'
                        : 'motion-translate-y-full',
                      active ? 'opacity-100' : 'opacity-0',
                      'motion-duration-500 motion-ease-in-out transition-[transform,opacity]'
                    )}
                  >
                    <img
                      src={item.image2Dark}
                      alt="Code of Prodkt"
                      className={cn(
                        'rounded-xl bg-blend-color-burn',
                        'w-auto',
                        'h-full max-h-[400px]'
                      )}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const list = [
  {
    title:
      'Business applications not only share fundamental UI elements, but also the underlying logic.',
    description: `Stop writing repetitive code for CRUD, security and
        state management. Let Refine automatically transform
        your UI elements to enterprise-grade:`,
    icon: (props: { active: boolean }) => (
      <DataTablesIcon
        className={cn(
          props.active ? 'text-[#D22D2D] dark:text-[#FA3852]' : 'text-accent'
        )}
      />
    ),
    iconText: 'Tables',
    image1Dark: '/assets/sparkstack/prodktCraft_appScreenshot_2.avif',
    image2Dark: '/assets/sparkstack/prodktCraft_appScreenshot_3.avif',
    backgroundImage:
      'dark:bg-landing-sweet-spot-glow-cyan-dark bg-landing-sweet-spot-glow-cyan-light',
  },
  {
    title:
      'Business applications not only share fundamental UI elements, but also the underlying logic.',
    description: `Stop writing repetitive code for CRUD, security and
      state management. Let Refine automatically transform
      your UI elements to enterprise-grade:`,
    icon: (props: { active: boolean }) => (
      <ListIcon
        className={cn(
          props.active ? 'text-[#F46A25] dark:text-[#F98C1F]' : 'text-accent'
        )}
      />
    ),
    iconText: 'List',
    image1Dark: '/assets/sparkstack/prodktCraft_appScreenshot_4.avif',
    image2Dark: '/assets/sparkstack/prodktCraft_appScreenshot_6.avif',
    backgroundImage:
      'dark:bg-landing-sweet-spot-glow-orange-dark bg-landing-sweet-spot-glow-orange-light',
  },
  {
    title: 'Components and building blocks for User Interfaces built by Prodkt',
    description: `Stop writing repetitive code for CRUD, security and
state management. Let Refine automatically transform
your UI elements to enterprise-grade:`,
    icon: (props: { active: boolean }) => (
      <ChartsIcon
        className={cn(
          props.active ? 'text-[#FF9F1A] dark:text-[#F9D51F]' : 'text-accent'
        )}
      />
    ),
    iconText: 'Charts',
    image1Dark: '/assets/sparkstack/prodktCraft_appScreenshot_2.avif',
    image2Dark: '/assets/sparkstack/prodktCraft_appScreenshot_3.avif',
    backgroundImage:
      'dark:bg-landing-sweet-spot-glow-yellow-dark bg-landing-sweet-spot-glow-yellow-light',
  },
  {
    title:
      'Business applications not only share fundamental UI elements, but also the underlying logic.',
    description: `Stop writing repetitive code for CRUD, security and
  state management. Let Refine automatically transform
  your UI elements to enterprise-grade:`,
    icon: (props: { active: boolean }) => (
      <FormsIcon
        className={cn(
          props.active ? 'text-[#089191] dark:text-[#47D1BF]' : 'text-accent'
        )}
      />
    ),
    iconText: 'Forms',
    image1Dark: '/assets/sparkstack/prodktCraft_appScreenshot_2.avif',
    image2Dark: '/assets/sparkstack/prodktCraft_appScreenshot_3.avif',
    backgroundImage:
      'dark:bg-landing-sweet-spot-glow-cyan-dark bg-landing-sweet-spot-glow-cyan-light',
  },
  {
    title:
      'Business applications not only share fundamental UI elements, but also the underlying logic.',
    description: `Stop writing repetitive code for CRUD, security and
  state management. Let Refine automatically transform
  your UI elements to enterprise-grade:`,
    icon: (props: { active: boolean }) => (
      <WizardsIcon
        className={cn(
          props.active ? 'text-[#1F80E0] dark:text-[#3DB8F5]' : 'text-accent'
        )}
      />
    ),
    iconText: 'Wizards',
    image1Dark: '/assets/sparkstack/prodktCraft_appScreenshot_2.avif',
    image2Dark: '/assets/walkthrough__triggerCta_lightSized.avif',
    backgroundImage:
      'dark:bg-landing-sweet-spot-glow-blue-dark bg-landing-sweet-spot-glow-blue-light',
  },
  {
    title:
      'Business applications not only share fundamental UI elements, but also the underlying logic.',
    description: `Stop writing repetitive code for CRUD, security and
  state management. Let Refine automatically transform
  your UI elements to enterprise-grade:`,
    icon: (props: { active: boolean }) => (
      <AuthenticationIcon
        className={cn(
          props.active ? 'text-[#693BC6] dark:text-[#5959FF]' : 'text-accent'
        )}
      />
    ),
    iconText: 'Auth',
    image1Dark: '/assets/sparkstack/prodktCraft_appScreenshot_2.avif',
    image2Dark: '/assets/sparkstack/prodktCraft_appScreenshot_3.avif',
    backgroundImage:
      'dark:bg-landing-sweet-spot-glow-indigo-dark bg-landing-sweet-spot-glow-indigo-light',
  },
];
