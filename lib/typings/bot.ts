export declare class VkBot {
    constructor(token: string);
    use(middleware: Function):void;
    event(triggers: any, middlewares: Array<any>): void;
    on(middlewares: Array<any>): void;
    startPolling(callback: Function): Promise<any>;
    command(triggers: Array<string> | string, middleware: Function): void;
    sendMessage(chatId: string, message: string, extra?: VkBotSendMessageExtra): Promise<any>;
}

export interface VkBotSendMessageExtra {
    attachment?: Array<string> | string,
    sticker_id?: string,
    keyboard?: VkBotKeyboard,
    random_id?: number,
}

export interface VkBotKeyboard {
    buttons: VkBotKeyboardButton[][],
    inline: boolean,
    one_time: boolean,
}

export interface VkBotKeyboardButton {
    action: {
        type: 'text' | 'open_link',
        label: string,
        payload?: string,
    }
    color: 'primary' | 'secondary' | 'negative', 'positive'
}