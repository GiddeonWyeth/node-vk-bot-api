export declare class Context implements VkontakteContext {
    constructor(event: {type: any, object: any, }, bot: object);
    message: VkontakteContextMessage;
    client_info?: any;
    user: any;
    reply(text: string, extra?: object): Promise<any>;
}

export interface VkontakteContext {
    message: VkontakteContextMessage;
    client_info?: any;
    user: any;
    reply(text: string, extra?: object): Promise<any>;
}

export interface VkontakteContextMessage {
    ref?: string,
    user_id: string,
}
