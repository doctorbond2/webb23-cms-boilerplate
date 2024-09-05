import { storyblokEditable } from '@storyblok/react';
import RichTextDefault from './RichText';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero({ blok }) {
  const large_button = blok.large_button[0];

  if (!blok) {
    console.error('blok prop is undefined');
    return null;
  }

  return (
    <section
      {...storyblokEditable(blok)}
      className="border border-none bg-slate-500 flex flex-col md:flex-row p-8 rounded-lg lg:h-[450px] md:h-[500px]"
      id="hero-home"
    >
      <div
        id="left-section-wrapper"
        className="w-full md:w-1/2 p-4 flex flex-col justify-center"
      >
        <div className="buttons-container lg:flex lg:flex-wrap gap-4 mb-4">
          {blok.hero_buttons.map((button, index) => (
            <Link
              key={index}
              href={button.url ? button.url : '/home'}
              className="inline-block px-4 py-2 text-white rounded hover:bg-slate-600 font-semibold text-lg"
            >
              {button.label}
            </Link>
          ))}
        </div>
        <RichTextDefault blok={{ richtext: blok.richtext }} />
        <Link
          key={large_button.label}
          href={large_button.url ? large_button.url : '/home'}
          className="inline-block px-6 py-3 mt-6 bg-slate-900 text-white rounded hover:bg-blue-600"
          style={{
            maxWidth: '50%',
            boxSizing: 'border-box',
            textAlign: 'center',
            marginLeft: '2rem',
          }}
        >
          {large_button.label}
        </Link>
      </div>

      <div
        id="right-section-wrapper"
        className="w-full md:w-1/2 p-4 flex justify-center items-center bg-white border rounded-md"
      >
        <Image
          src={blok.image.filename}
          width={300}
          height={200}
          alt="hero-image"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
}
