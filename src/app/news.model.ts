export interface News {
    id: string | number;
    title: string;
    short?: string;
    full?: string;
    imgUrl?: string;
}

export interface LoginForm {
    titleText: string;
    text: string;
    imgUrl: string;
}

export interface User {
    id: string | number;
    username: string;
    password: string;
    confirmPassword?: string;
}