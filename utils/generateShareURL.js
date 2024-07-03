import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const generateShareUrls = (imageFilename, text) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_URL}/images/${imageFilename}`;
  const encodedImageUrl = encodeURIComponent(imageUrl);
  const encodedText = encodeURIComponent(text);

  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedImageUrl}&quote=${encodedText}`,
    x: `https://x.com/intent/tweet?url=${encodedImageUrl}&text=${encodedText}`,
    linkedin: `https://www.linkedin.com/shareArticle?url=${encodedImageUrl}&summary=${encodedText}`,
    vk: `https://vk.com/share.php?url=${encodedImageUrl}&title=${encodedText}`,
  };
};

export default generateShareUrls;
