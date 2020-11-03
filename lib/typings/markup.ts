export declare class Markup {
    keyboard(buttons, options?: {columns: any}): Markup;
    oneTime(value?): Markup
    inline(value?): string;
    toJSON(): string
    static keyboard(keyboard, options): Markup;
    static button(label, color?: string, payload?: {button: any}): Markup
}