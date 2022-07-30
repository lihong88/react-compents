import PhotoProvider from './PhotoProvider';
import PhotoView from './PhotoView';
import PhotoSlider from './PhotoSlider';
const PhotoViewr = PhotoView as any;
PhotoViewr.PhotoProvider = PhotoProvider;
PhotoViewr.PhotoView = PhotoView;
PhotoViewr.PhotoSlider = PhotoSlider;
export { PhotoProvider, PhotoView, PhotoSlider };
export default PhotoViewr;
