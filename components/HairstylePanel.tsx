/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { CheckCircleIcon } from './icons';

interface HairstylePanelProps {
  onHairstyleSelect: (hairstyle: string | null) => void;
  currentHairstyle: string | null;
  isLoading: boolean;
}

const HAIRSTYLES = [
  "Wolf Cut",
  "Mullet Moderno",
  "Franja Cortina",
  "Corte Shag",
  "Tranças Box Braids",
  "Taper Fade",
  "Bob Assimétrico",
  "Curto Cacheado",
];

const HairstylePanel: React.FC<HairstylePanelProps> = ({ onHairstyleSelect, currentHairstyle, isLoading }) => {
  return (
    <div className="pt-6 border-t border-gray-400/50">
      <h2 className="text-xl font-serif tracking-wider text-gray-800 mb-3">Penteados</h2>
      <div className="grid grid-cols-3 gap-3">
        {/* Button to remove hairstyle */}
        <button
          onClick={() => onHairstyleSelect(null)}
          disabled={isLoading || !currentHairstyle}
          className={`relative aspect-square border rounded-lg flex items-center justify-center p-2 text-center text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 group disabled:opacity-60 disabled:cursor-not-allowed ${
            !currentHairstyle ? 'border-gray-800 bg-gray-100 font-bold' : 'border-gray-300 bg-white hover:border-gray-500'
          }`}
          aria-label="Cabelo Original"
        >
          Cabelo Original
        </button>
        {HAIRSTYLES.map((style) => {
          const isActive = currentHairstyle === style;
          return (
            <button
              key={style}
              onClick={() => onHairstyleSelect(style)}
              disabled={isLoading || isActive}
              className="relative aspect-square border rounded-lg overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 group disabled:opacity-60 disabled:cursor-not-allowed bg-white hover:border-gray-500"
              aria-label={`Selecionar ${style}`}
            >
              <div className="w-full h-full flex items-center justify-center p-1">
                <p className="text-gray-800 text-xs font-bold text-center">{style}</p>
              </div>
              {isActive && (
                <div className="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HairstylePanel;