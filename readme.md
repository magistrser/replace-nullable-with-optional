# replace-nullable-with-optional

TS type utils for replacing object's nullable fields with optional.

## Install
```
npm install replace-nullable-with-optional
```
```
yarn add replace-nullable-with-optional
```

## Types Example 
```typescript
import type { ReplaceNullableWithOptional, ReplaceOptionalWithNullable } from 'replace-nullable-with-optional';

type ExampleNullable = {
    a: string,
    b: number | null,
}

const exampleNullableReplaced: ReplaceNullableWithOptional<ExampleNullable> = {
  a: 'test',
  b: undefined,
}

type ExampleOptional = {
  a: string,
  b?: number,
}

const exampleOptionalReplaced: ReplaceOptionalWithNullable<ExampleOptional> = {
  a: 'test',
  b: null,
}
```


## Utils Example
```typescript
import { replaceNullableWithUndefined, replaceOptionalWithNull } from 'replace-nullable-with-optional';

const testObjectWithNullable = {
  a: 'test',
  b: null,
  c: undefined,
};

const resultWithReplacedNullable = replaceNullableWithUndefined(testObjectWithNullable);
expect(resultWithReplacedNullable).toEqual({
  a: 'test',
});

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
```
