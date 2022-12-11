import { Void } from "../wrapped";
import { RakunContext, RakunContextManager } from "./interface";

export class RakunContextManagerImpl implements RakunContextManager {
    items: { context: RakunContext<any>, value: any }[] = []
    getValue<R>(context: RakunContext<R>): R {
        return this.items.filter(item => item.context === context)[0]?.value
    }
    setValue<R>(context: RakunContext<R>, value: R): typeof Void {
        this.items = [
            ...this.items
                .filter(item => item.context != context),
            {
                context: context,
                value: value
            }
        ]
        return Void;
    }

}
