'use client';

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export function DisplayLottie({ animationData }: { animationData: unknown }) {
  return (
    <div className="w-full h-full flex justify-center items-center pointer-events-none">
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
}
