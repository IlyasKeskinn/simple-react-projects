import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Loading } from "../../components/Loading";
import { ProductCard } from "../../components/ProductCard";
import { Alert } from "../../components/Alert";

export const Search = () => {
    const [searchParams] = useSearchParams();

    const query  = searchParams.get("q");
    const url = `http://localhost:3000/tarifler?q=${query}`
    const {data,isLoading, error} = useFetch(url);
    return (
        <div className="row mt-4">
            {
                isLoading && <Loading/>
            }
            {
                error && <Alert errorMessage={error}/>
            }
            {
                data.length === 0 
                ? <div>Not found recipes</div> 
                :data.map((product) => {
                    return (
                        <div key={product.id} className="col-md-3 my-3">
                            <ProductCard recipe={product}/>
                        </div>
                    );
                }) 
            }
        </div>
    );
}