"use client";

import React from "react";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";


const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

interface MarkdownEditorProps {
  value: string;
  onChange: (val: string | undefined) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ value, onChange }) => {
  return (
    <div className="rounded-md border border-gray-300 bg-white shadow-sm transition-all">
      <MDEditor
        value={value}
        onChange={onChange}
        height={'auto'}

        extraCommands={[]}
      />
    </div>
  );
};

export default MarkdownEditor;
