/* eslint-disable @typescript-eslint/no-explicit-any */
// File: src/components/admin/Editor.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';

import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import List from '@editorjs/list';
import SimpleImage from '@editorjs/simple-image';
import Embed from '@editorjs/embed';

type EJOutputData = EditorJS.OutputData;

type EditorProps = {
    onChange: (data: EJOutputData) => void;
    initialData?: EJOutputData;
};

const Editor: React.FC<EditorProps> = ({ onChange, initialData }) => {
    // We’ll store the single EditorJS instance here once it’s ready
    const editorRef = useRef<EditorJS | null>(null);
    // Because onChange is a prop, we keep a ref to the latest callback
    const onChangeRef = useRef(onChange);

    // Keep onChangeRef.current up to date if the parent updates the callback
    useEffect(() => {
        onChangeRef.current = onChange;
    }, [onChange]);

    useEffect(() => {
        // Guard: Only run on client side (no SSR)
        if (typeof window === 'undefined') {
            return;
        }

        // If we already have an Editor instance, do not re-create it
        if (editorRef.current) {
            return;
        }

        // Find the container and clear any stray HTML (just in case)
        const holder = document.getElementById('editorjs');
        if (holder) {
            holder.innerHTML = ''; // ensure it is empty before EditorJS writes into it
        }

        // Create one and only one EditorJS instance
        const ej = new EditorJS({
            holder: 'editorjs',
            data: initialData || undefined,
            autofocus: true,
            tools: {
                header: {
                    class: Header as any,
                    inlineToolbar: ['link'],
                },
                paragraph: {
                    class: Paragraph as any,
                    config: { placeholder: 'Start typing…' },
                },
                list: {
                    class: List as any,
                    inlineToolbar: true,
                },
                simpleImage: {
                    class: SimpleImage as any,
                    config: {
                        uploader: {
                            uploadByFile(file: File) {
                                return new Promise<{ success: 1; file: { url: string } }>((resolve) => {
                                    const reader = new FileReader();
                                    reader.onload = () => {
                                        resolve({
                                            success: 1,
                                            file: { url: reader.result as string },
                                        });
                                    };
                                    reader.readAsDataURL(file);
                                });
                            },
                        },
                    },
                },
                embed: {
                    class: Embed as any,
                    inlineToolbar: true,
                },
            },
            onReady() {
                // Store the instance so we know we’ve created it exactly once
                editorRef.current = ej;
            },
            onChange: async () => {
                if (!editorRef.current) return;
                try {
                    const savedData: EJOutputData = await editorRef.current.save();
                    onChangeRef.current(savedData);
                } catch (err) {
                    console.error('EditorJS save error:', err);
                }
            },
        });

        // Cleanup: destroy the EditorJS instance on unmount
        return () => {
            if (editorRef.current) {
                editorRef.current.destroy();
                editorRef.current = null;
            }
        };
    }, []); // <-- Notice the empty dependency array. This effect runs only once.

    return (
        <div>
            {/* This DIV is the “holder” for EditorJS */}
            <div
                id="editorjs"
                className="bg-white min-h-[300px] p-4 rounded border border-gray-200"
            />
            <p className="mt-1 text-sm italic text-gray-500">
                Press Enter to get a new empty block. Then click “+” to insert Heading,
                Paragraph, List, Image, Embed, etc.
            </p>
        </div>
    );
};

export default Editor;
