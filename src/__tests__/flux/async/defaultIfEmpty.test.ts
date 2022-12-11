import flux from "../../../flux";
describe('defaultIfEmpty', () => {
    test('test success', () => {
        const result = flux.just("1", 2, "3")
            .pipe(v => Promise.resolve(v))

            .filter(item => item == 20)
            .defaultIfEmpty(54)
            .block();
        expect(result).resolves.toStrictEqual([54]);
    });

});