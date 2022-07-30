import React from 'react';
import { PhotoViewr } from 'react-compents';
import { ImageList, Image } from './doc-components';
import photo4 from './images/4.jpg';
const { PhotoProvider, PhotoView } = PhotoViewr;
export default function DocDemo() {
  return (
    <PhotoProvider pullClosable={false} maskClosable={false} maskOpacity={null}>
      <ImageList>
        <PhotoView src={photo4}>
          <Image src={photo4} />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
