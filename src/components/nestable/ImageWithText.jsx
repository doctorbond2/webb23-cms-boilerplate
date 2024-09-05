import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import RichTextDefault from './RichText';

export default function ImageWithText({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="p-1 border-none ">
      <div className="">
        <Image
          src={blok.image.filename}
          alt={blok.fieldtype + '-' + blok.image.id}
          width={blok.image_width}
          height={blok.image_height}
          className="w-full h-auto object-cover rounded-full bg-white "
        />
      </div>
      <div className="p-4 text-center">
        <RichTextDefault blok={{ richtext: blok.richtext }} />
      </div>
    </div>
  );
}
