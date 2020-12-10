export declare class VkBot {
    constructor(token: string | {token: string, confirmation: string});
    use(middleware: Function):void;
    event(triggers: any, middlewares: Array<any>): void;
    on(middlewares: Array<any>): void;
    startPolling(callback: Function): Promise<any>;
    command(triggers: Array<string> | string, middleware: Function): void;
    sendMessage(chatId: string, message: string, extra?: VkBotSendMessageExtra): Promise<any>;
    webhookCallback(...args: Array<unknown>): void;
}

export interface VkBotSendMessageExtra {
    attachment?: Array<string> | string,
    sticker_id?: string,
    keyboard?: VkBotKeyboard,
    random_id?: number,
}

export interface VkBotKeyboard {
    buttons: VkBotKeyboardTextButton[][] | VkBotKeyboardLinkButton[][],
    inline: boolean,
    one_time: boolean,
}

export interface VkBotKeyboardTextButton {
    action: {
        type: 'text'
        label: string,
        payload?: string,
    }
    color: 'primary' | 'secondary' | 'negative' | 'positive'
}


export interface VkBotKeyboardLinkButton {
    action: {
        type: 'open_link',
        link: string,
        label: string,
        payload?: string,
    }
}
