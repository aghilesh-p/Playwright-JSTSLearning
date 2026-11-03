let orginal_array = [1, 2, 3, 4, 5];

// Copying an array using slice() method

let copy_array1 = orginal_array.slice();     // slice() method creates a shallow copy of the original array.
console.log("Original array:", orginal_array);
console.log("Copy array1:", copy_array1);

// Copying an array using spread operator

let copy_array2 = [...orginal_array];       // spread operator
console.log("Original array:", orginal_array);
console.log("Copy array2:", copy_array2);


copy_array1.push(11);    // modifying the copy_array1 will not affect the original array.
console.log("Original array after modifying copy_array1:", orginal_array);
console.log("Copy array1 after push:", copy_array1);

copy_array2.push(22);    // modifying the copy_array2 will not affect the original array.   
console.log("Original array after modifying copy_array2:", orginal_array);
console.log("Copy array2 after push:", copy_array2);


// Deep copy (not recommended way)

let deep_copy_array = orginal_array;  // This creates a reference to the same array, not a copy.
console.log("Deep copy array:", deep_copy_array);

deep_copy_array.push(33); // modifying the deep_copy_array will affect the original array because they reference the same array in memory.
console.log("Original array after modifying deep_copy_array:", orginal_array);
console.log("Deep copy array after push:", deep_copy_array);




