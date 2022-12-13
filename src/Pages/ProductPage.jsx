import { useParams } from 'react-router-dom'
import { ListCardProduct } from '../Components/Products/CardsProduct/ListCardProduct';
import { NameCategory } from '../Components/Products/CardsProduct/NameCategory';

export const ProductPage = () => {
    const { product } = useParams();
    return (
        <>
            <NameCategory product={product} />
            <div className="container1">
                <div className="row1">
                    <ListCardProduct product={product} />
                </div>
            </div>
        </>
    )
}
