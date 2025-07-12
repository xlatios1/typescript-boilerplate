export const lis = (nums: number[]): number => {
	const sub: number[] = []

	for (const num of nums) {
		let left = 0,
			right = sub.length
		while (left < right) {
			const mid = (left + right) >> 1
			if (sub[mid] < num) left = mid + 1
			else right = mid
		}
		sub[left] = num
	}

	return sub.length
}
