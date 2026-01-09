type Props = {
  name: string;              // image name without extension
  alt: string;
  width: number;
  height: number;
  priority?: boolean;        // true for LCP image
};

export function OptimizedImage({
  name,
  alt,
  width,
  height,
  priority = false,
}: Props) {
  return (
    <picture>
      {/* AVIF – best compression */}
      <source
        type="image/avif"
        srcSet={`
          /images/avif/${name}-400.avif 400w,
          /images/avif/${name}-800.avif 800w,
          /images/avif/${name}-1600.avif 1600w
        `}
        sizes="(max-width: 768px) 90vw, 1200px"
      />

      {/* WebP – fallback */}
      <source
        type="image/webp"
        srcSet={`
          /images/webp/${name}-400.webp 400w,
          /images/webp/${name}-800.webp 800w,
          /images/webp/${name}-1600.webp 1600w
        `}
        sizes="(max-width: 768px) 90vw, 1200px"
      />

      {/* JPG/PNG ultimate fallback */}
      <img
        src={`/images/original/${name}.jpg`}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchpriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}
