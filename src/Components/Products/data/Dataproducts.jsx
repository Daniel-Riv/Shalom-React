import { useCallback, useEffect, useMemo, useState } from 'react';
import { client } from '../../../client/contenful';

export const Dataproducts = (product = '') => {
    const [isLoading, setIsLoading] = useState(false);
    const [img, setImg] = useState([]);

    const getCardProduct = async (product) => {
        setIsLoading(true);
        try {
            const response = await client.getEntries({ content_type: 'cardsProduct' });
            const responseData = response.items;
            if (!responseData) {
                setImg([]);
            }
            const cleanSlice = responseData.filter((item) => {
                return item.fields.nameCategoria === product;
            });
            const data = cleanSlice.map((slide) => {
                const { sys, fields } = slide;
                const { id } = sys;
                const { nameCategoria, nameProduct, price, imgProduct, desc } = fields;
                const { url } = imgProduct.fields.file;
                return { id, nameCategoria, nameProduct, price, url, desc };
            });
            setImg(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }



    useEffect(() => {
        getCardProduct(product);
    }, [product]);

    return {
        img
    }
}
