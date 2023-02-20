import mono from "../../../mono";

describe('mono empy', () => {
    test('test success', () => {
        const result = mono.just(1)
            .pipe(v => Promise.resolve(v))
            .flatPipe(() => mono.empty<string>())
            .zipWhen((r) => mono.just(r + "-test"), (r) => mono.just(r + 5))
            .pipe(([m1, m2, m3]) => `${m1},${m2},${m3}`)
            .blockFirst()
        expect(result).resolves.toStrictEqual(null);
    });

});