export interface Blog {
	id: string;
	title: string;
	description: string;
	thumbnailUrl: string;
	thumbnailPath: string;
    publishedDate: string;
    slug: string;            
	[key: string]: unknown;
}
