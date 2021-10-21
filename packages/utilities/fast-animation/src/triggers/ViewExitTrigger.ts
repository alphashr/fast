import { isElementInView } from "../utilities/isElementInView";
import { ScrollTriggerBase, ScrollTriggerSubscription } from "./ScrollBase";

/**
 * Utility for registering element/callback pairs where the callback will be invoked when the element exits the view-port
 *
 * @public
 */
export class ViewExitTrigger extends ScrollTriggerBase {
    /**
     * Check if elements are in view-port and apply scroll method if they are
     */
    protected update(): void {
        super.update();

        this.subscriptions.forEach(
            /* eslint-disable-next-line */
            (subscription: ScrollTriggerSubscription, index: number) => {
                const inView: boolean = isElementInView(subscription.element);

                // If the element is out of view but previously was in view
                if (!inView && subscription.inView) {
                    subscription.callback(this.scrollDistance);
                }

                if (inView !== subscription.inView) {
                    subscription.inView = inView;
                }
            }
        );
    }
}
