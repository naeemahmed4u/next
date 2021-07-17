import React from 'react';
import Link from "next/link";



export const COLUMNS = [
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