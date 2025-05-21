import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $getNodeByKey,
  $getSelection,
  $isNodeSelection,
  COMMAND_PRIORITY_EDITOR,
  createCommand,
  LexicalCommand,
} from 'lexical';
import { useEffect } from 'react';

export interface ImagePayload {
  altText: string;
  caption?: string;
  height?: number;
  key?: string;
  maxWidth?: number;
  showCaption?: boolean;
  src: string;
  width?: number;
}

export const INSERT_IMAGE_COMMAND: LexicalCommand<ImagePayload> = createCommand('INSERT_IMAGE_COMMAND');

export class ImageNode {
  __src: string;
  __altText: string;
  __width: 'inherit' | number;
  __height: 'inherit' | number;
  __maxWidth: number;
  __showCaption: boolean;
  __caption: string;
  __key: string;

  static getType(): string {
    return 'image';
  }

  static clone(node: ImageNode): ImageNode {
    return new ImageNode(
      node.__src,
      node.__altText,
      node.__maxWidth,
      node.__width,
      node.__height,
      node.__showCaption,
      node.__caption,
      node.__key
    );
  }

  constructor(
    src: string,
    altText: string,
    maxWidth = 500,
    width?: 'inherit' | number,
    height?: 'inherit' | number,
    showCaption = false,
    caption = '',
    key?: string
  ) {
    this.__src = src;
    this.__altText = altText;
    this.__maxWidth = maxWidth;
    this.__width = width || 'inherit';
    this.__height = height || 'inherit';
    this.__showCaption = showCaption;
    this.__caption = caption;
    this.__key = key || '';
  }

  createDOM(): HTMLElement {
    const dom = document.createElement('figure');
    const img = document.createElement('img');
    img.setAttribute('src', this.__src);
    img.setAttribute('alt', this.__altText);
    img.style.maxWidth = '100%';
    img.style.width = this.__width === 'inherit' ? '100%' : `${this.__width}px`;
    img.style.height = this.__height === 'inherit' ? 'auto' : `${this.__height}px`;
    dom.appendChild(img);
    if (this.__showCaption) {
      const caption = document.createElement('figcaption');
      caption.textContent = this.__caption;
      dom.appendChild(caption);
    }
    return dom;
  }

  updateDOM(): false {
    return false;
  }

  getSrc(): string {
    return this.__src;
  }

  getAltText(): string {
    return this.__altText;
  }

  decorate(): JSX.Element {
    return (
      <figure>
        <img
          src={this.__src}
          alt={this.__altText}
          style={{
            maxWidth: '100%',
            width: this.__width === 'inherit' ? '100%' : `${this.__width}px`,
            height: this.__height === 'inherit' ? 'auto' : `${this.__height}px`,
          }}
        />
        {this.__showCaption && <figcaption>{this.__caption}</figcaption>}
      </figure>
    );
  }
}
