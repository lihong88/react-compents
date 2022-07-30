import React from 'react';
import { PhotoViewr } from 'react-compents';
import { ImageList } from './doc-components';
import photo2 from './images/2.jpg';
import photo3 from './images/3.jpg';
import photo4 from './images/4.jpg';
import './index.less';
const { PhotoProvider, PhotoView } = PhotoViewr;
const style = React;
const Basic = () => {
  return (
    <div>
      <PhotoProvider>
        <ImageList>
          <div className="m-2">
            <PhotoView src={photo4}>
              <img src={photo4} className="h-72" alt="" />
            </PhotoView>
          </div>

          <div className="flex flex-col">
            <PhotoView src={photo2}>
              <img src={photo2} className="m-2 h-36" alt="" />
            </PhotoView>

            <PhotoView src={photo3}>
              <img src={photo3} className="m-2 h-32" alt="" />
            </PhotoView>
          </div>
        </ImageList>
      </PhotoProvider>
    </div>
  );
};
export default Basic;
