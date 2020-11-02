declare module 'node-vk-bot-api' {
    export class VkBot {
        constructor(token: string);
        event(triggers: any, middlewares: Array<any>): void;
        on(middlewares: Array<any>): void;
        startPooling(): Promise<any>;
        sendMessage(chatId: string, text: string, extra?: object): Promise<any>;
    }
    export class Context {
        constructor(event: {type: any, object: any, }, bot: object);
        message: any;
        client_info?: any;
        user: any;
    }
}
