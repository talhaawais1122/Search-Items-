import axios from "axios";

const UNSPLASH_API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

const SearchImage = async ( term="") => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: `Client-ID alXYTl5LdOI66uCveg5TpchJhzwWRs6W4LU8qU2M-SQ`, 
      },
      params: {
        query: term, 
      }
    }); 
    console.log(response.data)
    console.log(term)
    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

export default SearchImage;
