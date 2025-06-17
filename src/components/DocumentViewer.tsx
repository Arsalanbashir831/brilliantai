import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import mammoth from 'mammoth';

export default function DocumentViewer({ filePath }: { filePath: string }) {
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!filePath) return;
    setLoading(true);
    setError(null);
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch document: ${response.statusText}`);
        }
        return response.arrayBuffer();
      })
      .then(arrayBuffer => mammoth.convertToHtml({ arrayBuffer }))
      .then(result => {
        setHtml(result.value);
      })
      .catch(err => {
        console.error(err);
        setError(err.message || 'Error loading document');
      })
      .finally(() => setLoading(false));
  }, [filePath]);

  if (loading) {
    return <div style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>Loading document...</div>;
  }
  if (error) {
    return <div style={{ color: 'red', textAlign: 'center', marginTop: '2rem' }}>Error: {error}</div>;
  }

  return (
    <div
      className="document-viewer"
      style={{
        color: '#fff',
        backgroundColor: 'transparent',
        padding: '1.5rem',
        margin: '0 20px',
        maxWidth: '100%',
        textAlign: 'left',
        lineHeight: 1.6,
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

DocumentViewer.propTypes = {
  filePath: PropTypes.string.isRequired,
};