declare module 'next/link';

declare module 'next/dynamic' {
  import { ComponentType } from 'react';

  export interface DynamicOptions {
    loading?: ComponentType;
    ssr?: boolean;
    [key: string]: any;
  }

  export default function dynamic<T = any>(
    dynamicOptions: () => Promise<{ default: ComponentType<T> }> | ComponentType<T>,
    options?: DynamicOptions
  ): ComponentType<T>;
} 