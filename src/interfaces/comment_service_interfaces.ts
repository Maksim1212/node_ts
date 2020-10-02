export interface AllComments {
    [index: number]: {
        id: number;
        author_id: number;
        body: string;
        likes: string[];
        post_id: number;
        creation_time: Date;
    };
}
export interface OneComment {
    id: number;
    author_id: number;
    body: string;
    likes: string[];
    post_id: number;
    creation_time: Date;
}
