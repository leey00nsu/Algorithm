class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class Tree:
    def __init__(self):
        self.result = []
        self.nodes = {}
        self.root = None

    def pre_order(self, root):
        current = root
        self.result.append(current.value)
        if current.left:
            self.pre_order(current.left)
        if current.right:
            self.pre_order(current.right)

    def in_order(self, root):
        current = root
        if current.left:
            self.in_order(current.left)

        self.result.append(current.value)

        if current.right:
            self.in_order(current.right)

    def post_order(self, root):
        current = root
        if current.left:
            self.post_order(current.left)

        if current.right:
            self.post_order(current.right)

        self.result.append(current.value)


tree = Tree()

N = int(input())

for i in range(ord("A"), ord("A") + N):
    new_node = Node(chr(i))
    tree.nodes[chr(i)] = new_node


for i in range(N):
    parent, left_node, right_node = input().split()
    if left_node != ".":
        tree.nodes[parent].left = tree.nodes[left_node]
    if right_node != ".":
        tree.nodes[parent].right = tree.nodes[right_node]

tree.pre_order(tree.nodes["A"])

print("".join(tree.result))

tree.result = []

tree.in_order(tree.nodes["A"])

print("".join(tree.result))

tree.result = []

tree.post_order(tree.nodes["A"])

print("".join(tree.result))

tree.result = []
