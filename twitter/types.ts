export interface Profile {
    id: number;
    handle: string;
    name: string;
    bio: string;
    avatar: string;
    banner: string;
}

export interface Tweet {
    id: number;
    handle: string;
    text: string;
    createdOn: string;
}
