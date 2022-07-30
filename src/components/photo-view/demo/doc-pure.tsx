import React from 'react';
import { PhotoViewr } from 'react-compents';
import { ImageList, Image } from './doc-components';
import photo5 from './images/5.jpg';
const { PhotoProvider, PhotoView } = PhotoViewr;
export default function DocDemo() {
  return (
    <PhotoProvider maskOpacity={0.5} bannerVisible={false}>
      <ImageList>
        <PhotoView src={photo5}>
          <Image src={photo5} />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
