import React from 'react';
import { PhotoViewr } from 'react-compents';
import { ImageList, Image } from './doc-components';
import photo2 from './images/2.jpg';
const { PhotoProvider, PhotoView } = PhotoViewr;
const Backdrop: React.FC = () => {
  return (
    <PhotoProvider maskOpacity={0.5}>
      <ImageList>
        <PhotoView src={photo2}>
          <Image src={photo2} />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
};

export default Backdrop;
