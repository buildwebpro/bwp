"use client";

import NextImage, { ImageProps as NextImageProps } from "next/image";
import { forwardRef } from "react";

export interface ImageProps extends Omit<NextImageProps, "crossOrigin"> {
  custom?: boolean; // Additional props can be added here if needed
}

const Image = forwardRef<HTMLImageElement, ImageProps>(({ custom, ...props }, ref) => {
  return <NextImage ref={ref} {...props} />;
});

Image.displayName = "Image";

export { Image };
