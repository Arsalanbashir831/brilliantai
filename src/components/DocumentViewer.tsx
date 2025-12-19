import React, { useEffect, useState } from 'react';
import mammoth from 'mammoth';

export default function DocumentViewer({ filePath }: { filePath: string }) {
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!filePath) return;

    let cancelled = false;

    const loadDocument = async () => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`Failed to fetch document: ${response.statusText}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });

        if (!cancelled) {
          setHtml(result.value);
          setError(null);
        }
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error loading document');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    setLoading(true);
    loadDocument();

    return () => {
      cancelled = true;
    };
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