import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import HeaderF from '../components/Header';
import CostList from '../components/CostsList';
import data from '../mock.json';


interface IProps {
  headerText: string;
}

interface IHomePageRouterProps extends RouteComponentProps<IProps> {
}

class HomePage extends React.Component<IProps, IHomePageRouterProps> {

  render() {
    return (
      <Fragment>
        <HeaderF text='hello'>123</HeaderF>
        <CostList data={data} />
      </Fragment>
    )
  }
}


export default HomePage;
