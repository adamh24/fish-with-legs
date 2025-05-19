const ImageButton = ({ imageSrc, altText, onClick }) => {
    return (
      <button
        className="image-button"
        onClick={onClick}
        style={{
            backgroundImage: `url(${imageSrc})`
        }}
        aria-label={altText} // For accessibility
      >
        <span className="image-button-title">Title</span>
      </button>
    );
  };
  
  export default ImageButton;