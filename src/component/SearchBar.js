import "./SearchBr.css";
import "./ImageList.css"; 
import { useState } from "react";
import SearchImage from "../Api";

const SearchBar = ({ onSubmit }) => {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const result = await SearchImage(term);
      setImages(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onChanged = (event) => {
    setTerm(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <label id="label">
          <h1>Search Images</h1>
        </label>
        <input id="input" value={term} onChange={onChanged} />
        <button type="button" onClick={handleClick}>
          Search
        </button>
      </form>
      <div>
        ImageList: {images.length}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="image-list-container"> 
              {images.map((image) => (
                <div key={image.id} className="image-list-item">
                  <img src={image.urls.small} alt={`Image ${image.id}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
