import React from 'react';
import { PhotoViewr } from 'react-compents';
import { Button, ImageList } from './doc-components';
import photo4 from './images/4.jpg';
const { PhotoProvider, PhotoView } = PhotoViewr;
export default function DocDemo() {
  return (
    <PhotoProvider>
      <ImageList>
        <PhotoView src={photo4}>
          <Button primary>Click</Button>
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
