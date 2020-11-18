import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { Link } from '@material-ui/core';

const ValorMax = () => {

    const [imoveis, setImoveis] = useState([]);

    useEffect(() => {
        load();
    }, []);

    async function load() {
        const response = await api.get('/imovel');
        setImoveis(response.data);
    }

    const arrayPrecos = imoveis.map((ap) => ap.preco)
    const valorMax = Math.max(...arrayPrecos).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <>{valorMax}</>
    )
}

/*
const dataTab = imoveis.map((ap, index) => {
    let valorm2 = ap.preco / ap.areaUtil
    let linkHref = ap.link;

    return [
        `${index + 1}`,
        `${ap.nome}`,
        `${ap.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`,
        `${ap.areaUtil} m2`,
        `${valorm2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`,
        `${ap.bairro}`,
        <Link target='_blank' rel='noopener' href={linkHref} >Link do Anúncio</Link>
    ]
})

console.log(dataTab);
*/
export default ValorMax;