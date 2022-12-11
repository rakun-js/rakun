import flux from "../../../flux";

describe('flux filter', () => {
    test('test success', () => {
        const result = flux.just("1", 2, "3")
            .pipe(v => Promise.resolve(v))

            .filter(item => item == 2)
            .block();
        const expectValue = [2]
        expect(result).resolves.toStrictEqual(expectValue);

    });

});