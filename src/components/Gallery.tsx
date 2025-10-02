"use client";

import Image from "next/image";
import { pushEvent } from "@/lib/analytics";

const galleryItems = [
  { src: "gallery-1.png", alt: "レポート画面" },
  { src: "gallery-2.png", alt: "候補リスト" },
  { src: "gallery-3.png", alt: "Why? 詳細" },
  { src: "gallery-4.png", alt: "アウトリーチ下書き" },
  { src: "gallery-5.png", alt: "共有用サマリー" },
];

export const Gallery = () => {
  const handleView = (index: number) => {
    pushEvent({ event: "gallery_view", index });
  };

  return (
    <section id="gallery" className="section-container">
      <div className="flex flex-col gap-3 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          PRODUCT GLIMPSE
        </span>
        <h2 className="text-3xl font-bold text-ink">UIをざっと確認</h2>
        <p className="text-ink/70">
          主要なスクリーンをピックアップ。体験イメージを掴んでください。
        </p>
      </div>
      <div className="-mx-5 overflow-x-auto px-5">
        <div className="flex snap-x snap-mandatory gap-6">
          {galleryItems.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className="group relative w-[280px] flex-shrink-0 snap-center overflow-hidden rounded-2xl bg-white shadow-card focus:outline-none focus:ring-2 focus:ring-brand"
              onClick={() => handleView(index)}
            >
              <Image
                src={`/images/${item.src}`}
                alt={item.alt}
                width={1600}
                height={900}
                className="h-full w-full object-cover transition group-hover:scale-[1.02]"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink">
                Tap to zoom (準備中)
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
