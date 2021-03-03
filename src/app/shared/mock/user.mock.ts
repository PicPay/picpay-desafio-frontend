import { User } from "../models/user.model";

const image_url: string = "https://randomuser.me/api/portraits/lego/{id}.jpg"

export const USERS: User[] = [
    { id: 1, name: 'Cristina Raymundo', username: '@cpadilha', img: image_url.replace("{id}", "1") },
    { id: 2, name: 'Benjamin Silva', username: '@bsilva', img: image_url.replace("{id}", "2") },
    { id: 3, name: 'Felipe Jost', username: '@fjost', img: image_url.replace("{id}", "3") },
    { id: 4, name: 'Nanci Barcellos', username: '@nbarcellos', img: image_url.replace("{id}", "4") },
    { id: 5, name: 'Daniel Henrique', username: '@dhenrique', img: image_url.replace("{id}", "5") },
    { id: 6, name: 'Marvin Souza', username: '@msouza', img: image_url.replace("{id}", "6") }
];

export const CURRENT_USER: User = {
    id: 999,
    img: image_url.replace("{id}", "0"),
    name: 'Carolynne Padilha da Silva',
    username: '@carodilha'
};