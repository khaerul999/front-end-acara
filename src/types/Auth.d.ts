interface IRegister {
    fullname: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type {IRegister}


interface IActivation {
    code: string;
}

export type {IActivation}