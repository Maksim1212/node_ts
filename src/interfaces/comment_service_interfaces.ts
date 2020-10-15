interface AllComments {
    [index: number]: {
        id: number;
        user_id: number;
        body: string;
        likes: string[];
        post_id: number;
        creation_time: Date;
    };
}

interface OneComment {
    id: number;
    user_id: number;
    body: string;
    likes: string[];
    post_id: number;
    creation_time: Date;
}

interface CommentData {
    post_id: number;
    body: string;
    user_id: number;
    accessToken: string;
}

export { AllComments, OneComment, CommentData };
