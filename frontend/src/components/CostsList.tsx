import React from 'react';


interface IPurchaseRecord {
  id: number;
  category: string;
  cost: number;
  date: string;
  purchase?: string;
  description?: string;
}

interface IProps {
  data: IPurchaseRecord[],
}

type RFC<T> = React.FunctionComponent<T>;

type TRenderPurchaseList = (purchases: Array<IPurchaseRecord>) => Array<JSX.Element>;


const CostItem: RFC<IPurchaseRecord> =
  ({
    category,
    date,
    purchase,
   }) =>
    <li>
      <table>
        <tbody>
          <tr>
            <td>{category}</td>
            <td>{date}</td>
            <td>{purchase}</td>
          </tr>
        </tbody>
      </table>
    </li>

const renderPurchaseList: TRenderPurchaseList = (data) =>
  data.map((purchase) => <CostItem key={purchase.id} {...purchase}/>)


const CostList: RFC<IProps> = ({ data }) =>
  <ul>
    {renderPurchaseList(data)}
  </ul>

export default CostList;
