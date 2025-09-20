/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { SavedOutfit } from '../types';
import { Trash2Icon } from './icons';

interface SavedOutfitsPanelProps {
  savedOutfits: SavedOutfit[];
  onLoadOutfit: (outfitId: string) => void;
  onDeleteOutfit: (outfitId: string) => void;
  isLoading: boolean;
}

const SavedOutfitsPanel: React.FC<SavedOutfitsPanelProps> = ({ savedOutfits, onLoadOutfit, onDeleteOutfit, isLoading }) => {
  return (
    <div className="pt-6 border-t border-gray-400/50">
      <h2 className="text-xl font-serif tracking-wider text-gray-800 mb-3">Looks Salvos</h2>
      {savedOutfits.length === 0 ? (
        <p className="text-center text-sm text-gray-500 pt-4">Seus looks salvos aparecerão aqui. Clique em "Salvar Look" para começar.</p>
      ) : (
        <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
          {savedOutfits.map((outfit) => (
            <div key={outfit.id} className="flex items-center justify-between bg-white/50 p-2 rounded-lg border border-gray-200/80 animate-fade-in">
              <div className="flex items-center overflow-hidden gap-3">
                <img src={outfit.previewUrl} alt="Preview do look salvo" className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
                <div className="flex flex-col items-start">
                    <span className="font-semibold text-sm text-gray-800 truncate">
                        {outfit.hairstyle || 'Cabelo Original'}
                    </span>
                     <span className="text-xs text-gray-500">
                       Salvo em {new Date(outfit.timestamp).toLocaleDateString()}
                    </span>
                    <button
                      onClick={() => onLoadOutfit(outfit.id)}
                      disabled={isLoading}
                      className="text-left text-sm font-bold text-indigo-600 hover:underline disabled:opacity-50 mt-1"
                    >
                      Carregar
                    </button>
                </div>
              </div>
              <button
                onClick={() => onDeleteOutfit(outfit.id)}
                className="flex-shrink-0 text-gray-500 hover:text-red-600 transition-colors p-2 rounded-md hover:bg-red-50"
                aria-label="Deletar look"
              >
                <Trash2Icon className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedOutfitsPanel;
