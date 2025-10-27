function getFirstElement<T>(arr: T[]): T {
return arr[0];
}


const firstNumber = getFirstElement<number>([1, 2, 3]);
console.log(`Числа: ${firstNumber}, Тип: ${typeof firstNumber}`);


const firstString = getFirstElement<string>(["a", "b", "c"]);
console.log(`Рядки: ${firstString}, Тип: ${typeof firstString}`); 


const firstBoolean = getFirstElement<boolean>([true, false, true]);
console.log(`Булеві: ${firstBoolean}, Тип: ${typeof firstBoolean}`); 
