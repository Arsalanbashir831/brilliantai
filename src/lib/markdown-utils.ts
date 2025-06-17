export function truncateMarkdown(markdown: string, maxLength: number): string {
	const plainText = markdown.replace(/[#_*>\-\[\]()!`]/g, ""); // strip basic markdown
	if (plainText.length <= maxLength) return markdown;
	return plainText.substring(0, maxLength).trim() + "…";
}
