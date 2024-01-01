import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryCard from "./CategoryCard";

const Categories = () => {
    const [params, searchParams] = useSearchParams()
    const category = params.get("category")
    console.log(category);
    return (
        <Container>
            <div className="pt-4 flex items-center justify-between overflow-x-auto">
            {categories.map(items=> <CategoryCard 
            key={items.label} 
            label={items.label} 
            icon={items.icon}
            selected={category === items.label}
            ></CategoryCard>)}
            </div>
        </Container>
    );
};

export default Categories;