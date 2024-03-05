import { useContext, useEffect, useState } from "react";
import { IProgramCategoryProps } from "../interfaces";
import { get } from "../utilities/http";
import { CategoryContext } from "../contexts/CategoryContextProvider";

const Categories = () => {
  const [categories, setCategories] = useState<IProgramCategoryProps[]>();
  const { setSelectedCategory } = useContext(CategoryContext);

  //send selected category to App
  function getSelectedCategory(selectedCategoryId: string) {
    setSelectedCategory(selectedCategoryId);
  }

  //fetch all categories
  useEffect(() => {
    async function fetchCategories() {
      const data = (await get("https://api.sr.se/api/v2/programcategories?format=json/")) as any;
      const fetchedCategories: any = data.programcategories.map((fetchedCategory: IProgramCategoryProps) => {
        return fetchedCategory;
      });
      setCategories(fetchedCategories);
    }
    fetchCategories().then((categories) => categories);
  }, []);

  //show category dropdown
  return (
    <section id="categorySection">
      <label id="categoryLabel">Program kategori</label>
      <select onChange={(e) => getSelectedCategory(e.target.value)} id="categorySelectBox">
        <option key={0} value={0}>
          Alla
        </option>
        {categories?.map((category: any) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </section>
  );
};

export default Categories;
