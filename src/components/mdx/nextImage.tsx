'use client';

import Image, { ImageProps } from 'next/image';

export default function NextImage(props: ImageProps) {
  return (
    <Image
      sizes="100vw"
      className="inline align-middle mr-1 w-4 h-4"
      {...props}
    />
  );
}
