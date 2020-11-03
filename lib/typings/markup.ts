export declare class Markup {
    keyboard(buttons: any, options?: { columns: any }): Markup;

    oneTime(value?: boolean): Markup

    inline(value?: boolean): string;

    toJSON(): string

    static button(label, color?: string, payload?: { button: any }): VkMarkupButton

}

export declare type VkMarkupButton = { action: { type: string, payload: string, label: string }, color: string };