import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode;
}

export interface Post {
    id: number;
    title: string;
    body: string;
}

export interface Post {
    id: number;
    title: string;
    body: string;
}

export interface HomeProps {
    data: Post[];
    totalCount: number;
}

export interface DetailProps {
    item: Post;
}

export interface ButtonProps {
    isLoading: boolean
    loadMoreData: Post[]
}

export interface TitleProps {
    text: string;
}

export interface Query {
    id: string;
}