import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import differenceBy from 'lodash/differenceBy';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Delete from '@material-ui/icons/Delete';
import Add from '@material-ui/icons/Add';
import memoize from 'memoize-one';

import DataTable from 'react-data-table-component';


//import tableDataItems from '../constants/sampleDesserts';
//import DataTable from '../../../src/index';

const sortIcon = <ArrowDownward />;
const selectProps = { indeterminate: isIndeterminate => isIndeterminate };
const actions = (
    <IconButton
        color="primary"
    >
        <Add />
    </IconButton>
);
const contextActions = memoize(deleteHandler => (
    <IconButton
        color="secondary"
        onClick={deleteHandler}
    >
        <Delete />
    </IconButton>
));

const columns = memoize(() => [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
        grow: 2,
    },
    {
        name: 'Type',
        selector: 'type',
        sortable: true,
    },
    {
        name: 'Calories (g)',
        selector: 'calories',
        sortable: true,
        right: true,
    },
    {
        name: 'Fat (g)',
        selector: 'fat',
        sortable: true,
        right: true,
    },  
]);

class MaterialTable extends PureComponent {

    state = { selectedRows: [], toggleCleared: false,   };

    handleChange = state => {
        this.setState({ selectedRows: state.selectedRows });
    };

    handleRowClicked = row => {

        console.log(`${row.name} was clicked!`);
    }

    deleteAll = () => {
        const { selectedRows } = this.state;
        const rows = selectedRows.map(r => r.name);

        if (window.confirm(`Are you sure you want to delete:\r ${rows}?`)) {
            this.setState(state => ({ toggleCleared: !state.toggleCleared, data: differenceBy(state.data, state.selectedRows, 'name') }));
        }
    }

    // The row data is composed into your custom expandable component via the data prop
        //const ExpanableComponent = ({ "teste" }) => <img  />;
       
        

    render() {
        const { data, toggleCleared } = this.state;

        return (
            <Card style={{ height: '100%' }}>
                <DataTable
                    title="Desserts"
                    columns={columns()}
                    data={["fernando","fernando2"]}
                    //selectableRows
                    highlightOnHover
                    defaultSortField="name"
                    actions={actions}
                    contextActions={contextActions(this.deleteAll)}
                    sortIcon={sortIcon}
                    //selectableRowsComponent={Checkbox}
                    //selectableRowsComponentProps={selectProps}
                    onSelectedRowsChange={this.handleChange}
                    clearSelectedRows={toggleCleared}
                    onRowClicked={this.handleRowClicked}
                    pagination
                    expandableRows
                    expandableRowsComponent={<h1>tese</h1>}
                />
            </Card>
        );
    }
}
export default MaterialTable;

storiesOf('Material UI', module)
    .add('Override Default Components', () => <MaterialTable />);