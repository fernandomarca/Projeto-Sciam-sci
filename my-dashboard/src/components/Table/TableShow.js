import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { Link } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

import api from '../../services/api';

export default function MaterialTableDemo() {

    const [state, setState] = React.useState({
        columns: [
            { title: 'Nome', field: 'nome' },
            { title: 'Preço', field: 'preco', type: 'currency', currencySetting: { currencyCode: 'BRL', locale: 'pt-BR' } },
            {
                title: 'Area Útil', field: 'areaUtil', type: 'numeric', align: 'center'
            },
            { field: 'unid', editable: 'never', sorting: false, readonly: true, align: 'left' },
            { title: 'Valor/m2', field: 'valorm2', editable: 'never' },
            { title: 'Bairro', field: 'bairro' },
            { title: 'Cidade', field: 'municipio' },
            { title: 'Categoria', field: 'categoria' },
            { title: 'Tipo', field: 'tipo' },
            { title: 'Link', field: 'link', editable: 'never', sorting: false, },
        ],
        data: []
    });

    const [dataApi, setDataApi] = useState([]);
    const [linearProgress, setLinearProgress] = useState(true);

    useEffect(() => {
        loadImoveis();
    }, [])

    async function loadImoveis() {
        const response = await api.get('/imovel');
        setState((prevState) => {
            const data = prevState.data;
            data.pop();
            data.push(response.data);
            return { ...prevState };
        });
        var imoveis = state.data[0].map((ap) => {
            let valorm2 = ap.preco / ap.areaUtil
            let linkHref = ap.link
            return {
                id: `${ap._id}`,
                nome: `${ap.nome}`,
                preco: `${ap.preco}`,
                areaUtil: `${ap.areaUtil}`,
                unid: 'm2',
                valorm2: `${valorm2.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`,
                bairro: `${ap.bairro}`,
                municipio: `${ap.municipio}`,
                categoria: `${ap.categoria}`,
                tipo: `${ap.tipo}`,
                link: linkHref === undefined ? null : <Link target='_blank' rel='noopener' href={linkHref} >Link do Anúncio</Link>,
            }
        })
        setDataApi(imoveis);
        setLinearProgress(false)
    };

    return (
        <div>
            {linearProgress ?
                <div ><LinearProgress />
                    <LinearProgress />
                </div> : null
            }
            <MaterialTable
                title=""
                columns={state.columns}
                data={dataApi}
                localization={{
                    body: {
                        emptyDataSourceMessage: 'Nenhum registro para exibir',
                        addTooltip: 'adicionar',
                        deleteTooltip: 'excluir',
                        editTooltip: 'editar',
                        editcancelTooltip: 'cancelar',

                        editRow: {
                            saveTooltip: 'salvar',
                            cancelTooltip: 'cancelar',
                            deleteText: 'Tem certeza de que deseja excluir?'
                        },
                    },
                    grouping: {
                        groupedBy: 'Agrupado por:',
                        placeholder: 'Arraste os cabeçalhos aqui para agrupar!'
                    },
                    toolbar: {
                        searchTooltip: 'Pesquisar',
                        searchPlaceholder: 'Pesquisar',
                        showColumnsTitle: 'Mostrar colunas',
                        addRemoveColumns: 'Adicionar ou Remover Colunas'
                    },
                    pagination: {
                        labelRowsSelect: 'linhas',
                        labelDisplayedRows: '{count} de {from}-{to}',
                        firstTooltip: 'Primeira página',
                        previousTooltip: 'Página anterior',
                        nextTooltip: 'Próxima página',
                        lastTooltip: 'Última página'
                    }
                }}
                options={{
                    grouping: true,
                    columnsButton: true,
                    paginationType: "stepped",
                    searchFieldVariant: "outlined",
                    padding: 'dense',
                }}
            />
        </div>
    );
}
