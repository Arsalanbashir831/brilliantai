/* eslint-disable @typescript-eslint/no-explicit-any */
// File: src/components/admin/Editor.tsx
"use client";

import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";
import Embed from "@editorjs/embed";

type EJOutputData = EditorJS.OutputData;

type EditorProps = {
	onChange: (data: EJOutputData) => void;
	initialData?: EJOutputData;
	/** callback to pass the EditorJS instance back to the parent */
	onInitialize?: (editor: EditorJS) => void;
};

const Editor: React.FC<EditorProps> = ({
	onChange,
	initialData,
	onInitialize,
}) => {
	const editorRef = useRef<EditorJS | null>(null);
	const onChangeRef = useRef(onChange);
	const holderId = useRef(
		`editorjs-${Date.now()}-${Math.floor(Math.random() * 1000)}`
	);

	useEffect(() => {
		onChangeRef.current = onChange;
	}, [onChange]);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const holderElement = document.getElementById(holderId.current);
		if (!holderElement) {
			console.error(`EditorJS holder element '${holderId.current}' not found.`);
			return;
		}

		if (editorRef.current || holderElement.querySelector(".codex-editor")) {
			return;
		}

		// Prepare the EditorJS config.
		const config: EditorJS.EditorConfig = {
			holder: holderId.current, // FIXED: Use dynamic holderId
			autofocus: true,
			tools: {
				header: { class: Header as any, inlineToolbar: ["link"] },
				paragraph: {
					class: Paragraph as any,
					config: { placeholder: "Start typing…" },
					inlineToolbar: true,
				},
				list: { class: List as any, inlineToolbar: true },
				simpleImage: {
					class: SimpleImage as any,
					config: {
						uploader: {
							uploadByFile(file: File) {
								return new Promise<{ success: 1; file: { url: string } }>(
									(resolve) => {
										const reader = new FileReader();
										reader.onload = () => {
											resolve({
												success: 1,
												file: { url: reader.result as string },
											});
										};
										reader.readAsDataURL(file);
									}
								);
							},
						},
					},
				},
				embed: { class: Embed as any, inlineToolbar: true },
			},
			data: initialData || { blocks: [] },
			onReady: () => {
				if (onInitialize && editorRef.current) {
					onInitialize(editorRef.current);
				}
			},
			onChange: async (api) => {
				try {
					const savedData = await api.saver.save();
					onChangeRef.current(savedData);
				} catch (err) {
					console.error("EditorJS save error:", err);
				}
			},
		};

		// Create the EditorJS instance
		editorRef.current = new EditorJS(config);

		return () => {
			// console.log("Editor.js: Cleanup effect");
			// Check if the instance exists and is not already destroyed (some plugins might auto-destroy)
			if (
				editorRef.current &&
				typeof editorRef.current.destroy === "function"
			) {
				// Check if the editor's core DOM element still exists before trying to destroy
				// This can prevent errors if the holder was manually cleared already.
				if (holderElement.contains(editorRef.current.ui?.nodes?.holder)) {
					try {
						editorRef.current.destroy();
					} catch (e) {
						console.error("Error destroying EditorJS instance:", e);
					}
				}
			}
			editorRef.current = null;

			// Clean up inner HTML so React Strict Mode remount doesn't show two editors
			// This is a strong guarantee that the holder is empty for the next potential mount.
			if (holderElement) {
				holderElement.innerHTML = "";
			}
		};

		// return () => {
		// 	if (
		// 		editorRef.current &&
		// 		typeof editorRef.current.destroy === "function"
		// 	) {
		// 		editorRef.current.destroy();
		// 		editorRef.current = null;
		// 	}
		// 	if (holderElement) holderElement.innerHTML = "";
		// };
	}, []); // Run only once on mount.
	// initialData changes should ideally be handled by re-keying the Editor component
	// or by using a method exposed via onInitialize to load new data.
	// Adding initialData to deps array can cause frequent re-initializations.

	return (
		<div>
			<div
				id={holderId.current}
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
