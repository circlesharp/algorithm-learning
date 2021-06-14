import HuffmanTree from "../HuffmanTree";

describe('Huffman Tree', () => {
	it('build Huffman Tree', () => {
		const weights = [1, 2, 3, 4, 5];
		const dataWithWeight = weights.map(weight => ({
			value: undefined,
			weight: weight,
		}));

		const huffmanTree = new HuffmanTree(dataWithWeight);
		expect(huffmanTree.root.weight).toEqual(15);
		expect(huffmanTree.root.left.weight).toEqual(6);
		expect(huffmanTree.root.right.weight).toEqual(9);
	});

	it('哈夫曼编码（前缀编码）', () => {
		const chars = [
			{ value: 'a', weight: 10 },
			{ value: 'e', weight: 15 },
			{ value: 'i', weight: 12 },
			{ value: 's', weight: 3 },
			{ value: 't', weight: 4 },
			{ value: 'sp', weight: 13 }, // 空格
			{ value: 'nl', weight: 1 }, // 换行
		];
		const huffmanCodeTree = new HuffmanTree(chars);

		const huffmanCodeDict = huffmanCodeTree.genCodeDictionary();
		const { a, e, i, s, t, sp, nl } = huffmanCodeDict;

		/* { i: '00', sp: '01', e: '10', t: '1100', nl: '11010', s: '11011', a: '111' } */
		/* 哈夫曼编码的结果并不唯一，使用长度测试即可 */
		expect(e.length).toEqual(2);
		expect(i.length).toEqual(2);
		expect(sp.length).toEqual(2);
		expect(a.length).toEqual(3);
		expect(t.length).toEqual(4);
		expect(s.length).toEqual(5);
		expect(nl.length).toEqual(5);
	});
});
