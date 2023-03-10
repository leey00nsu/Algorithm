import sys

sys.setrecursionlimit(10000)


class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


global root
root = None


def insert(node_data):
    global root
    new_node = Node(node_data)
    if not root:
        root = new_node
    else:
        current = root
        while current:
            if current.value < node_data:
                if not (current.right):
                    current.right = new_node
                    break
                else:
                    current = current.right
            else:
                if not (current.left):
                    current.left = new_node
                    break
                else:
                    current = current.left


def post_order(current):
    if current:
        post_order(current.left)
        post_order(current.right)
        print(current.value)


for i in sys.stdin:
    node_data = int(i.rstrip())
    insert(node_data)

post_order(root)
