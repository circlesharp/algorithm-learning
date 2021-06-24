/* insert */
export function insertIntoArray<T>(arr: Array<T>, index: number, element: T): boolean {
	/* 省略判断容量 与 index合法性 */

	for (let i = arr.length; i > index; i--) {
		arr[i] = arr[i - 1];
	}

	arr[index] = element;

	return true;
}

/* delete */
export function deleteFromArray<T>(arr: Array<T>, index: number): boolean {
	/* 省略判断容量 与 index合法性 */

	for (let i = index + 1; i < arr.length; i++) {
		arr[i - 1] = arr[i];
	}

	arr.pop();

	return true;
}
