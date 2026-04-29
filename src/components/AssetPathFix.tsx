"use client";

import Script from 'next/script';

export default function AssetPathFix() {
  return (
    <>
      <Script id="assetPathFix" strategy="afterInteractive">
        {`
          (function() {
            function fixImagePaths() {
              const basePath = window.location.pathname.startsWith('/Team-Volante') ? '/Team-Volante' : '';
              const images = document.querySelectorAll('img[src^="/imagesvolante"], img[src^="/Team-Volante/imagesvolante"]');
              const videos = document.querySelectorAll('video source[src^="/imagesvolante"], video source[src^="/Team-Volante/imagesvolante"]');
              const links = document.querySelectorAll('a[href^="/feature"], a[href^="/surprise"], a[href^="/Team-Volante/"], a[href^="/Team-Volante/feature"], a[href^="/Team-Volante/surprise"]');
              
              // Fix image paths
              images.forEach(img => {
                const src = img.getAttribute('src');
                img.setAttribute('src', \`\${basePath}\${src}\`);
              });
              
              // Fix video paths
              videos.forEach(source => {
                const src = source.getAttribute('src');
                source.setAttribute('src', \`\${basePath}\${src}\`);
              });
              
              // Fix internal links
              links.forEach(link => {
                const href = link.getAttribute('href');
                link.setAttribute('href', \`\${basePath}\${href}\`);
              });
            }
            
            // Run once when loaded
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', fixImagePaths);
            } else {
              fixImagePaths();
            }
            
            // Also run after each navigation in case of client-side routing
            window.addEventListener('popstate', fixImagePaths);
          })();
        `}
      </Script>
    </>
  );
}