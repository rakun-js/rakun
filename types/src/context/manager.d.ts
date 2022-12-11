import { Void } from "../wrapped";
import { RakunContext, RakunContextManager } from "./interface";
export declare class RakunContextManagerImpl implements RakunContextManager {
    items: {
        context: RakunContext<any>;
        value: any;
    }[];
    getValue<R>(context: RakunContext<R>): R;
    setValue<R>(context: RakunContext<R>, value: R): typeof Void;
}
