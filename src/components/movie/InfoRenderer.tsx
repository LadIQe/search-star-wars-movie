import { Col, Row } from 'antd'
import React, { FC } from 'react'

type Props = {
  title: string
  content: string
}

const InfoRenderer: FC<Props> = ({ title, content }) => (
  <Row gutter={16} className="info-renderer-row">
    <Col span={12}>
      <b>{title}</b>
    </Col>
    <Col span={12} style={{ whiteSpace: 'pre-wrap' }}>
      {content}
    </Col>
  </Row>
)

export default InfoRenderer
