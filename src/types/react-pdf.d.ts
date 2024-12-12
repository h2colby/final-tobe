declare module 'react-pdf' {
  export const pdfjs: any;
  export interface DocumentProps {
    file: string;
    onLoadSuccess?: (pdf: any) => void;
    onLoadError?: (error: Error) => void;
  }
  export interface PageProps {
    pageNumber: number;
    width?: number;
    scale?: number;
  }
  export const Document: React.FC<DocumentProps>;
  export const Page: React.FC<PageProps>;
}

declare module 'react-pdf/dist/esm/entry.webpack' {
  export * from 'react-pdf';
} 