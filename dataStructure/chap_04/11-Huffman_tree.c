/* Huffman Tree 哈夫曼树 */
/* WPL: Weighted Path Length 带权路径长度 */
/* Huffman Tree 是 WPL 最小的二叉树 */

typedef struct _HuffmanTree {
  int Weight;
  struct _HuffmanTree left;
  struct _HuffmanTree right;
} HuffmanTree;
