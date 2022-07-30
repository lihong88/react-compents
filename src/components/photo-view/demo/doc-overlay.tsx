import React from 'react';
import { PhotoViewr } from 'react-compents';
import { ImageList, Overlay, photoImages, Image } from './doc-components';
const { PhotoProvider, PhotoView } = PhotoViewr;
const Overlays = () => {
  return (
    <PhotoProvider
      overlayRender={({ rotate, onRotate, scale, overlay }: any) => {
        return (
          <Overlay>
            <div>
              <div>
                <a onClick={() => onRotate(rotate + 90)}>旋转</a>
              </div>
              旋转角度 {rotate}
            </div>
            <div>缩放：{scale}</div>
            <div>描述：{overlay}</div>
          </Overlay>
        );
      }}
    >
      <ImageList>
        {photoImages.map((item, index) => (
          <PhotoView key={index} src={item} overlay={<div>{item}</div>}>
            <Image src={item} />
          </PhotoView>
        ))}
      </ImageList>
    </PhotoProvider>
  );
};
export default Overlays;
