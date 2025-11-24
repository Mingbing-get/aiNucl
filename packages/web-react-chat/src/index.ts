import '@ai-nucl/web-ai';

export { default as MarkdownRender } from './markdownRender';
export * from './hooks';
export * from './aiChat';

declare module '@ai-nucl/web-ai' {
  export namespace AIChat {
    export interface FunctionToolRenderInstance {
      render: React.FC<any>;
    }
  }
}
