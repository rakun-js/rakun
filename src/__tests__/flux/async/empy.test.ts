
import flux from "../../../flux";
import mono from "../../../mono";

describe('flux empty', () => {

    test('test success', () => {
        const result = flux.just(1, 2, 3, "96")
            .pipe(v => Promise.resolve(v))
            .flatPipe(() => mono.empty<string>())
            .zipWhen((r) => mono.just(r + "-test"), (r) => mono.just(r + "56"))
            .block()
        expect(result).resolves.toStrictEqual([]);
    });

});