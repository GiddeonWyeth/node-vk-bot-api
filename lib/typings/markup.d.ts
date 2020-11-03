export declare class Markup {
    keyboard(buttons: any, options?: { columns: any }): Markup;

    oneTime(value?: boolean): Markup

    inline(value?: boolean): string;

    static keyboard(buttons: any, options?: { columns: any }): Markup;

    toJSON(): string

    static button(label: string, color?: string, payload?: { button: any }): VkMarkupButton

}

export interface VkMarkupButton {
    action: {
        type: string,
        payload: string,
        label: string
    },
    color: string
}