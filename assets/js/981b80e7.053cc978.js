"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[113],{5839:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var t=r(4848),i=r(8453);const l={slug:"2024-5-22-revision",title:"Paper 4 - Revision",authors:"hirusha",tags:["revision"]},a=void 0,s={permalink:"/Cambridge-A-Level-Computer-Science-9618-4/blog/2024-5-22-revision",source:"@site/blog/2024-5-22-revision.md",title:"Paper 4 - Revision",description:"DSA & ADTs",date:"2024-05-22T00:00:00.000Z",formattedDate:"May 22, 2024",tags:[{label:"revision",permalink:"/Cambridge-A-Level-Computer-Science-9618-4/blog/tags/revision"}],readingTime:9.015,hasTruncateMarker:!1,authors:[{name:"Hirusha Adikari",title:"A student interested in Technology",url:"https://hirusha.xyz",imageURL:"https://avatars.githubusercontent.com/u/36286877?v=4",key:"hirusha"}],frontMatter:{slug:"2024-5-22-revision",title:"Paper 4 - Revision",authors:"hirusha",tags:["revision"]},unlisted:!1,prevItem:{title:"Paper 4 - Summary",permalink:"/Cambridge-A-Level-Computer-Science-9618-4/blog/2024-5-22-summary"},nextItem:{title:"Question Analysis of Past Papers",permalink:"/Cambridge-A-Level-Computer-Science-9618-4/blog/2024-03-07-question-analysis"}},d={authorsImageUrls:[void 0]},o=[{value:"DSA &amp; ADTs",id:"dsa--adts",level:2},{value:"Binary Search",id:"binary-search",level:2},{value:"Iterative",id:"iterative",level:3},{value:"Recursive",id:"recursive",level:3},{value:"Insertion Sort",id:"insertion-sort",level:2},{value:"Bubble Sort",id:"bubble-sort",level:2},{value:"Stack",id:"stack",level:2},{value:"Method 1",id:"method-1",level:3},{value:"Declaration",id:"declaration",level:4},{value:"Push",id:"push",level:4},{value:"Pop",id:"pop",level:4},{value:"Print",id:"print",level:4},{value:"Method 2",id:"method-2",level:3},{value:"Linear Queue",id:"linear-queue",level:2},{value:"Method 1",id:"method-1-1",level:3},{value:"Declaration",id:"declaration-1",level:4},{value:"Enqueue",id:"enqueue",level:4},{value:"Dequeue",id:"dequeue",level:4},{value:"Method 2",id:"method-2-1",level:3},{value:"Method 3",id:"method-3",level:3},{value:"Circular Queue",id:"circular-queue",level:2},{value:"Declaration",id:"declaration-2",level:4},{value:"Enqueue",id:"enqueue-1",level:4},{value:"Dequeue",id:"dequeue-1",level:4},{value:"Linked List",id:"linked-list",level:2},{value:"Method 1",id:"method-1-2",level:3},{value:"Method 2",id:"method-2-2",level:3},{value:"Method 3",id:"method-3-1",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"dsa--adts",children:"DSA & ADTs"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://hirusha.xyz/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_23/notes/",children:"Click here"})," to open the study note about Data Structures & Algorithms and Abstract Data Types"]}),"\n",(0,t.jsx)(n.h2,{id:"binary-search",children:"Binary Search"}),"\n",(0,t.jsx)(n.h3,{id:"iterative",children:"Iterative"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"data: list[int] = []\r\n\r\ndef binarySearch(target):\r\n    left = 0\r\n    right = len(data) - 1\r\n\r\n    while right >= left:\r\n        mid = (right + left) // 2  # integer divion (DIV)\r\n\r\n        if data[mid] > target:\r\n            right = mid -1\r\n        elif data[mid] < target:\r\n            left = mid + 1\r\n        else: # found\r\n            return mid\r\n\r\n    return -1 # if nout found\n"})}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)("summary",{children:"Minified code"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def b_search(a, x):\r\n    l, r = 0, len(a) - 1\r\n    while l <= r:\r\n        m = (l + r) // 2\r\n        if a[m] > x:\r\n            r = m - 1\r\n        elif a[m] < x:\r\n            l = m + 1\r\n        else:\r\n            return m\r\n    return -1\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"recursive",children:"Recursive"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"data: list[int] = []\r\n\r\ndef binarySearch(left, right, target):\r\n    if right >= left:\r\n        mid = (left + right) // 2\r\n\r\n        if data[mid] == target: # base case\r\n            return mid\r\n        \r\n        elif data[mid] > target:\r\n            return binarySearch(left, mid-1, target)\r\n        \r\n        elif data[mid] < target:\r\n            return binarySearch(mid+1, right, target)\r\n        \r\n    else:\r\n        return -1 # not found\n"})}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)("summary",{children:"Minified code"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def b_search(a, x, l=0, r=None):\r\n    if r is None:\r\n        r = len(a) - 1\r\n    if l > r:\r\n        return -1\r\n    m = (l + r) // 2\r\n    if a[m] == x:\r\n        return m\r\n    elif a[m] < x:\r\n        return b_search(a, x, m + 1, r)\r\n    else:\r\n        return b_search(a, x, l, m - 1)\r\n\r\nb_search(a=arr, x=69) # find 69 from arr\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"insertion-sort",children:"Insertion Sort"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def insertion_sort(arr):\r\n    for i in range(1, len(arr)):\r\n        key = arr[i]\r\n        j = i - 1\r\n        while j >= 0 and arr[j] > key:\r\n            arr[j + 1] = arr[j]\r\n            j -= 1\r\n        arr[j + 1] = key\r\n\r\n# Example usage:\r\narr = [12, 11, 13, 5, 6]\r\ninsertion_sort(arr)\r\nprint("Sorted array is:", arr)\n'})}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)("summary",{children:"Minified code"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def i_sort(a):\r\n    for i in range(1, len(a)):\r\n        k = a[i]\r\n        j = i - 1\r\n        while j >= 0 and a[j] > k:\r\n            a[j + 1] = a[j]\r\n            j -= 1\r\n        a[j + 1] = k\r\n    return a\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"bubble-sort",children:"Bubble Sort"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def bubble_sort(arr):\r\n    n = len(arr)\r\n    for i in range(n):\r\n        for j in range(0, n-i-1): # subtract i to not check them again\r\n            if arr[j] > arr[j+1]: # if large\r\n                arr[j], arr[j+1] = arr[j+1], arr[j] # swap L with R\r\n\r\n# Example usage:\r\narr = [64, 34, 25, 12, 22, 11, 90]\r\nbubble_sort(arr)\r\nprint("Sorted array is:", arr)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"stack",children:"Stack"}),"\n",(0,t.jsx)(n.h3,{id:"method-1",children:"Method 1"}),"\n",(0,t.jsx)(n.p,{children:"This is what comes to the exam"}),"\n",(0,t.jsx)(n.h4,{id:"declaration",children:"Declaration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"need array/list, max size, top pointer"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"size = 8\r\ntopPointer = -1\r\nstack = [ '' for i in range(size) ]\n"})}),"\n",(0,t.jsx)(n.h4,{id:"push",children:"Push"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"if not full, increment top pointer and store"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def push(newValue):\r\n    global size, topPointer, stack\r\n    if (topPointer+1) >= size:\r\n        print("stack is full")\r\n    else:\r\n        topPointer += 1     # increment the pointer\r\n        stack[topPointer] = newValue\r\n        print("added to top of stack")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"pop",children:"Pop"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"decrement top pointer, and optionally, reset the value to empty"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def pop():\r\n    global size, topPointer, stack\r\n    if topPointer < 0:\r\n        print(\"no elements in stack\")\r\n    else:\r\n        # dont actually delete the value, just decrement the pointer\r\n        # stack[topPointer] = '' # unset value, then decrement\r\n        topPointer -= 1 # decrement top pointer\n"})}),"\n",(0,t.jsx)(n.h4,{id:"print",children:"Print"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"print list backwards"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def printStack():\r\n    global size, topPointer, stack\r\n    for i in range(size-1, -1, -1): #start: last, end: first (0), step: -1 \r\n        if i == topPointer:\r\n            print(f"{stack[i]}   <-- topPointer")\r\n        else:\r\n            print(f"{stack[i]}")\n'})}),"\n",(0,t.jsx)(n.h3,{id:"method-2",children:"Method 2"}),"\n",(0,t.jsx)(n.p,{children:"Use this incase if things go wrong"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Stack:\r\n    def __init__(self):\r\n        self.__elements = []\r\n    \r\n    def is_empty(self):\r\n        return len(self.__elements) == 0\r\n    \r\n    def push(self, data):\r\n        self.__elements.append(data)\r\n    \r\n    def pop(self):\r\n        if self.is_empty():\r\n            print("Stack is empty")\r\n        else:\r\n            return self.__elements.pop() # or .pop(-1) -> last added element\r\n    \r\n    def peek(self):\r\n        if self.is_empty():\r\n            print("Stack is empty")\r\n        else:\r\n            return self.__elements[-1] \r\n            # return last element\n'})}),"\n",(0,t.jsx)(n.h2,{id:"linear-queue",children:"Linear Queue"}),"\n",(0,t.jsx)(n.h3,{id:"method-1-1",children:"Method 1"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"one array/list for queue to store data"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"head pointer (int)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"tail pointer (int)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"at empty queue, head-pointer = 0, tail-pointer = -1"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"sometimes, tailP can change, adjust it accordingly in the first run"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"declaration-1",children:"Declaration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"size = 8\r\nnum = 0 # basically for a len() like thing\r\nheadP = 0\r\ntailP = -1\r\nqueue = ['' for _ in range(size)]\n"})}),"\n",(0,t.jsx)(n.h4,{id:"enqueue",children:"Enqueue"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["check if full? if not,","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"increment tail pointer"}),"\n",(0,t.jsx)(n.li,{children:"store in new incremented tail pointer"}),"\n",(0,t.jsx)(n.li,{children:"increment number of elements"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def enqueue(newData):\r\n    global queue, num size, headP, tailP\r\n    if num >= size:\r\n        print("Queue is full")\r\n    else:\r\n        tailP += 1 # increment tailP\r\n        queue[tailP] = newData # store in new tail index\r\n        num += 1 # new element added, for len() like thing\r\n        print("Added item to queue")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"dequeue",children:"Dequeue"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"optionally, remove current value at head-pointer (or replace)"}),"\n",(0,t.jsx)(n.li,{children:"increment head-pointer"}),"\n",(0,t.jsx)(n.li,{children:"decrement number of elements"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def dequeue():\r\n    global queue, num size, headP, tailP\r\n    if num <= 0:\r\n        print("empty queue. no elements.")\r\n    else:\r\n        removed = queue[headP]\r\n        headP += 1\r\n        num -= 1\r\n        print("removed element at fron of queue (element pointed by headP)")\r\n        return removed\n'})}),"\n",(0,t.jsx)(n.h3,{id:"method-2-1",children:"Method 2"}),"\n",(0,t.jsx)(n.p,{children:"Use this incase if things go wrong. Using collections module (pre-installed)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from collections import deque\r\n\r\ndata = deque()              # define\r\ndata.append("data")         # enqueue\r\nremoved = data.popleft()    # dequeue (remove index 0)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"method-3",children:"Method 3"}),"\n",(0,t.jsx)(n.p,{children:"Use this incase if things go wrong. Using out own custom class."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Queue:\r\n    def __init__(self):\r\n        self.items = []\r\n\r\n    def is_empty(self):\r\n        return len(self.items) == 0\r\n\r\n    def enqueue(self, item):\r\n        self.items.append(item) # add to end\r\n\r\n    def dequeue(self):\r\n        # Removes the element from the front of the queue\r\n        if self.is_empty():\r\n            print("queue is empty")\r\n        else:\r\n            # remove first element (index: 0) as FIFO\r\n            return self.items.pop(0)\r\n\r\n    def peek(self):\r\n         if self.is_empty():\r\n            print("queue is empty")\r\n        else:\r\n            # return first element (index: 0)\r\n            return self.items[0]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"circular-queue",children:"Circular Queue"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"no two methods, so remeber this."}),"\n",(0,t.jsx)(n.li,{children:"same stuff as linear queue, but wraps around."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt text",src:r(5348).A+"",width:"507",height:"420"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"waste of memmory here. we can move the tail pointer to wrap around the empty spaces, not waste memmory. that is where the circular queues become handy."}),"\n",(0,t.jsx)(n.li,{children:"note that when dequeuing, we should also to wrap around the head pointer"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"declaration-2",children:"Declaration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"size = 8\r\nnum = 0 # basically for a len() like thing\r\nheadP = 0\r\ntailP = -1\r\nqueue = ['' for _ in range(size)]\n"})}),"\n",(0,t.jsx)(n.h4,{id:"enqueue-1",children:"Enqueue"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["check if full? if not,","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"increment tail pointer"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"if tailP > size-1: set tailP to 0"})}),"\n",(0,t.jsx)(n.li,{children:"store in new incremented tail pointer"}),"\n",(0,t.jsx)(n.li,{children:"increment number of elements"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def enqueue(newData):\r\n    global queue, num size, headP, tailP\r\n    if num >= size:\r\n        print("Queue is full")\r\n    else:\r\n        tailP += 1 # increment tailP\r\n\r\n        # adjust the queue to become circular\r\n        # -----\r\n        if tailP > size-1:\r\n            tailP = 0\r\n        # -----\r\n\r\n        queue[tailP] = newData # store in new tail index\r\n        num += 1 # new element added, for len() like thing\r\n        print("Added item to queue")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"dequeue-1",children:"Dequeue"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"optionally, remove current value at head-pointer (or replace)"}),"\n",(0,t.jsx)(n.li,{children:"increment head-pointer"}),"\n",(0,t.jsx)(n.li,{children:"decrement number of elements"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def dequeue():\r\n    global queue, num size, headP, tailP\r\n    if num <= 0:\r\n        print("empty queue. no elements.")\r\n    else:\r\n        removed = queue[headP]\r\n        headP += 1\r\n        num -= 1\r\n\r\n        # adjust the queue to become circular\r\n        # -----\r\n        if headP > size-1:\r\n            headP = 0\r\n        # -----\r\n\r\n        print("removed element at fron of queue (element pointed by headP)")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"linked-list",children:"Linked List"}),"\n",(0,t.jsx)(n.h3,{id:"method-1-2",children:"Method 1"}),"\n",(0,t.jsxs)(n.p,{children:["Oof. Nothing here. Go try something from method 2, or watch ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=tLHdz4VTmAs",children:"this video"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Just remember this code block:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"while cur.next != None:\r\n    cur = cur.next\r\n    # do stuff here\r\n    # ...\n"})}),"\n",(0,t.jsx)(n.h3,{id:"method-2-2",children:"Method 2"}),"\n",(0,t.jsxs)(n.p,{children:["Use this incase if things go wrong. Simple. Based on ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=JlMyYuY1aXU",children:"this video"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Node:\r\n    def __init__(self, data=None):\r\n        self.data = data\r\n        self.next = None\r\n\r\nclass LinkedList:\r\n    def __init__(self):\r\n        self.head = Node()\r\n    \r\n    def append(self, data):\r\n        new_node = Node(data=data)\r\n        cur = self.head # start from beginning\r\n\r\n        while cur.next != None: # next element of current is not None\r\n            # means, this is not the final node\r\n            cur = cur.next # so, go to next node\r\n        \r\n        cur.next = new_node\r\n    \r\n    def length(self):\r\n        cur = self.head\r\n        total = 0\r\n        while cur.next != None:\r\n            total += 1\r\n            cur = cur.next\r\n        return total\r\n\r\n    def display_linkedList(self):\r\n        elems = []\r\n        cur = self.head\r\n        while cur.next != None:\r\n            cur = cur.next\r\n            elems.append(cur.data)\r\n        print(elems)\r\n    \r\n    def get(self, index):\r\n        # from 1, doesnt start from 0\r\n        if index >= self.length():\r\n            print("Index out of range!")\r\n            return None\r\n        \r\n        cur_id = 0\r\n        cur_node = self.head\r\n\r\n        while True:\r\n            cur_node = cur_node.next # go through every node\r\n            if cur_id == index:\r\n                return cur_node.data # break and return when index = cur_node idx\r\n            cur_id += 1\r\n    \r\n    def erase(self, index):\r\n        if index >= self.length():\r\n            print("Index out of range!")\r\n            return None\r\n        \r\n        cur_id = 0\r\n        cur_node = self.head\r\n        while True:\r\n            last_node = cur_node\r\n            cur_node = cur_node.next\r\n            if cur_id == index: # when current node\'s index = given index\r\n                last_node.next = cur_node.next\r\n                return\r\n            cur_id += 1\r\n\r\n\r\nll = LinkedList()\r\nll.display_linkedList() # []\r\n\r\nll.append(3)        \r\nll.append(5)        \r\nll.append(2)        \r\nll.append(9)        \r\n        \r\nll.display_linkedList() # [3, 5, 2, 9]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"method-3-1",children:"Method 3"}),"\n",(0,t.jsx)(n.p,{children:"Use this incase if things go wrong. Too complex."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Node:\r\n    def __init__(self, data):\r\n        self.data = data\r\n        self.next = None\r\n\r\nclass LinkedList:\r\n    def __init__(self):\r\n        self.head = None # empty LL with None head\r\n\r\n    def is_empty(self):\r\n        return self.head is None # is empty?\r\n    \r\n    def add_at_head(self, data):\r\n        new_node = Node(data)\r\n        new_node.next = self.head\r\n        self.head = new_node\r\n    \r\n    def add_at_tail(self, data):\r\n        new_node = Node(data) # new tmp node\r\n\r\n        if self.is_empty(): # if empty, new node to head\r\n            self.head = new_node\r\n        else:\r\n            current = self.head\r\n            while current.next is not None: # traverse to end\r\n                current = current.next\r\n            current.next = new_node # append new node\r\n\r\n    def add_at_middle(self, data, position):\r\n        new_node = Node(data) # new node\r\n\r\n        if self.is_empty(): # if empty, set at head\r\n            self.head = new_node\r\n        elif position == 0: # if insert at start,\r\n                            # insert at beginning\r\n            new_node.next = self.head\r\n            self.head = new_node\r\n        else:\r\n            # traverse to given position\r\n            current = self.head\r\n            count = 1\r\n\r\n            while count < position and current.next is not None:\r\n                current = current.next\r\n                count += 1\r\n\r\n            # add new node\r\n            new_node.next = current.next\r\n            current.next = new_node\r\n        \r\n    def search(self, data):\r\n        current = self.head\r\n\r\n        # until end\r\n        while current is not None:\r\n            if current.data == data:\r\n                return True\r\n            current = current.next # go to next node\r\n\r\n        return False\r\n    \r\n    def remove(self, data):\r\n        if self.is_empty(): # rem first occurence\r\n            return\r\n\r\n        if self.head.data == data:\r\n            # If the head contains the data, update the head\r\n            self.head = self.head.next\r\n            return\r\n\r\n        current = self.head\r\n        while current.next is not None: # traverse until found\r\n            if current.next.data == data: # find data\r\n                current.next = current.next.next\r\n                return # remove\r\n            current = current.next\r\n        \r\n    def display(self):\r\n        current = self.head\r\n        while current is not None: # condition\r\n            print(current.data, end=" -> ") \r\n            current = current.next  # go to next node\r\n        print("None") # final node\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},5348:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/image-1a5f178a27358f9a0344b502c8ba67ed.png"},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>s});var t=r(6540);const i={},l=t.createContext(i);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);