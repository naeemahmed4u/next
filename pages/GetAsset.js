import React, { useEffect, useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import DataTable from '../components/DataTable';


// import { useTable } from 'react-table';
//import MOCK_DATA from "../components/MOCK_DATA.json";
// import { COLUMNS } from "../components/columns";



function GetAsset() {

  const { loading, data: { getAssets = [] } = {} } = useQuery(FETCH_ASSET_QUERY);

  // useEffect(() => {

  //   console.log(getAssets);


  // }, [getAssets])
  console.log(getAssets)

  // const cols = useMemo(() => COLUMNS, [])
  // const data1 = useMemo(() => getAssets, [])

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   footerGroups,
  //   rows,
  //   prepareRow
  // } = useTable({
  //   columns: cols,
  //   data: data1
  // });


  return (
    <>
      <DataTable atb={getAssets} />
      {/* <table>
  <tbody>
    {getAssets.map((item,index)=>(
      <tr key={index}>
        <td>
          {item.description}
          {item.brand}
          {item.cost}
          {item.model}


        </td>
      </tr>
    ))}
    </tbody>
    </table> */}

      {/* <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          {footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table> */}
    </>
  )
}
const FETCH_ASSET_QUERY = gql`
 {
    getAssets {
     description
    assetTagID
    purchasedFrom
    purchaseDate
    brand
    cost
    model
    serialNo 
    }
  }
`;

export default GetAsset;
