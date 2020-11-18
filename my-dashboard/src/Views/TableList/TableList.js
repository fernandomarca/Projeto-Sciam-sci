import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import TableShow from "../../components/Table/TableShow";
import TableEdit from "../../components/Table/edittable";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import Tasks from "../../components/Tasks/Tasks";
import CustomTabs from '../../components/CustomTabs/CustomTabs';
//icons
import Assignment from "@material-ui/icons/Assignment";
import PlaylistAddCheck from "@material-ui/icons/PlaylistAddCheck";
import AddBox from "@material-ui/icons/AddBox";
//variaveis
import { server } from "../../variables/general";
//styles
import styles from '../../assets/jss/material-dashboard-react/views/dashboardStyle'

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();

  return (
    <div>
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
    </div>
  );
}
