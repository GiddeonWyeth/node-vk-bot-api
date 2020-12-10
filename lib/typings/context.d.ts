import {VkBotSendMessageExtra} from "./bot";

export declare class Context implements VkontakteContext {
    constructor(event: {type: any, object: any, }, bot: object);
    message: VkontakteContextMessage;
    client_info?: any;
    user: any;
    reply(message: string, extra?: VkBotSendMessageExtra): Promise<any>;
}

export interface VkontakteContext {
    message: VkontakteContextMessage;
    client_info?: any;
    user: any;
    reply(message: string, extra?: VkBotSendMessageExtra): Promise<any>;
}

export interface VkontakteContextMessage {
    id: number,
    user_id: number,
    date: number,
    out: number,
    read_state: number,
    title: string,
    body: string,
    owner_ids: Array<unknown>,
    type: MessageType
}

type MessageType = 'message_new'
