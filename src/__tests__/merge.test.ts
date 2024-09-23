import { merge } from '../merge';

describe('merge function', () => {
    test('should merge sorted arrays', () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [2, 4, 6];
        const collection_3 = [9, 8, 7];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    test('should merge arrays with different lengths', () => {
        const collection_1 = [1, 2];
        const collection_2 = [3, 4, 5];
        const collection_3 = [8, 7, 6];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    test('should merge arrays with empty collections', () => {
        const collection_1: number[] = [];
        const collection_2 = [2, 4, 6];
        const collection_3 = [9, 8, 7];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([2, 4, 6, 7, 8, 9]);
    });

    test('should return an empty array when all collections are empty', () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([]);
    });

    test('should merge when one collection has only one element', () => {
        const collection_1 = [1];
        const collection_2 = [2, 3, 4];
        const collection_3 = [6, 5];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should handle duplicate values across collections', () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [2, 3, 6];
        const collection_3 = [6, 5, 3];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 3, 3, 5, 5, 6, 6]);
    });
});
