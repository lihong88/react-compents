import React from 'react';
import { PhotoViewr } from 'react-compents';
import { ImageList, photoImages, Image } from './doc-components';
const { PhotoProvider, PhotoView } = PhotoViewr;
export default function DocDemo() {
  return (
    <PhotoProvider>
      <ImageList>
        {photoImages.map((item, index) => (
          <PhotoView key={index} src={item}>
            {index < 2 ? <Image src={item} /> : undefined}
          </PhotoView>
        ))}
      </ImageList>
    </PhotoProvider>
  );
}
