export const ImageLink = ({ src, alt, href }) => {
  return (
    <a href={href} target="_blank">
      <img src={src} className="logo" alt={alt} />
    </a>
  );
};
