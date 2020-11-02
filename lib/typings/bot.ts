import {VkontakteContext} from "./context";

export declare class VkBot {
    constructor(token: string);
    use(middleware: Function):void;
    event(triggers: any, middlewares: Array<any>): void;
    on(middlewares: Array<any>): void;
    startPolling(callback: Function): Promise<any>;
    sendMessage(chatId: string, text: string, extra?: object): Promise<any>;
}