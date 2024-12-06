import React from 'react';
import kayeImage from '../assets/kaye-image.jpg';

function ImageHeader() {
  return (
    <div class="bg-white mx-8 mb-8 dark:bg-primary rounded-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
    <div class="flex items-center space-x-4">
      <img src={kayeImage} alt="Gregory Azevedo" width="120" height="160" class="flex-none rounded-lg bg-slate-100" loading="lazy" />
      <div class="min-w-0 flex-auto space-y-1 font-semibold">
        <p class="text-secondary dark:text-secondary text-sm leading-6">
       U.S. Navy Veteran
        </p>
        <h2 class="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate">
          Business Analyst Extraordinaire
        </h2>
        <p class="text-slate-900 dark:text-slate-50 text-lg">
          Gregory Azevedo - But my friends call me Kaye.
        </p>
      </div>
    </div>
  </div>
    
  );
}

export default ImageHeader;