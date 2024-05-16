import { PHASE_PRODUCTION_BUILD } from 'next/constants.js';

export default function (phase, { defaultConfig }) {
  const isProduction = phase === PHASE_PRODUCTION_BUILD;

  const nextConfig = {
    reactStrictMode: true,
  };

  if (isProduction) {
    // Production mode
    nextConfig.assetPrefix = 'https://fe-next-s33f9p.bridevstudio.bbri.io/proxy/3000/';
  } else {
    // Development mode
    nextConfig.rewrites = async () => {
      return [
        {
          source: '/api/:path*',
          destination: 'https://be-node-lfuktw.bridevstudio.bbri.io/proxy/3001/:path*',
        },
      ];
    };
  }

  return nextConfig;
}
