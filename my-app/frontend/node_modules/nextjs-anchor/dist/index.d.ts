import { LinkProps } from 'next/link';
import React from 'react';
declare type AnchorProps = LinkProps & {
    className?: string;
    children: any;
    style?: React.StyleHTMLAttributes<any>;
};
export declare const Anchor: ({ className, children, style, href, as, locale, passHref, prefetch, replace, scroll, shallow }: AnchorProps) => JSX.Element;
export {};
