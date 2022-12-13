import { useCallback, useEffect, useState } from "react";
import { client } from "../../../../client/contenful";

export const useData = () => {
    /* eslint-disable */
    const [isCard, setIsCard] = useState(false);
    const [categories, setCard] = useState([]);

    const getCard = async () => {
        setIsCard(true);
        try {
            const response = await client.getEntries({ content_type: 'cardsCategory' });
            const responseData = response.items;
            if (!responseData) {
                setCard([]);
            }
            const cleanSlice = responseData.map((slide) => {
                const { sys, fields } = slide;
                const { id } = sys;
                const { categoria, descripcion } = fields;
                const { imagen } = fields;
                const { url } = imagen.fields.file;
                return { id, categoria, descripcion, url };
            })
            setCard(cleanSlice);
            setIsCard(false);
        } catch (error) {
            console.log(error);
            setIsCard(false);
        }
    }

    useEffect(() => {
        getCard();
    }, []);

    return {
        categories
    }
}