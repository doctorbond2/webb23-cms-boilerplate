import Image from 'next/image';

export default function SBImage({ blok }) {
  console.log('image', blok);
  const image = blok[0];
  return (
    <div>
      <Image
        src={image.uri.filename}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
    </div>
  );
}
