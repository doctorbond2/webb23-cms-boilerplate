import { storyblokEditable } from '@storyblok/react';
import ImageWithText from './ImageWithText';

export default function Grid({ blok }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className=" border-gray-300 my-8 bg-slate-500 p-10 border border-none rounded-lg"
    >
      <h2>Our authors</h2>
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">
          {blok.columns.map((column, index) => {
            if (column.component === 'image_with_text') {
              return (
                <li
                  key={column.component + '-' + index}
                  className="w-full max-w-xs"
                >
                  <ImageWithText blok={column} />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
}
