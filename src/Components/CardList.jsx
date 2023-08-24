import React from 'react'
import Card from './Card';

const CardList = ({coresLista}) => {
  return (
    <ul>
        { coresLista && (
        coresLista.map((cores, index) => {
            return (
                <Card key={index} cores={cores} />
            )
        })
        )}
    </ul>
  )
}

export default CardList