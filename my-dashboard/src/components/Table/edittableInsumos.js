import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import LinearProgress from '@material-ui/core/LinearProgress';

import api from '../../services/api';

export default function MaterialTableDemo() {
    const tableRef = React.createRef();

    const [state, setState] = React.useState({
        columns: [
            { title: 'Código', field: 'codigo', align: 'left', sorting: false, },
            { title: 'Descrição', field: 'descricaoInsumo', align: 'center', sorting: false, },
            { title: 'Unidade', field: 'unidade', sorting: false, align: 'center' },
            { title: 'Tipo', field: 'tipo', sorting: false, align: 'center' },
            { title: 'Valor', field: 'precoMed', align: 'center', sorting: false, type: 'currency', currencySetting: { currencyCode: 'BRL', locale: 'pt-BR' } },
        ],
        data: []
    });

    const [dataApi, setDataApi] = useState([]);
    const [linearProgress, setLinearProgress] = useState(true);

    useEffect(() => {
        loadInsumos();
    }, [])

    async function loadInsumos() {
        const response = await api.get(`/insumos/proprios/search`);
        setDataApi(response.data);
        setLinearProgress(false);
    }

    async function handleDelete(oldData) {

        try {
            let id = oldData._id;
            await api.delete(`/insumos/proprios/${id}`)
            setDataApi(dataApi.filter(insumo => insumo._id !== id));
        } catch (err) {
            alert('erro ao deletar:' + err)
        }
    }

    async function handleAdd(newData) {
        try {
            await api.post('/insumos/proprios', newData)

        } catch (err) {
            alert('erro ao Cadastrar:' + err)
        }
    }
    async function handleUpdate(newData, oldData) {
        try {
            if (oldData) {
                let id = oldData._id;
                //console.log(typeof newData.precoMed);
                await api.put(`/insumos/proprios/${id}`, newData);
            };
        } catch (err) {
            alert('erro ao Atualizar:' + err);
        }
    }

    return (
        <div>
            {linearProgress ?
                <div ><LinearProgress />
                    <LinearProgress />
                </div> : null
            }
            <MaterialTable
                tableRef={tableRef}
                title="Criar insumo próprio"
                columns={state.columns}
                data={dataApi}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve(handleAdd(newData));
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve(handleUpdate(newData, oldData));
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve(handleDelete(oldData));
                            }, 600);
                        }),
                }}
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
                    paginationType: "stepped",
                    searchFieldVariant: "outlined",
                    padding: 'dense',
                }}
                actions={[
                    {
                        icon: 'refresh',
                        tooltip: 'Refresh Data',
                        isFreeAction: true,
                        onClick: () => loadInsumos(),
                    }
                ]}
            />
        </div>
    );
}
