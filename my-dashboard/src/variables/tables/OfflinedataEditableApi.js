import React, { useState, useEffect } from 'react';
import { Link } from '@material-ui/core';
import api from '../../services/api';

//components
import Table from "../../components/Table/Table";

const DataImoveis = () => {
    const [dataApi, setDataApi] = useState([]);

    useEffect(() => {
        (async function loadImoveis() {
            const response = await api.get('/imovel');
            setDataApi(response.data)
        }());

    }, [])

    var imoveis = dataApi.map((ap, index) => {
        let valorm2 = ap.preco / ap.areaUtil
        let linkHref = ap.link;
        console.log(imoveis)
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

    return (
        <Table
            tableHeaderColor="warning"
            tableHead={["ID", "Nome", "Preço", "Área Útil", "Valor/m2", "Bairro", "Link"]}
            tableData={imoveis}
        />
    )
}

export default DataImoveis;