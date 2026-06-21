'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import artworks from '@/data/artworks';

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="min-h-screen bg-white">
      <Navbar active="gallery" />

      {/* Lightbox */}
      {selected && (
  <div
    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
    onClick={() => setSelected(null)}
  >
    <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => setSelected(null)}
        className="absolute top-2 right-2 text-white text-2xl hover:text-rose-400 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center z-10"
      >
        ✕
      </button>
      <img
        src={selected.image}
        alt={selected.title}
        className="w-full rounded-2xl object-contain max-h-[80vh]"
      />
      <div className="mt-4 text-center text-white">
        <h3 className="text-xl font-bold">{selected.title}</h3>
        <p className="text-gray-400">{selected.medium}</p>
      
      </div>
    </div>
  </div>
)}

      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-2">Gallery</h2>
        <p className="text-center text-gray-400 mb-10">A collection of original works</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {artworks.map((art) => (
            <div key={art.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelected(art)}
            >
              <img
                src={art.image}
                alt={art.title}
                className="w-full object-contain bg-gray-50"
              />
              <div className="p-3 md:p-4">
                <h3 className="font-semibold text-sm md:text-lg">{art.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{art.medium}</p>
                <p className="text-gray-300 text-xs mt-1">{art.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}