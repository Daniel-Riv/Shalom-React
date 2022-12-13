import { useCallback, useEffect, useMemo, useState } from 'react';
import { client } from '../../../client/contenful';


export const FilterCategory = (product = '') => {
    const [isLoading, setIsLoading] = useState(false);
    const [nameCategory, setNameCategory] = useState([]);

    const getImgCategory = async (product) => {
        setIsLoading(true);
        try {
            const response = await client.getEntries({ content_type: 'categoria' });
            const responseData = response.items;
            if (!responseData) {
                setNameCategory([]);
            }
            const cleanData = responseData.filter((item) => {
                return item.fields.category === product.product;
            });
            const { sys, fields } = cleanData[0];
            const { id } = sys;
            const { category } = fields;
            const { url } = fields.imgCateogory.fields.file;
            setNameCategory({ id, url, category });
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getImgCategory(product);
    }, [product]);


    return {
        nameCategory
    }
}
