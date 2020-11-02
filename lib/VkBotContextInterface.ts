export interface VkBotContextInterface extends Object {
    message?: {
        ref?: string;
        user_id: string,
    };
    reply(text: string, extra?: object): Promise<any>;
}