import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import LinearProgress from '@material-ui/core/LinearProgress';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function Row(props) {
    const { row, history } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <>

            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">{row.CODIGO_DA_COMPOSICAO}</TableCell>
                <TableCell>{row.DESCRICAO_DA_COMPOSICAO}</TableCell>
                <TableCell align="center">{row.SIGLA_DA_CLASSE}</TableCell>
                <TableCell align="center">{row.UNIDADE}</TableCell>
                <TableCell align="right">{row.createdAt}</TableCell>
                <TableCell align="right">{row.CUSTO_TOTAL}</TableCell>
            </TableRow>

            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Detalhamento
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Tipo Item</TableCell>
                                        <TableCell>Código</TableCell>
                                        <TableCell>Descrição</TableCell>
                                        <TableCell>Tipo</TableCell>
                                        <TableCell>Unidade</TableCell>
                                        <TableCell align="right">Valor Unit.</TableCell>
                                        <TableCell align="right">Coeficiente</TableCell>
                                        <TableCell align="right">Valor(R$)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {history.map((history) => (
                                        <TableRow key={history._id}>
                                            <TableCell component="th" scope="row">
                                                {history.TIPO_ITEM}
                                            </TableCell>
                                            <TableCell>{history.CODIGO_ITEM}</TableCell>
                                            <TableCell>{history.DESCRIÇÃO_ITEM}</TableCell>
                                            <TableCell align="right">{history.SIGLA_DO_TIPO_1}</TableCell>
                                            <TableCell align="right">{history.UNIDADE}</TableCell>
                                            <TableCell align="right">{history.PRECO_UNITARIO}</TableCell>
                                            <TableCell align="right">{history.COEFICIENTE}</TableCell>
                                            <TableCell align="right">{history.CUSTO_TOTAL}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default function CollapsibleTable({ composicoes, load, initialPage }) {

    const composicaoRow = composicoes.filter((row) => !row.CODIGO_ITEM);

    const composicaoHistory = composicoes.filter((row) => row.CODIGO_ITEM);


    return (
        <>
            {load ?
                <div ><LinearProgress />
                    <LinearProgress />
                </div> : null}
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Código</TableCell>
                            <TableCell align="justify">Descrição</TableCell>
                            <TableCell align="right">Tipo&nbsp;</TableCell>
                            <TableCell align="right">Unidade&nbsp;</TableCell>
                            <TableCell align="right">Data&nbsp;</TableCell>
                            <TableCell align="right">Valor&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            composicaoRow.map((item) => {
                                const history = composicaoHistory.filter((row) => row.CODIGO_DA_COMPOSICAO === item.CODIGO_DA_COMPOSICAO);
                                return (
                                    <Row
                                        key={item._id}
                                        row={item}
                                        history={history}
                                    />
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

/**
 *
 *
 * {composicaoRow.map((row) => (
                                <Row
                                    key={row._id}
                                    row={row}
                                    history={[]}
                                />
                        ))}
 */