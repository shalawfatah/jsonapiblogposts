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
    post: Post;
}