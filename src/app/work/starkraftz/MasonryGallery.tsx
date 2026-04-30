"use client";
import Masonry from "react-masonry-css";

const breakpoints = { default: 3, 1024: 3, 640: 1 };

export default function MasonryGallery() {
  return (
    <section className="cs-masonry-gallery">
      {/* eslint-disable @next/next/no-img-element */}
      <Masonry
        breakpointCols={breakpoints}
        className="cs-masonry-gallery__grid"
        columnClassName="cs-masonry-gallery__col"
      >
        {Array.from({ length: 13 }, (_, i) => (
          <img
            key={i}
            src={`/images/case-studies/starkraftz/gal/${i + 1}.svg`}
            alt={`Illustration ${i + 1}`}
            className="cs-masonry-gallery__img"
          />
        ))}
      </Masonry>
      {/* eslint-enable @next/next/no-img-element */}
    </section>
  );
}
