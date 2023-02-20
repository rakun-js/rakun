import mono from "../../../mono";

describe('mono flatPipe', () => {
    test('test success', () => {
        const result = mono.just("1")
            .pipe(v => Promise.resolve(v))

            .pipe(txt => txt + "-a")
            .flatPipe(txt => mono.just(txt + "--1a"))
            .blockFirst()
        const expectValue = "1-a--1a"
        expect(result).resolves.toStrictEqual(expectValue);
    });

});