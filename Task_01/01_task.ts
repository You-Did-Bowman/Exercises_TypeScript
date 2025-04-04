export var var1Boolean: boolean = true;

// Numbers
export let var2Decimal: number = 13;

export let var3Hex: string = "f00d"

export let var4Binary: number = 111111;

export let var5Octal: number = 744;

// Strings
export let var6String: string = "Hello, world!"

//Arrays
export let var7Array: any[] = [1, 'test', {a: 3}, 4, 5];

export let var8NumericArray: number[] = [1, 2, 3, 4, 5];

//Tuple
export let var9Tuple: [string, number] = ['key', 12345];

//Enums
export enum var10Enum {
  Red = 1,
  Green,
  Blue = 4
}

// Any
export let var11ArrayOfAny: any[] = [1, 'test', {a: 3}, 4, 5];

// Void
export function var12VoidFunction(): void {
    console.log("Void Function");
}

// Null and Undefined
export let var13Null: null = null;

export let var14Undefined: undefined = undefined;

//Never

export function var15NeverFunction(): never { 
    throw new Error("This function never returns");
}
