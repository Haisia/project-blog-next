import type { MDXComponents } from 'mdx/types';
import NextImage from "@/components/mdx/nextImage";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: (props) => <NextImage {...props} />,
  };
}
