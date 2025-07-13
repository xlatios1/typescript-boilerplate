import { matchPlayersAndTrainers } from '@/index'

describe('sum test suite', () => {
	it('testcase 1', () => {
		const result = matchPlayersAndTrainers([4, 7, 9], [8, 2, 5, 8])
		expect(result).toEqual(2)
	})
	it('testcase 2', () => {
		const result = matchPlayersAndTrainers([1, 1, 1], [10])
		expect(result).toEqual(1)
	})
})
