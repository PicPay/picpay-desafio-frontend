import User from "src/app/shared/models/user/user.model"

export default class UserData {

    constructor(){
        this.users = new Array()
    }
    users: Array<User>

}