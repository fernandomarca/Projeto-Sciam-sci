/*eslint-disable*/
import React from "react";
// react plugin for creating charts

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
//icons
import Assignment from "@material-ui/icons/Assignment";
import PlaylistAddCheck from "@material-ui/icons/PlaylistAddCheck";
import AddBox from "@material-ui/icons/AddBox";
// core components
import Button from "../../components/CustomButtons/Button";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import EditTable from '../../components/Table/edittable'
import Tasks from "../../components/Tasks/Tasks";
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import Danger from "../../components/Typography/Danger";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";
import CardAvatar from "../../components/Card/CardAvatar";
import CardIcon from "../../components/Card/CardIcon";
import CardFooter from "../../components/Card/CardFooter";
import SnackbarContent from "../../components/Snackbar/SnackbarContent";
//gráficos
import ChartBar1 from '../../components/Charts/Bar/ChartBar1'
import ChartBar2 from '../../components/Charts/Bar/ChartBar2'
import ChartBar3 from '../../components/Charts/Bar/ChartBar3'
//Tabelas
import TableShow from "../../components/Table/TableShow";
import TableEdit from "../../components/Table/edittable";


//styles
import avatar from "../../assets/img/faces/fer.png";
import styles from '../../assets/jss/material-dashboard-react/views/dashboardStyle'

let server = [
  "Desenvolver a API MongoDB ou Sqlite",
  "Implantar novas funcionalidade no mapa"
];

const useStyles = makeStyles(styles);

export default function RTLPage() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>xxx</p>
              <h3 className={classes.cardTitle}>
                49/50 <small>GB</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  link1
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>xxx</p>
              <h3 className={classes.cardTitle}>R$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                data
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>PPPP</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                LocalOffer
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Categoria</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Update
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="success">
              <ChartBar1 />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Card2</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>
                Card3
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Time
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="warning">
              <ChartBar2 />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Card</h4>
              <p className={classes.cardCategory}>categoria</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Tempo
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="danger">
              <ChartBar3 />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Card</h4>
              <p className={classes.cardCategory}>cat</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> hora de acesso
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CardHeader >

            <CustomTabs
              title=""
              headerColor="primary"
              tabs={[
                {
                  tabName: "Tabela",
                  tabIcon: Assignment,
                  tabContent: (
                    <Card>
                      <CardHeader color="warning">
                        <div>
                          <h3 className={classes.cardTitleWhite}>Relátório de imóveis</h3>
                          <p className={classes.cardCategoryWhite}>
                            Novos apartamentos em Julho de 2020</p>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <TableShow />
                      </CardBody>
                    </Card>
                  )
                },
                {
                  tabName: "Cadastrar",
                  tabIcon: AddBox,
                  tabContent: (
                    <Card>
                      <CardHeader color="warning">
                        <div>
                          <h3 className={classes.cardTitleWhite}>Relátório de imóveis</h3>
                          <p className={classes.cardCategoryWhite}>
                            Novos apartamentos em Julho de 2020</p>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <TableEdit />
                      </CardBody>
                    </Card>
                  )
                },
                {
                  tabName: "Para Fazer",
                  tabIcon: PlaylistAddCheck,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                    />
                  )
                }
              ]}
            />
          </CardHeader>
        </GridItem>

      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Card header</h4>
              <p className={classes.cardCategoryWhite}>
                Paragráfo
                <a
                  target="_blank"
                  href="#"
                >
                  link
                </a>
                link2
                <a
                  target="_blank"
                  href="#"
                >
                  link2
                </a>
                link3
                <a href="#pablo" target="_blank">
                  link4
                </a>
                .ponto
              </p>
            </CardHeader>
            <CardBody>
              <SnackbarContent
                message={
                  'mensage color="warning" mensage'
                }
                close
                rtlActive
                color="warning"
              />
              <SnackbarContent
                message={
                  'mensage color="primary" mensage'
                }
                close
                rtlActive
                color="primary"
              />
              <SnackbarContent
                message={"mensagem aqui"}
                close
                rtlActive
                color="info"
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>card h6</h6>
              <h4 className={classes.cardTitle}>card h4</h4>
              <p className={classes.description}>
                Texto parágrafo
              </p>
              <Button color="primary" round>
                Button
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
