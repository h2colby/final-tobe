declare module '@/components/Header' {
  export function Header(): JSX.Element;
}

declare module '@/components/PdfViewer/PdfViewer' {
  export interface PdfViewerProps {
    filePath: string;
  }
  export function PdfViewer(props: PdfViewerProps): JSX.Element;
}

declare module '@/once-ui/components' {
  export const Flex: React.FC<any>;
  export const Heading: React.FC<any>;
  export const Text: React.FC<any>;
  export const Button: React.FC<any>;
  export const Grid: React.FC<any>;
  export const InlineCode: React.FC<any>;
  export const Logo: React.FC<any>;
  export const LetterFx: React.FC<any>;
} 