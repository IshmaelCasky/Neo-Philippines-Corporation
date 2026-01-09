
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        icon: string;
        [key: string]: any;
      };
    }
  }
}

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            "iconify-icon": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                icon: string;
                [key: string]: any;
            };
        }
    }
}
