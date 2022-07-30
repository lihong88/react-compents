import React from 'react';
import { PhotoViewr } from 'react-compents';
import { Button, ImageList } from './doc-components';
import { EosIconsBubbleLoading } from '../icons/EosIconsBubbleLoading';
import defaultPhoto from './images/default-photo.svg';
const { PhotoProvider, PhotoView } = PhotoViewr;
export default function DocDemo() {
  return (
    <ImageList>
      <PhotoProvider
        loadingElement={<EosIconsBubbleLoading className="text-white w-8 h-8" />}
        brokenElement={<img className="w-32 h-32" src={defaultPhoto} alt="" />}
      >
        <PhotoView src="/error.png">
          <Button>Click</Button>
        </PhotoView>
      </PhotoProvider>
    </ImageList>
  );
}
