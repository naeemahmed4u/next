import React from 'react';
import Link from "next/link";
import Image from 'next/image'



export const COLUMNS = [
    {

        Header: 'Picture',
        accessor: 'picture',
        Cell: ({ cell: { value }}) => (
            <div>
              <Image
                src="https://blog.ispionage.com/wp-content/uploads/2013/11/Link-Building-Tool-Pic.jpg" alt={value} width={50} height={50}
              />
            </div>
          )
    },
    {

        Header: 'Description',
        accessor: 'description'
    },
    {
        Header: 'Asset Tag ID',
        accessor: 'assetTagID'

    },
    {
        Header: 'Purchased From',
        accessor: 'purchasedFrom'

    },
    {
        Header: 'Purchase Date',
        accessor: 'purchaseDate'

    },
    {
        Header: 'Brand',
        accessor: 'brand'

    },
    {
        Header: 'Cost',
        accessor: 'cost'

    },
    {
        Header: 'Model',
        accessor: 'model'

    },
    {
        Header: 'Serial No',
        accessor: 'serialNo',


    },
    {
        Header: 'Actions',
        accessor: 'action',
        Cell: cell => (
            <Link href="/AddAsset">
                <a>
                    <button value={cell.accessor}>
                        {cell.accessor}
                    </button>
                </a>
            </Link>),
    },

]