import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';
import { source } from '../../lib/source';

const loadGoogleFont = async (font: string, text: string, weights: string) => {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weights}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status === 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error('failed to load font data');
};

export const GET = async (request: NextRequest) => {
  const slug = request.nextUrl.searchParams.get('slug');
  const page = await source.getPage(slug ? slug.split('/') : []);

  if (!page) {
    return new Response('Not found', { status: 404 });
  }

  const { title, description } = page.data;
  const text = `Prodkt UI ${title} ${description}`;

  return new ImageResponse(
    <div tw="bg-[#1D4ED8] relative flex flex-col justify-between w-full h-full">
      <div
        tw="flex absolute left-0 top-0 w-full h-full opacity-10"
        style={{
          backgroundSize: '48px 48px',
          backgroundImage:
            'linear-gradient(to right, #FFF 1px, transparent 1px), linear-gradient(to bottom, #FFF 1px, transparent 1px)',
        }}
      />
      <div tw="absolute left-36 top-12 z-10 w-12 h-12 bg-white opacity-10" />
      <div tw="absolute left-96 top-24 z-10 w-12 h-12 bg-white opacity-10" />
      <div tw="absolute left-144 top-36 z-10 w-12 h-12 bg-white opacity-10" />
      <div tw="absolute left-192 top-48 z-10 w-12 h-12 bg-white opacity-10" />
      <div tw="absolute left-240 top-28 z-10 w-12 h-12 bg-white opacity-10" />
      <div tw="absolute left-288 top-72 z-10 w-12 h-12 bg-white opacity-10" />
      <div tw="absolute left-48 top-60 z-10 w-12 h-12 bg-white opacity-10" />

      <div tw="flex top-12 left-12 z-10">
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: "satori" */}
        <svg
          width={48}
          height={48}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.9397 48L17.0604 24H33.5158L47.3425 48H30.9397Z"
            fill="#ffffff"
          />
          <path
            d="M17.0603 24L30.9396 0H14.4842L0.657516 24H17.0603Z"
            fill="#ffffff"
          />
          <ellipse
            cx="7.9652"
            cy="40.6683"
            rx="7.30766"
            ry="7.33187"
            fill="#ffffff"
          />
        </svg>
      </div>
      <div
        tw="flex flex-col bottom-0 left-0 right-0 relative z-10 p-12"
        style={{ fontFamily: 'DM Sans' }}
      >
        <p tw="text-lg m-0 text-white/80 font-semibold">Prodkt UI</p>
        <h1
          tw="my-4 text-6xl font-bold text-white"
          style={{ fontFamily: 'DM Sans' }}
        >
          {page.data.title}
        </h1>
        <p tw="text-xl m-0 text-white/80 w-[70%]">{page.data.description}</p>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'DM Sans',
          data: await loadGoogleFont('DM Sans', text, '600'),
          style: 'normal',
        },
        {
          name: 'IBM Plex Mono',
          data: await loadGoogleFont('IBM Plex Mono', text, '400'),
          style: 'normal',
        },
      ],
    }
  );
};
