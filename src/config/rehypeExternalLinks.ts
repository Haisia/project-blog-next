import { visit } from 'unist-util-visit';

export default function rehypeExternalLinks() {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'a' && node.properties && typeof node.properties.href === 'string') {
        node.properties.target = '_blank';
        node.properties.rel = 'noopener noreferrer';
      }
    });
  };
}