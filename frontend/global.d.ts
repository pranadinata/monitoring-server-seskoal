declare module 'react-table';
declare module 'feather-icons';
declare module 'feather-icons-react';
declare module 'fslightbox-react';
declare module '@ckeditor/ckeditor5-react';
declare module '@ckeditor/ckeditor5-build-decoupled-document';

export {};

declare global {
  interface Window {
    QrCreator: any;  // Use 'any' or define a more specific type if you know the API structure of QrCreator
  }
}