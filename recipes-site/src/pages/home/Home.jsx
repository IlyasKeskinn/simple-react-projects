import "./Home.css";
import useFetch from "../../hooks/useFetch"
import { ProductCard } from "../../components/ProductCard";
import {Loading} from "../../components/Loading"
import { Alert } from "../../components/Alert";
export const Home = () => {

    const { data: recipes, isLoading, error} = useFetch("http://localhost:3000/tarifler");

    return (
        <div className="row mt-4">
            {
                isLoading && <Loading/>

            }
            {
                error && <Alert errorMessage = {error}/>
            }
            {
                recipes.map(card => {
                    return (<div key={card.id} className="col-md-3 my-3">
                        <ProductCard recipe={card}></ProductCard>
                    </div>);
                })
            }
        </div>
    );
}