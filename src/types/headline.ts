// /types/headline.ts
export interface Headline {
	id: string;
	title: string;
	description: string;
	publishedDate: string;
	[key: string]: unknown;
}
