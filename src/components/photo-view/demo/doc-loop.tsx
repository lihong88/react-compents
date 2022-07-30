import React from 'react';
import { PhotoViewr } from 'react-compents';
import { ImageList, Image, photoImages } from './doc-components';
const { PhotoProvider, PhotoView } = PhotoViewr;
export default function DocDemo() {
  return (
    <PhotoProvider loop={4}>
      <ImageList>
        {photoImages.slice(0, 3).map((item, index) => (
          <PhotoView key={index} src={item}>
            <Image src={item} />
          </PhotoView>
        ))}
      </ImageList>
    </PhotoProvider>
  );
}
