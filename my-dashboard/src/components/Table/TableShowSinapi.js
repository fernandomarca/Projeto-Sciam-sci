import React from 'react';
import MaterialTable from 'material-table';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function MaterialTableDemo(props) {

    const { load, initialPage } = props;

    const [state, setState] = React.useState({
        columns: [
            { title: 'Código', field: 'codigo', align: 'left', sorting: false },
            { title: 'Descrição', field: 'descricaoInsumo', align: 'justify', sorting: false, },
            { title: 'Unidade', field: 'unidade', editable: 'never', sorting: false, readonly: true, align: 'center' },
            { title: 'Preço', field: 'precoMed', type: 'currency', currencySetting: { currencyCode: 'BRL', locale: 'pt-BR' }, align: 'center', sorting: false, },
        ],
        data: []
    });

    return (
        <div>
            {load ?
                <div ><LinearProgress />
                    <LinearProgress />
                </div> : null}
            <MaterialTable
                title=""
                columns={state.columns}
                data={props.insumos}
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
                    padding: 'dense',
                    paginationType: "stepped",
                    searchFieldVariant: "outlined",
                    initialPage: initialPage
                }}
            />
        </div>
    );
}
