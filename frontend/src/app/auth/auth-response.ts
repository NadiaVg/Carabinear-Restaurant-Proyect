export interface AuthResponse {
    user: {
        id: number,
        name: string,
        username: string,
        password: string,
        CP: number,
        admin: boolean,
        expires_in: number
    }, 
    access_token: string,
}
