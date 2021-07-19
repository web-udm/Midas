import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import { PageHeader } from '../components/Header';
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
        <PageHeader text='hello' />
        <CostList data={data} />
      </Fragment>
    )
  }
}


export default HomePage;
