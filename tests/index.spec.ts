import { lis } from '@/index'

describe('LIS test suite', () => {
	it('should return correct results test case 1', () => {
		const result = lis([10, 9, 2, 5, 3, 7, 101, 18])
		expect(result).toEqual(4)
	})
	it('should return correct results test case 2', () => {
		const result = lis([7, 7, 7, 7, 7, 7, 7])
		expect(result).toEqual(1)
	})
	it('should return correct results test case 3', () => {
		const result = lis([0, 1, 0, 3, 2, 3])
		expect(result).toEqual(4)
	})
})
