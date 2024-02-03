import React from 'react'

type DataProps = {
    data: {
    [key: string]: any}
    }

const StructuredData:React.FC<DataProps> = ({data}) => {
  return (
    <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data)
        }}
        />
  )
}

export {StructuredData}