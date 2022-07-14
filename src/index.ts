export type ReplaceNullableWithOptional<Type> = {
    [Property in keyof Type]: null extends Type[Property] ? NonNullable<Type[Property]> | undefined : Type[Property];
};

export type ReplaceOptionalWithNullable<Type> = {
    [Property in keyof Type]-?: undefined extends Type[Property] ? NonNullable<Type[Property]> | null : Type[Property];
};

export function replaceNullableWithUndefined<T extends Record<any, any>>(object: T): ReplaceNullableWithOptional<T> {
    const result: Record<any, any> = {};
    for (const key of Object.keys(object)) {
        if (object[key] !== null) {
            result[key] = object[key];
        }
    }

    return result as ReplaceNullableWithOptional<T>;
}

export function replaceOptionalWithNull<T extends Record<any, any>>(object: T): ReplaceOptionalWithNullable<T> {
    const result: Record<any, any> = {};
    for (const key of Object.keys(object)) {
        if (object[key] === undefined) {
            result[key] = null;
            continue;
        }

        result[key] = object[key];
    }

    return result as ReplaceOptionalWithNullable<T>;
}
