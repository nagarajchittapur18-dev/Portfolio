/// <reference types="vite/client" />

// Allow CSS module imports
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

// Allow SVG imports
declare module '*.svg' {
  const content: string;
  export default content;
}

// Allow PNG imports
declare module '*.png' {
  const content: string;
  export default content;
}
