import { ReactElement, createContext, useState } from "react";

interface ICategoryContext {
  selectedCategoryId: string;
  setSelectedCategory: (selectedCategory: string) => void;
}

interface ICategoryContextProvider {
  children: ReactElement;
}

export const CategoryContext = createContext({} as ICategoryContext);

export function CategoryContextProvider({ children }: ICategoryContextProvider): ReactElement {
  const [selectedCategoryId, setCategoryId] = useState<string>("");

  const setSelectedCategory = (selectedCategory: string) => setCategoryId(selectedCategory);

  const values: ICategoryContext = {
    selectedCategoryId,
    setSelectedCategory,
  };

  return <CategoryContext.Provider value={values}>{children}</CategoryContext.Provider>;
}
