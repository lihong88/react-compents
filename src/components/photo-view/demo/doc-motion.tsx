import React from 'react';
import { PhotoViewr } from 'react-compents';
import { ImageList } from './doc-components';
import photo3 from './images/3.jpg';
import photo4 from './images/4.jpg';
const { PhotoProvider, PhotoView } = PhotoViewr;
export default function DocDemo() {
  return (
    <PhotoProvider
      speed={() => 800}
      easing={(type: any) =>
        type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    >
      <ImageList>
        <div>
          <PhotoView src={photo3}>
            <img src={photo3} className="h-32" alt="" />
          </PhotoView>

          <PhotoView src={photo4} />
        </div>
      </ImageList>
    </PhotoProvider>
  );
}
