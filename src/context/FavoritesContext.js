import React, { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();
export const FavoritesProvider = ({ children }) => {
	const localData = localStorage.getItem("favoritedBookIds");
	const [favoritedBookIds, setFavoritedBookIds] = useState(localData ? JSON.parse(localData) : []);
	useEffect(() => {
		localStorage.setItem("favoritedBookIds", JSON.stringify(favoritedBookIds));
	});
	const addToFavorites = (id) => {
		setFavoritedBookIds([...favoritedBookIds, id]);
	};
	const removeFromFavorites = (id) => {
		const newFavorites = favoritedBookIds.filter((f) => f !== id);
		setFavoritedBookIds(newFavorites);
	};

	return (
		<FavoritesContext.Provider
			value={{
				favoritedBookIds,
				addToFavorites,
				removeFromFavorites,
			}}>
			{children}
		</FavoritesContext.Provider>
	);
};
export default FavoritesProvider;
