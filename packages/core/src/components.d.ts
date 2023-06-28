/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GreenButton {
        "label": string;
    }
    interface GreenInput {
        "type": string;
        "value": string;
    }
}
export interface GreenInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGreenInputElement;
}
declare global {
    interface HTMLGreenButtonElement extends Components.GreenButton, HTMLStencilElement {
    }
    var HTMLGreenButtonElement: {
        prototype: HTMLGreenButtonElement;
        new (): HTMLGreenButtonElement;
    };
    interface HTMLGreenInputElement extends Components.GreenInput, HTMLStencilElement {
    }
    var HTMLGreenInputElement: {
        prototype: HTMLGreenInputElement;
        new (): HTMLGreenInputElement;
    };
    interface HTMLElementTagNameMap {
        "green-button": HTMLGreenButtonElement;
        "green-input": HTMLGreenInputElement;
    }
}
declare namespace LocalJSX {
    interface GreenButton {
        "label"?: string;
    }
    interface GreenInput {
        "onValueChange"?: (event: GreenInputCustomEvent<string>) => void;
        "type"?: string;
        "value"?: string;
    }
    interface IntrinsicElements {
        "green-button": GreenButton;
        "green-input": GreenInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "green-button": LocalJSX.GreenButton & JSXBase.HTMLAttributes<HTMLGreenButtonElement>;
            "green-input": LocalJSX.GreenInput & JSXBase.HTMLAttributes<HTMLGreenInputElement>;
        }
    }
}
