import { useState, useRef } from 'react'
import {
  Select,
  Space,
  Typography,
  Flex,
  Divider,
  Form,
  Input,
  InputNumber,
  Button,
  DatePicker,
  Result,
} from 'antd'
import { useCrypto } from '../context/crypto-context'
import CoinInfo from './layout/CoinInfo'

const validateMessages = {
  required: '${label} is required',
  types: {
    number: '${label} is not valid number',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}

export default function AddAssetForm({ onClose }) {
  const { crypto, addAsset } = useCrypto()
  const [coin, setCoin] = useState(null)
  const [form] = Form.useForm()
  const [submitted, setSubmitted] = useState(false)
  const assetRef = useRef()

  if (submitted) {
    return (
      <Result
        status="success"
        title="New Asset Added"
        subTitle={`Added ${assetRef.current.amount} of ${coin.name} by price ${assetRef.current.price}`}
        extra={[
          <Button type="primary" key="console" onClick={onClose}>
            Close
          </Button>,
        ]}
      />
    )
  }

  if (!coin) {
    return (
      <Select
        style={{ width: '100%' }}
        onSelect={(v) => setCoin(crypto.find((c) => c.id === v))}
        placeholder="Select coin"
        options={crypto.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={(option) => (
          <Space>
            <img
              style={{ width: 20 }}
              src={option.data.icon}
              alt={option.data.label}
            />{' '}
            {option.data.label}
          </Space>
        )}
      />
    )
  }

  function onFinish(values) {
    const newAsset = {
      id: coin.id,
      amount: values.amount,
      price: values.price,
      date: values.date?.$d ?? new Date(),
    }
    assetRef.current = newAsset
    setSubmitted(true)
    addAsset(newAsset)
  }

  function handleAmountChange(value) {
    const price = form.getFieldValue('price')
    form.setFieldsValue({
      total: +(value * price).toFixed(2),
    })
  }
  function handlePriceChange(value) {
    const amount = form.getFieldValue('amount')
    form.setFieldsValue({
      total: +(amount * value).toFixed(2),
    })
  }

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 10 }}
      style={{ maxWidth: 600 }}
      initialValues={{ price: +coin.price.toFixed(2) }}
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <CoinInfo coin={coin} />
      <Divider />

      <Form.Item
        label="Amount"
        name="amount"
        rules={[
          {
            required: true,
            type: 'number',
            min: 0,
          },
        ]}
      >
        <InputNumber style={{ width: '100%' }} onChange={handleAmountChange} />
      </Form.Item>

      <Form.Item label="Price" name="price">
        <InputNumber style={{ width: '100%' }} onChange={handlePriceChange} />
      </Form.Item>
      <Form.Item label="Date" name="date">
        <DatePicker showTime />
      </Form.Item>
      <Form.Item label="Total" name="total">
        <InputNumber disabled style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Add Asset
        </Button>
      </Form.Item>
    </Form>
  )
}
