import { useCallback, useEffect, useMemo, useState } from 'react';
import { client } from '../../../client/contenful';

export const DetailProdut = (detailProduct = '') => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    const cleanImg = useCallback((rawData) => {
         const cleanSlice = rawData.filter((item) => {
            return item.fields.nameProduct === detailProduct.detailProduct;
        });
        const data = cleanSlice.map((item) => {
            const { sys, fields } = item;
            const { id } = sys;
            const { nameProduct, price, stock, descDetail,img1,img2,img3,img4 } = fields;
            const {value} = descDetail.content[0].content[0];
            const { url } = img1.fields.file;
            const { url :url2 } = img2.fields.file;
            const { url : url3 } = img3.fields.file;
            const { url : url4} = img4.fields.file;

            return{ id, nameProduct, price, stock, descDetail, img1,img2,img3,img4, value, url, url2, url3, url4 };
        })
        setData(data);  
    }, []);

    const getImg = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await client.getEntries({ content_type: 'detailProduct' });
            const responseData = response.items;
            if (responseData) {
                cleanImg(responseData);
            } else {
                setData([]);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }, [cleanImg]);


    useEffect(() => {
        getImg();
    }, [getImg]);

    return {
        data
    }
}
