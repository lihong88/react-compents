import React from 'react';
import { PhotoViewr } from 'react-compents';
import { ImageList } from './doc-components';
import photo7 from './images/7.jpg';
const { PhotoProvider, PhotoView } = PhotoViewr;
export default function DocDemo() {
  return (
    <PhotoProvider>
      <ImageList>
        <PhotoView src={photo7}>
          <img src={photo7} className="block w-32 h-32 object-cover" alt="" />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
