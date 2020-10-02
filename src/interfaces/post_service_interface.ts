interface GetAllPosts {
    [index: number]: {
        id: number;
        author_id: number;
        author_name: string;
        title: string;
        body: string;
        likes: string[];
        creation_time: Date;
    };
}

interface OnePost {
    author_id: number;
    author_name: string;
    title: string;
    body: string;
    likes: string[];
    id: number;
    creation_time: Date;
}

interface PostData {
    title: string;
    body: string;
    author_id: number;
    author_name: string;
    accessToken: string;
}

export { GetAllPosts, OnePost, PostData };
