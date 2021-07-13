import { html } from "@microsoft/fast-element";
import type { ViewTemplate } from "@microsoft/fast-element";
import { endSlotTemplate, startSlotTemplate } from "../patterns/start-end";
import type { ElementDefinitionContext } from "../design-system";
import type { ListboxOption, ListboxOptionOptions } from "./listbox-option";

/**
 * The template for the {@link @microsoft/fast-foundation#(ListboxOption:class)} component.
 * @public
 */
export const listboxOptionTemplate: (
    context: ElementDefinitionContext,
    definition: ListboxOptionOptions
) => ViewTemplate<ListboxOption> = (
    context: ElementDefinitionContext,
    definition: ListboxOptionOptions
) => html`
    <template
        aria-checked="${x => x.ariaChecked}"
        aria-selected="${x => x.ariaSelected}"
        class="${x =>
            [x.checked && "checked", x.selected && "selected", x.disabled && "disabled"]
                .filter(Boolean)
                .join(" ")}"
        role="option"
    >
        ${startSlotTemplate(context, definition)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${endSlotTemplate(context, definition)}
    </template>
`;
