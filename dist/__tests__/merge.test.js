"use strict";
// src/__tests__/merge.test.ts
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("../merge");
describe('merge function', () => {
    test('should merge sorted arrays', () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [2, 4, 6];
        const collection_3 = [9, 8, 7];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test('should merge arrays with different lengths', () => {
        const collection_1 = [1, 2];
        const collection_2 = [3, 4, 5];
        const collection_3 = [8, 7, 6];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
    test('should merge arrays with empty collections', () => {
        const collection_1 = [];
        const collection_2 = [2, 4, 6];
        const collection_3 = [9, 8, 7];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([2, 4, 6, 7, 8, 9]);
    });
});
