import React from 'react';
import {useParams} from "react-router-dom";
import {AdidasItem} from "../components/pages/Adidas";
import {S} from './_styles'

type Props = {
    data: AdidasItem[]
}

export const Model = ({data}: Props) => {
    const {modelId} = useParams()
    const model = data[Number(modelId) - 1]

    return (
      <S.Model>
          <h4>{model.model}</h4>
          <img src={model.picture} alt={model.picture}/>
          <p>{model.price}</p>
          <p>{model.collection}</p>
      </S.Model>
    );
};
