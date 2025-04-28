import { useCrypto } from '../../context/crypto-context'
import { Table } from 'antd'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sortDirections: ['descend'],
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Price, $',
    dataIndex: 'price',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.amount - b.amount,
  },
]

export default function AssetsTable() {
  const { assets } = useCrypto()

  const data = assets.map((a) => ({
    key: a.id,
    name: a.name,
    price: a.price,
    amount: a.amount,
  }))

  return (
    <Table
      style={{
        boxShadow: '0px 2px 10px rgba(27,28,28, 0.2)',
      }}
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  )
}
