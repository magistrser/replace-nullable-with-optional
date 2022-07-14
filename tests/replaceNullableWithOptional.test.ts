import { replaceNullableWithUndefined, replaceOptionalWithNull } from 'replace-nullable-with-optional';

import type { ReplaceNullableWithOptional, ReplaceOptionalWithNullable } from 'replace-nullable-with-optional';

it('Replace nullable with undefined', () => {
    const testObjectWithNullable = {
        a: 'test',
        b: null,
        c: undefined,
    };

    const resultWithReplacedNullable = replaceNullableWithUndefined(testObjectWithNullable);
    expect(resultWithReplacedNullable).toEqual({
        a: 'test',
    });
});

it('Replace optional with null', () => {
    const testObjectWithOptional = {
        a: 'test',
        b: 1,
        c: null,
        d: undefined,
    };

    const resultWithReplacedOptional = replaceOptionalWithNull(testObjectWithOptional);
    expect(resultWithReplacedOptional).toEqual({
        ...testObjectWithOptional,
        d: null,
    });
});

it('ReplaceNullableWithOptional/ReplaceOptionalWithNullable test', () => {
    type ExampleNullable = {
        a: string;
        b: number | null;
    };

    const exampleNullableReplaced: ReplaceNullableWithOptional<ExampleNullable> = {
        a: 'test',
        b: undefined,
    };

    type ExampleOptional = {
        a: string;
        b?: number;
    };

    const exampleOptionalReplaced: ReplaceOptionalWithNullable<ExampleOptional> = {
        a: 'test',
        b: null,
    };
});
