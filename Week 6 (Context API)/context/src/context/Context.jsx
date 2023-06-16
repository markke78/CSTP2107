/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
 
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const CLIENT_SECRET = 'kmxQLQODHhmKbfbzYqmoO04IcOqEvULysKnJawvqvxo';

  const [allPhotos, setAllPhotos] = useState([])

  useEffect(() => {
    getPhotosFromSplash();
  }, []);

  const getPhotosFromSplash = async () => {
    const res = await fetch(`https://api.unsplash.com/photos/?client_id=${CLIENT_SECRET}`);
    const data = await res.json();
    const requiredData = data.map((item) => {
      return {
        image: item.urls.full,
        description: item.alt_description,
        isFavorite: false,
        id: item.id,
      }
    })
    setAllPhotos(requiredData);
  }
 
    return (
        <Context.Provider value={{ allPhotos, setAllPhotos }}>
            {children}
        </Context.Provider>
    );
};