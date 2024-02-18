import React from 'react';
import {useParams} from "react-router-dom";
import {AdidasItem} from "../components/pages/Adidas";
import {S} from './_styles'
import {NotFoundModel} from "../components/pages/NotFoundModel";

type Props = {
    data: AdidasItem[]
}

export const Model = ({data}: Props) => {
    const {modelId} = useParams()
    const model = data.find(item => item.id === modelId)


    return (
      model
        ? (<S.Model>
            <h4>{model.model}</h4>
            <img src={model.picture} alt={model.picture}/>
            <p>{model.price}</p>
            <p>{model.collection}</p>
        </S.Model>)
        : <NotFoundModel/>
    );
};
