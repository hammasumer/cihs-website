import React, { useState } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { galleryImages, GalleryItem } from '../data/galleryData';

export const Gallery: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [viewAllOpen, setViewAllOpen] = useState(false);

  // In the desktop row, show 6 images matching the reference image layout
  const displayedImages = galleryImages.slice(0, 6);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-[#063B4A] text-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching reference: Title on left, View All Gallery button on right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Gallery
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-300 mt-1 font-medium">
              Moments That Inspire
            </p>
          </div>

          <div>
            <button
              onClick={() => setViewAllOpen(true)}
              className="inline-flex items-center gap-2 border border-[#16A34A] text-emerald-400 hover:bg-[#16A34A] hover:text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200"
            >
              <span>View All Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 6 Equal Images in One Row on Desktop (grid-cols-2 md:grid-cols-3 lg:grid-cols-6) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {displayedImages.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveImageIndex(idx)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group shadow-sm bg-[#042731] border border-white/10"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                <span className="text-[11px] font-semibold text-white truncate">
                  {item.title}
                </span>
              </div>
              <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-in fade-in"
          onClick={() => setActiveImageIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 rounded-lg"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black max-h-[70vh] flex items-center justify-center">
              <img
                src={galleryImages[activeImageIndex].image}
                alt={galleryImages[activeImageIndex].title}
                className="max-w-full max-h-[70vh] object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/75 transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/75 transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-3 text-center text-white">
              <p className="text-base font-semibold">
                {galleryImages[activeImageIndex].title}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {galleryImages[activeImageIndex].category} &bull; Image {activeImageIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* View All Gallery Grid Modal */}
      {viewAllOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-white text-[#063B4A] rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setViewAllOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg"
              aria-label="Close gallery dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[#16A34A] text-xs font-extrabold tracking-widest uppercase block mb-1">
              CAMPUS &amp; ACADEMICS
            </span>
            <h3 className="text-2xl font-bold text-[#063B4A] mb-4">
              All Gallery Moments
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {galleryImages.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setViewAllOpen(false);
                    setActiveImageIndex(idx);
                  }}
                  className="aspect-[4/3] rounded-xl overflow-hidden relative cursor-pointer group border border-slate-100 shadow-xs"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                    <p className="text-[11px] text-white font-medium truncate">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setViewAllOpen(false)}
                className="bg-[#063B4A] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#08495c] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
