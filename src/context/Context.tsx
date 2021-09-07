import { createContext, useState } from "react";

interface Data {
  selectedGenreId: number;
  setSelectedGenreId: string;
  genres: string;
  setGenres: string;
}

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export const Context = createContext<Data>(
  {} as Data
);

export function ContextProvider({ children }) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  return (
    <Context.Provider
      value={{ selectedGenreId, setSelectedGenreId, genres, setGenres }}
    >
      {children}
    </Context.Provider>
  );
}
