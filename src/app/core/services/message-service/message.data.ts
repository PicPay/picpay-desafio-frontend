import Message from "src/app/shared/models/message/message.model"

export default class MessageData {
    
    message: Message
    isDisplayingMessageModal: boolean


    constructor() {
        this.isDisplayingMessageModal = false
        this.message = new Message('','')
    }
}