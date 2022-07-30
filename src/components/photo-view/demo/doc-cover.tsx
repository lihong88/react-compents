import React from 'react';
import { PhotoViewr } from 'react-compents';
import { ImageList } from './doc-components';
import photo6 from './images/6.jpg';
const { PhotoProvider, PhotoView } = PhotoViewr;
export default function DocDemo() {
  return (
    <PhotoProvider speed={() => 800}>
      <ImageList>
        <PhotoView src={photo6}>
          <img src={photo6} className="block w-32 h-32 md:w-64 md:h-64 object-cover" alt="" />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
