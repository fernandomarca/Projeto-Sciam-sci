import {
  successColor,
  whiteColor,
  grayColor,
  primaryColor,
  hexToRgb
} from '../../material-dashboard-react';

const dashboardStyle = {
  successText: {
    color: successColor[0]
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px"
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(grayColor[2]) + ",.62)",
    margin: "20px",
    fontSize: "14px",
    marginTop: "0px",
    marginBottom: "0",
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardTitleWhite: {
    color: whiteColor,
    background: primaryColor[0],
    marginTop: "-30px",
    marginLeft: "10px",
    marginRight: "10px",
    minHeight: "50px",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "5px",
    textDecoration: "none",
    borderRadius: "7px",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "20px",
    "& small": {
      color: grayColor[0],
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

export default dashboardStyle;
