export class User {
    id: number;
    name: string;
    img: string;
    username: string;

    constructor(id: number, name: string, img: string, username: string) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.username = username;
    }
}
