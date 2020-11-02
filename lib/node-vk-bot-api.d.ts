declare module 'node-vk-bot-api' {
    export class VkBot {
        constructor(token: string);
        event(triggers: any, middlewares: Array<any>): void;
        on(middlewares: Array<any>): void;
        startPooling(): Promise<any>;
        sendMessage(chatId: string, text: string, extra?: object): Promise<any>;
    }
}
