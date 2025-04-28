import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { useCrypto } from '../../context/crypto-context'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function PortfolioChart() {
  const { assets } = useCrypto()

  const data = {
    labels: assets.map((a) => a.name),
    datasets: [
      {
        label: '$',
        data: assets.map((a) => a.totalAmount),
        backgroundColor: [
          '#101314',
          '#500f33',
          '#aa095d',
          '#e5546e',
          '#e47126',
          '#e4761a',
        ],
      },
    ],
  }

  return (
    <div
      style={{
        display: 'flex',
        marginBottom: '1rem',
        justifyContent: 'center',
        height: 400,
      }}
    >
      <Pie data={data} />
    </div>
  )
}
