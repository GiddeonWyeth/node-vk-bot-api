import {VkontakteContext} from "./context";

export declare class VkBot {
    constructor(token: string);
    use(ctx: VkontakteContext, next: Function):void;
    event(triggers: any, middlewares: Array<any>): void;
    on(middlewares: Array<any>): void;
    startPooling(callback: Function): Promise<any>;
    sendMessage(chatId: string, text: string, extra?: object): Promise<any>;
}