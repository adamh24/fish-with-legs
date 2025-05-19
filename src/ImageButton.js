const ImageButton = ({ imageSrc, altText, onClick, title }) => {
    return (
      <button
        className="image-button"
        onClick={onClick}
        style={{
            backgroundImage: `url(${imageSrc})`
        }}
        aria-label={altText} // For accessibility
      >
        <span className="image-button-title">{title}</span>
      </button>
    );
  };
  
  export default ImageButton;