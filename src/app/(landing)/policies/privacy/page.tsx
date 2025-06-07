'use client'
import DocumentViewer from '@/components/DocumentViewer'
import React from 'react'

const page = () => {
  return (
    <div>
        <DocumentViewer
          filePath="/docs/BRILL-PRIV.docx"
        />
    </div>
  )
}

export default page