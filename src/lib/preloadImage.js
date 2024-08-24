//
// This function preloads the image.
// Here is how it works. Once the image is loaded by the browser it is
// cached so we are creating a image object and assiging it the src of the image we want to
// preload.
//

export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
};
