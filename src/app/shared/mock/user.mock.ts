import { User } from "../models/user.model";

export const USERS: User[] = [
    { id: 1, name: 'Carolynne Padilha', username: 'cpadilha', img: '' },
    { id: 2, name: 'Benjamin Silva', username: 'bsilva', img: '' },
    { id: 3, name: 'Felipe Jost', username: 'fjost', img: '' },
    { id: 4, name: 'Nanci Barcellos', username: 'nbarcellos', img: '' },
    { id: 5, name: 'Daniel Henrique', username: 'dhenrique', img: '' },
    { id: 6, name: 'Marvin Souza', username: 'msouza', img: '' }
];

export const CURRENT_USER: User = {
    id: 0,
    img: '',
    name: 'Carolynne Padilha da Silva',
    username: 'carodilha'
};