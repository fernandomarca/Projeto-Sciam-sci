<Link target='_blank' rel='noopener' href={linkHref} >Link do Anúncio</Link>
dataApi.filter(imovel => imovel.id !== id);

function RefreshData() {
    const tableRef = React.createRef();

    return (
        <MaterialTable
            title="Refresh Data Preview"
            tableRef={tableRef}
            columns={[
                {
                    title: 'Avatar',
                    field: 'avatar',
                    render: rowData => (
                        <img
                            style={{ height: 36, borderRadius: '50%' }}
                            src={rowData.avatar}
                        />
                    ),
                },
                { title: 'Id', field: 'id' },
                { title: 'First Name', field: 'first_name' },
                { title: 'Last Name', field: 'last_name' },
            ]}
            data={query =>
                new Promise((resolve, reject) => {
                    let url = 'https://reqres.in/api/users?'
                    url += 'per_page=' + query.pageSize
                    url += '&page=' + (query.page + 1)
                    fetch(url)
                        .then(response => response.json())
                        .then(result => {
                            resolve({
                                data: result.data,
                                page: result.page - 1,
                                totalCount: result.total,
                            })
                        })
                })
            }
            actions={[
                {
                    icon: 'refresh',
                    tooltip: 'Refresh Data',
                    isFreeAction: true,
                    onClick: (event) => alert("You want to add a new row")
                    //onClick: () => tableRef.current && tableRef.current.onQueryChange(),
                }
            ]}
        />
    )
}


var imoveis = state.data[0].map((ap) => {
    let valorm2 = ap.preco / ap.areaUtil
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
    }