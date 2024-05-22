"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29],{2440:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"2024-5-22-summary","metadata":{"permalink":"/Cambridge-A-Level-Computer-Science-9618-4/blog/2024-5-22-summary","source":"@site/blog/2024-5-23-summary.md","title":"Paper 4 - Summary","description":"Binary Search","date":"2024-05-23T00:00:00.000Z","formattedDate":"May 23, 2024","tags":[{"label":"revision","permalink":"/Cambridge-A-Level-Computer-Science-9618-4/blog/tags/revision"}],"readingTime":6.03,"hasTruncateMarker":false,"authors":[{"name":"Hirusha Adikari","title":"A student interested in Technology","url":"https://hirusha.xyz","imageURL":"https://avatars.githubusercontent.com/u/36286877?v=4","key":"hirusha"}],"frontMatter":{"slug":"2024-5-22-summary","title":"Paper 4 - Summary","authors":"hirusha","tags":["revision"]},"unlisted":false,"nextItem":{"title":"Paper 4 - Revision","permalink":"/Cambridge-A-Level-Computer-Science-9618-4/blog/2024-5-22-revision"}},"content":"## Binary Search\\r\\n\\r\\n```python\\r\\ndata: list[int] = []\\r\\n\\r\\ndef binarySearch(target):\\r\\n    left = 0\\r\\n    right = len(data) - 1\\r\\n\\r\\n    while right >= left:\\r\\n        mid = (right + left) // 2  # integer divion (DIV)\\r\\n\\r\\n        if data[mid] > target:\\r\\n            right = mid -1\\r\\n        elif data[mid] < target:\\r\\n            left = mid + 1\\r\\n        else: # found\\r\\n            return mid\\r\\n\\r\\n    return -1 # if nout found\\r\\n```\\r\\n\\r\\n## Insertion Sort\\r\\n\\r\\n```python\\r\\ndef insertion_sort(arr):\\r\\n    for i in range(1, len(arr)):\\r\\n        key = arr[i]\\r\\n        j = i - 1\\r\\n        while j >= 0 and arr[j] > key:\\r\\n            arr[j + 1] = arr[j]\\r\\n            j -= 1\\r\\n        arr[j + 1] = key\\r\\n\\r\\n# Example usage:\\r\\narr = [12, 11, 13, 5, 6]\\r\\ninsertion_sort(arr)\\r\\nprint(\\"Sorted array is:\\", arr)\\r\\n```\\r\\n\\r\\n## Bubble Sort\\r\\n\\r\\n```python\\r\\ndef bubble_sort(arr):\\r\\n    n = len(arr)\\r\\n    for i in range(n):\\r\\n        for j in range(0, n-i-1): # subtract i to not check them again\\r\\n            if arr[j] > arr[j+1]: # if large\\r\\n                arr[j], arr[j+1] = arr[j+1], arr[j] # swap L with R\\r\\n\\r\\n# Example usage:\\r\\narr = [64, 34, 25, 12, 22, 11, 90]\\r\\nbubble_sort(arr)\\r\\nprint(\\"Sorted array is:\\", arr)\\r\\n```\\r\\n\\r\\n## Stack\\r\\n\\r\\n- need array/list, max size, top pointer\\r\\n- **Push**: if not full, increment top pointer and store  (or do `arr.append(val)`)\\r\\n- **Pop**: decrement top pointer, and optionally, reset the value to empty  (or do `arr.pop(<-1>)`)\\r\\n- **Print**: print the list backwards, basically ( `print(arr[::-1])`-ish kinda thing )\\r\\n\\r\\n```python\\r\\nsize = 8\\r\\ntopPointer = -1\\r\\nstack = [ \'\' for i in range(size) ]\\r\\n\\r\\ndef push(newValue):\\r\\n    global size, topPointer, stack\\r\\n    if (topPointer+1) >= size:\\r\\n        print(\\"stack is full\\")\\r\\n    else:\\r\\n        topPointer += 1     # increment the pointer\\r\\n        stack[topPointer] = newValue\\r\\n        print(\\"added to top of stack\\")\\r\\n\\r\\ndef pop():\\r\\n    global size, topPointer, stack\\r\\n    if topPointer < 0:\\r\\n        print(\\"no elements in stack\\")\\r\\n    else:\\r\\n        # dont actually delete the value, just decrement the pointer\\r\\n        # stack[topPointer] = \'\' # unset value, then decrement\\r\\n        topPointer -= 1 # decrement top pointer\\r\\n\\r\\ndef printStack():\\r\\n    global size, topPointer, stack\\r\\n    for i in range(size-1, -1, -1): #start: last, end: first (0), step: -1 \\r\\n        if i == topPointer:\\r\\n            print(f\\"{stack[i]}   <-- topPointer\\")\\r\\n        else:\\r\\n            print(f\\"{stack[i]}\\")\\r\\n```\\r\\n\\r\\n## Linear Queue\\r\\n\\r\\n- one array/list for queue to store data\\r\\n- head pointer (int)\\r\\n- tail pointer (int)\\r\\n- at empty queue, head-pointer = 0, tail-pointer = -1\\r\\n- sometimes, tailP can change, adjust it accordingly in the first run\\r\\n\\r\\n- **Enqueue**: \\r\\n    - check if full? if not,\\r\\n    - increment tail pointer\\r\\n    - store in new incremented tail pointer\\r\\n    - increment number of elements\\r\\n\\r\\n- **Dequeue**: \\r\\n    - optionally, remove current value at head-pointer (or replace)\\r\\n    - increment head-pointer\\r\\n    - decrement number of elements\\r\\n\\r\\n```python\\r\\nsize = 8\\r\\nnum = 0 # basically for a len() like thing\\r\\nheadP = 0\\r\\ntailP = -1\\r\\nqueue = [\'\' for _ in range(size)]\\r\\n\\r\\ndef enqueue(newData):\\r\\n    global queue, num size, headP, tailP\\r\\n    if num >= size:\\r\\n        print(\\"Queue is full\\")\\r\\n    else:\\r\\n        tailP += 1 # increment tailP\\r\\n        queue[tailP] = newData # store in new tail index\\r\\n        num += 1 # new element added, for len() like thing\\r\\n        print(\\"Added item to queue\\")\\r\\n\\r\\ndef dequeue():\\r\\n    global queue, num size, headP, tailP\\r\\n    if num <= 0:\\r\\n        print(\\"empty queue. no elements.\\")\\r\\n    else:\\r\\n        removed = queue[headP]\\r\\n        headP += 1\\r\\n        num -= 1\\r\\n        print(\\"removed element at fron of queue (element pointed by headP)\\")\\r\\n        return removed\\r\\n```\\r\\n\\r\\n\\r\\n#### Linear Queues - Method 2\\r\\n\\r\\nUse this incase if things go wrong. Using `collections` module (pre-installed)\\r\\n\\r\\n```python\\r\\nfrom collections import deque\\r\\n\\r\\ndata = deque()              # define\\r\\ndata.append(\\"data\\")         # enqueue\\r\\nremoved = data.popleft()    # dequeue (remove index 0)\\r\\n```\\r\\n\\r\\n## Circular Queue\\r\\n\\r\\n- no two methods, so remeber this.\\r\\n- same stuff as linear queue, but wraps around.\\r\\n\\r\\n![alt text](image.png)\\r\\n\\r\\n- waste of memmory here. we can move the tail pointer to wrap around the empty spaces, not waste memmory. that is where the circular queues become handy. \\r\\n- note that when dequeuing, we should also to wrap around the head pointer\\r\\n\\r\\n- **Enqueue:**\\r\\n    - check if full? if not,\\r\\n    - increment tail pointer\\r\\n    - **if tailP > size-1: set tailP to 0**\\r\\n    - store in new incremented tail pointer\\r\\n    - increment number of elements\\r\\n\\r\\n- **Dequeue**\\r\\n    - optionally, remove current value at head-pointer (or replace)\\r\\n    - increment head-pointer\\r\\n    - decrement number of elements\\r\\n    - **if headP > size-1: set headP to 0**\\r\\n\\r\\n\\r\\n```python\\r\\nsize = 8\\r\\nnum = 0 # basically for a len() like thing\\r\\nheadP = 0\\r\\ntailP = -1\\r\\nqueue = [\'\' for _ in range(size)]\\r\\n\\r\\ndef enqueue(newData):\\r\\n    global queue, num size, headP, tailP\\r\\n    if num >= size:\\r\\n        print(\\"Queue is full\\")\\r\\n    else:\\r\\n        tailP += 1 # increment tailP\\r\\n\\r\\n        # adjust the queue to become circular\\r\\n        # -----\\r\\n        if tailP > size-1:\\r\\n            tailP = 0\\r\\n        # -----\\r\\n\\r\\n        queue[tailP] = newData # store in new tail index\\r\\n        num += 1 # new element added, for len() like thing\\r\\n        print(\\"Added item to queue\\")\\r\\n\\r\\ndef dequeue():\\r\\n    global queue, num size, headP, tailP\\r\\n    if num <= 0:\\r\\n        print(\\"empty queue. no elements.\\")\\r\\n    else:\\r\\n        removed = queue[headP]\\r\\n        headP += 1\\r\\n        num -= 1\\r\\n\\r\\n        # adjust the queue to become circular\\r\\n        # -----\\r\\n        if headP > size-1:\\r\\n            headP = 0\\r\\n        # -----\\r\\n\\r\\n        print(\\"removed element at fron of queue (element pointed by headP)\\")\\r\\n```\\r\\n\\r\\n\\r\\n## Linked List\\r\\n\\r\\n- Remember this\\r\\n\\r\\n```python\\r\\n# keep on going to next node, \\r\\n# until last node, \\r\\n# which points to None/-1\\r\\nwhile cur.next != None: \\r\\n    cur = cur.next      # go to next note\\r\\n    # do stuff here\\r\\n    # ...\\r\\n```\\r\\n\\r\\n- Sample code:\\r\\n\\r\\n```python\\r\\nclass Node:\\r\\n    def __init__(self, data=None):\\r\\n        self.data = data\\r\\n        self.next = None\\r\\n\\r\\nclass LinkedList:\\r\\n    def __init__(self):\\r\\n        self.head = Node()\\r\\n    \\r\\n    def append(self, data):\\r\\n        new_node = Node(data=data)\\r\\n        cur = self.head # start from beginning\\r\\n\\r\\n        while cur.next != None: # next element of current is not None\\r\\n            # means, this is not the final node\\r\\n            cur = cur.next # so, go to next node\\r\\n        \\r\\n        cur.next = new_node\\r\\n    \\r\\n    def length(self):\\r\\n        cur = self.head\\r\\n        total = 0\\r\\n        while cur.next != None:\\r\\n            total += 1\\r\\n            cur = cur.next\\r\\n        return total\\r\\n\\r\\n    def display_linkedList(self):\\r\\n        elems = []\\r\\n        cur = self.head\\r\\n        while cur.next != None:\\r\\n            cur = cur.next\\r\\n            elems.append(cur.data)\\r\\n        print(elems)\\r\\n    \\r\\n    def get(self, index):\\r\\n        # from 1, doesnt start from 0\\r\\n        if index >= self.length():\\r\\n            print(\\"Index out of range!\\")\\r\\n            return None\\r\\n        \\r\\n        cur_id = 0\\r\\n        cur_node = self.head\\r\\n\\r\\n        while True:\\r\\n            cur_node = cur_node.next # go through every node\\r\\n            if cur_id == index:\\r\\n                return cur_node.data # break and return when index = cur_node idx\\r\\n            cur_id += 1\\r\\n    \\r\\n    def erase(self, index):\\r\\n        if index >= self.length():\\r\\n            print(\\"Index out of range!\\")\\r\\n            return None\\r\\n        \\r\\n        cur_id = 0\\r\\n        cur_node = self.head\\r\\n        while True:\\r\\n            last_node = cur_node\\r\\n            cur_node = cur_node.next\\r\\n            if cur_id == index: # when current node\'s index = given index\\r\\n                last_node.next = cur_node.next\\r\\n                return\\r\\n            cur_id += 1\\r\\n\\r\\n\\r\\nll = LinkedList()\\r\\nll.display_linkedList() # []\\r\\n\\r\\nll.append(3)        \\r\\nll.append(5)        \\r\\nll.append(2)        \\r\\nll.append(9)        \\r\\n        \\r\\nll.display_linkedList() # [3, 5, 2, 9]\\r\\n```\\r\\n\\r\\n## OOP\\r\\n\\r\\nThe `super()` function provides a way to call the methods of a parent class from within a child class.\\r\\n\\r\\n```python\\r\\nclass Parent:\\r\\n    def __init__(self, name):\\r\\n        self.name = name\\r\\n    \\r\\n    def greet(self):\\r\\n        print(f\\"Hello, my name is {self.name}\\")\\r\\n\\r\\nclass Child(Parent):\\r\\n    def __init__(self, name, age):\\r\\n        super().__init__(name)  # Call the parent class\'s __init__ method\\r\\n        self.age = age\\r\\n    \\r\\n    def greet(self):\\r\\n        super().greet()  # Call the parent class\'s greet method\\r\\n        print(f\\"I am {self.age} years old\\")\\r\\n\\r\\n\\r\\nchild = Child(\\"Alice\\", 12) # Instance of the Child class\\r\\nchild.greet()\\r\\n# ---\\r\\n# Hello, my name is Alice\\r\\n# I am 12 years old\\r\\n\\r\\n```"},{"id":"2024-5-22-revision","metadata":{"permalink":"/Cambridge-A-Level-Computer-Science-9618-4/blog/2024-5-22-revision","source":"@site/blog/2024-5-22-revision.md","title":"Paper 4 - Revision","description":"DSA & ADTs","date":"2024-05-22T00:00:00.000Z","formattedDate":"May 22, 2024","tags":[{"label":"revision","permalink":"/Cambridge-A-Level-Computer-Science-9618-4/blog/tags/revision"}],"readingTime":9.015,"hasTruncateMarker":false,"authors":[{"name":"Hirusha Adikari","title":"A student interested in Technology","url":"https://hirusha.xyz","imageURL":"https://avatars.githubusercontent.com/u/36286877?v=4","key":"hirusha"}],"frontMatter":{"slug":"2024-5-22-revision","title":"Paper 4 - Revision","authors":"hirusha","tags":["revision"]},"unlisted":false,"prevItem":{"title":"Paper 4 - Summary","permalink":"/Cambridge-A-Level-Computer-Science-9618-4/blog/2024-5-22-summary"},"nextItem":{"title":"Question Analysis of Past Papers","permalink":"/Cambridge-A-Level-Computer-Science-9618-4/blog/2024-03-07-question-analysis"}},"content":"## DSA & ADTs\\r\\n\\r\\n[Click here](https://hirusha.xyz/docs/study/cie_al/computer_science/paper_4/my_study_notes/chapter_23/notes/) to open the study note about Data Structures & Algorithms and Abstract Data Types\\r\\n\\r\\n\\r\\n## Binary Search\\r\\n\\r\\n### Iterative\\r\\n\\r\\n```python\\r\\ndata: list[int] = []\\r\\n\\r\\ndef binarySearch(target):\\r\\n    left = 0\\r\\n    right = len(data) - 1\\r\\n\\r\\n    while right >= left:\\r\\n        mid = (right + left) // 2  # integer divion (DIV)\\r\\n\\r\\n        if data[mid] > target:\\r\\n            right = mid -1\\r\\n        elif data[mid] < target:\\r\\n            left = mid + 1\\r\\n        else: # found\\r\\n            return mid\\r\\n\\r\\n    return -1 # if nout found\\r\\n```\\r\\n\\r\\n<details>\\r\\n\\r\\n<summary>Minified code</summary>\\r\\n\\r\\n```python\\r\\ndef b_search(a, x):\\r\\n    l, r = 0, len(a) - 1\\r\\n    while l <= r:\\r\\n        m = (l + r) // 2\\r\\n        if a[m] > x:\\r\\n            r = m - 1\\r\\n        elif a[m] < x:\\r\\n            l = m + 1\\r\\n        else:\\r\\n            return m\\r\\n    return -1\\r\\n```\\r\\n\\r\\n</details>\\r\\n\\r\\n\\r\\n### Recursive\\r\\n\\r\\n```python\\r\\ndata: list[int] = []\\r\\n\\r\\ndef binarySearch(left, right, target):\\r\\n    if right >= left:\\r\\n        mid = (left + right) // 2\\r\\n\\r\\n        if data[mid] == target: # base case\\r\\n            return mid\\r\\n        \\r\\n        elif data[mid] > target:\\r\\n            return binarySearch(left, mid-1, target)\\r\\n        \\r\\n        elif data[mid] < target:\\r\\n            return binarySearch(mid+1, right, target)\\r\\n        \\r\\n    else:\\r\\n        return -1 # not found\\r\\n```\\r\\n\\r\\n<details>\\r\\n\\r\\n<summary>Minified code</summary>\\r\\n\\r\\n```python\\r\\ndef b_search(a, x, l=0, r=None):\\r\\n    if r is None:\\r\\n        r = len(a) - 1\\r\\n    if l > r:\\r\\n        return -1\\r\\n    m = (l + r) // 2\\r\\n    if a[m] == x:\\r\\n        return m\\r\\n    elif a[m] < x:\\r\\n        return b_search(a, x, m + 1, r)\\r\\n    else:\\r\\n        return b_search(a, x, l, m - 1)\\r\\n\\r\\nb_search(a=arr, x=69) # find 69 from arr\\r\\n```\\r\\n\\r\\n</details>\\r\\n\\r\\n## Insertion Sort\\r\\n\\r\\n```python\\r\\ndef insertion_sort(arr):\\r\\n    for i in range(1, len(arr)):\\r\\n        key = arr[i]\\r\\n        j = i - 1\\r\\n        while j >= 0 and arr[j] > key:\\r\\n            arr[j + 1] = arr[j]\\r\\n            j -= 1\\r\\n        arr[j + 1] = key\\r\\n\\r\\n# Example usage:\\r\\narr = [12, 11, 13, 5, 6]\\r\\ninsertion_sort(arr)\\r\\nprint(\\"Sorted array is:\\", arr)\\r\\n```\\r\\n\\r\\n<details>\\r\\n\\r\\n<summary>Minified code</summary>\\r\\n\\r\\n```python\\r\\ndef i_sort(a):\\r\\n    for i in range(1, len(a)):\\r\\n        k = a[i]\\r\\n        j = i - 1\\r\\n        while j >= 0 and a[j] > k:\\r\\n            a[j + 1] = a[j]\\r\\n            j -= 1\\r\\n        a[j + 1] = k\\r\\n    return a\\r\\n```\\r\\n\\r\\n</details>\\r\\n\\r\\n## Bubble Sort\\r\\n\\r\\n```python\\r\\ndef bubble_sort(arr):\\r\\n    n = len(arr)\\r\\n    for i in range(n):\\r\\n        for j in range(0, n-i-1): # subtract i to not check them again\\r\\n            if arr[j] > arr[j+1]: # if large\\r\\n                arr[j], arr[j+1] = arr[j+1], arr[j] # swap L with R\\r\\n\\r\\n# Example usage:\\r\\narr = [64, 34, 25, 12, 22, 11, 90]\\r\\nbubble_sort(arr)\\r\\nprint(\\"Sorted array is:\\", arr)\\r\\n```\\r\\n\\r\\n## Stack\\r\\n\\r\\n### Method 1\\r\\n\\r\\nThis is what comes to the exam\\r\\n\\r\\n#### Declaration\\r\\n\\r\\n- need array/list, max size, top pointer\\r\\n\\r\\n```python\\r\\nsize = 8\\r\\ntopPointer = -1\\r\\nstack = [ \'\' for i in range(size) ]\\r\\n```\\r\\n\\r\\n#### Push\\r\\n\\r\\n- if not full, increment top pointer and store\\r\\n\\r\\n```python\\r\\ndef push(newValue):\\r\\n    global size, topPointer, stack\\r\\n    if (topPointer+1) >= size:\\r\\n        print(\\"stack is full\\")\\r\\n    else:\\r\\n        topPointer += 1     # increment the pointer\\r\\n        stack[topPointer] = newValue\\r\\n        print(\\"added to top of stack\\")\\r\\n```\\r\\n\\r\\n#### Pop\\r\\n\\r\\n- decrement top pointer, and optionally, reset the value to empty\\r\\n\\r\\n```python\\r\\ndef pop():\\r\\n    global size, topPointer, stack\\r\\n    if topPointer < 0:\\r\\n        print(\\"no elements in stack\\")\\r\\n    else:\\r\\n        # dont actually delete the value, just decrement the pointer\\r\\n        # stack[topPointer] = \'\' # unset value, then decrement\\r\\n        topPointer -= 1 # decrement top pointer\\r\\n```\\r\\n\\r\\n#### Print\\r\\n\\r\\n- print list backwards\\r\\n\\r\\n```python\\r\\ndef printStack():\\r\\n    global size, topPointer, stack\\r\\n    for i in range(size-1, -1, -1): #start: last, end: first (0), step: -1 \\r\\n        if i == topPointer:\\r\\n            print(f\\"{stack[i]}   <-- topPointer\\")\\r\\n        else:\\r\\n            print(f\\"{stack[i]}\\")\\r\\n```\\r\\n\\r\\n### Method 2\\r\\n\\r\\nUse this incase if things go wrong\\r\\n\\r\\n```python\\r\\nclass Stack:\\r\\n    def __init__(self):\\r\\n        self.__elements = []\\r\\n    \\r\\n    def is_empty(self):\\r\\n        return len(self.__elements) == 0\\r\\n    \\r\\n    def push(self, data):\\r\\n        self.__elements.append(data)\\r\\n    \\r\\n    def pop(self):\\r\\n        if self.is_empty():\\r\\n            print(\\"Stack is empty\\")\\r\\n        else:\\r\\n            return self.__elements.pop() # or .pop(-1) -> last added element\\r\\n    \\r\\n    def peek(self):\\r\\n        if self.is_empty():\\r\\n            print(\\"Stack is empty\\")\\r\\n        else:\\r\\n            return self.__elements[-1] \\r\\n            # return last element\\r\\n```\\r\\n\\r\\n\\r\\n## Linear Queue\\r\\n\\r\\n### Method 1\\r\\n\\r\\n- one array/list for queue to store data\\r\\n- head pointer (int)\\r\\n- tail pointer (int)\\r\\n\\r\\n\\r\\n- at empty queue, head-pointer = 0, tail-pointer = -1\\r\\n- sometimes, tailP can change, adjust it accordingly in the first run\\r\\n\\r\\n\\r\\n#### Declaration\\r\\n\\r\\n```python\\r\\nsize = 8\\r\\nnum = 0 # basically for a len() like thing\\r\\nheadP = 0\\r\\ntailP = -1\\r\\nqueue = [\'\' for _ in range(size)]\\r\\n```\\r\\n\\r\\n#### Enqueue\\r\\n\\r\\n- check if full? if not,\\r\\n    - increment tail pointer\\r\\n    - store in new incremented tail pointer\\r\\n    - increment number of elements\\r\\n\\r\\n```python\\r\\ndef enqueue(newData):\\r\\n    global queue, num size, headP, tailP\\r\\n    if num >= size:\\r\\n        print(\\"Queue is full\\")\\r\\n    else:\\r\\n        tailP += 1 # increment tailP\\r\\n        queue[tailP] = newData # store in new tail index\\r\\n        num += 1 # new element added, for len() like thing\\r\\n        print(\\"Added item to queue\\")\\r\\n```\\r\\n\\r\\n\\r\\n#### Dequeue\\r\\n\\r\\n- optionally, remove current value at head-pointer (or replace)\\r\\n- increment head-pointer\\r\\n- decrement number of elements\\r\\n\\r\\n```python\\r\\ndef dequeue():\\r\\n    global queue, num size, headP, tailP\\r\\n    if num <= 0:\\r\\n        print(\\"empty queue. no elements.\\")\\r\\n    else:\\r\\n        removed = queue[headP]\\r\\n        headP += 1\\r\\n        num -= 1\\r\\n        print(\\"removed element at fron of queue (element pointed by headP)\\")\\r\\n        return removed\\r\\n```\\r\\n\\r\\n\\r\\n### Method 2\\r\\n\\r\\nUse this incase if things go wrong. Using collections module (pre-installed)\\r\\n\\r\\n```python\\r\\nfrom collections import deque\\r\\n\\r\\ndata = deque()              # define\\r\\ndata.append(\\"data\\")         # enqueue\\r\\nremoved = data.popleft()    # dequeue (remove index 0)\\r\\n```\\r\\n\\r\\n\\r\\n### Method 3\\r\\n\\r\\nUse this incase if things go wrong. Using out own custom class.\\r\\n\\r\\n```python\\r\\nclass Queue:\\r\\n    def __init__(self):\\r\\n        self.items = []\\r\\n\\r\\n    def is_empty(self):\\r\\n        return len(self.items) == 0\\r\\n\\r\\n    def enqueue(self, item):\\r\\n        self.items.append(item) # add to end\\r\\n\\r\\n    def dequeue(self):\\r\\n        # Removes the element from the front of the queue\\r\\n        if self.is_empty():\\r\\n            print(\\"queue is empty\\")\\r\\n        else:\\r\\n            # remove first element (index: 0) as FIFO\\r\\n            return self.items.pop(0)\\r\\n\\r\\n    def peek(self):\\r\\n         if self.is_empty():\\r\\n            print(\\"queue is empty\\")\\r\\n        else:\\r\\n            # return first element (index: 0)\\r\\n            return self.items[0]\\r\\n```\\r\\n\\r\\n## Circular Queue\\r\\n\\r\\n- no two methods, so remeber this.\\r\\n- same stuff as linear queue, but wraps around.\\r\\n\\r\\n![alt text](image.png)\\r\\n\\r\\n- waste of memmory here. we can move the tail pointer to wrap around the empty spaces, not waste memmory. that is where the circular queues become handy. \\r\\n- note that when dequeuing, we should also to wrap around the head pointer\\r\\n\\r\\n\\r\\n#### Declaration\\r\\n\\r\\n```python\\r\\nsize = 8\\r\\nnum = 0 # basically for a len() like thing\\r\\nheadP = 0\\r\\ntailP = -1\\r\\nqueue = [\'\' for _ in range(size)]\\r\\n```\\r\\n\\r\\n#### Enqueue\\r\\n\\r\\n- check if full? if not,\\r\\n    - increment tail pointer\\r\\n    - **if tailP > size-1: set tailP to 0**\\r\\n    - store in new incremented tail pointer\\r\\n    - increment number of elements\\r\\n\\r\\n```python\\r\\ndef enqueue(newData):\\r\\n    global queue, num size, headP, tailP\\r\\n    if num >= size:\\r\\n        print(\\"Queue is full\\")\\r\\n    else:\\r\\n        tailP += 1 # increment tailP\\r\\n\\r\\n        # adjust the queue to become circular\\r\\n        # -----\\r\\n        if tailP > size-1:\\r\\n            tailP = 0\\r\\n        # -----\\r\\n\\r\\n        queue[tailP] = newData # store in new tail index\\r\\n        num += 1 # new element added, for len() like thing\\r\\n        print(\\"Added item to queue\\")\\r\\n```\\r\\n\\r\\n\\r\\n#### Dequeue\\r\\n\\r\\n- optionally, remove current value at head-pointer (or replace)\\r\\n- increment head-pointer\\r\\n- decrement number of elements\\r\\n\\r\\n```python\\r\\ndef dequeue():\\r\\n    global queue, num size, headP, tailP\\r\\n    if num <= 0:\\r\\n        print(\\"empty queue. no elements.\\")\\r\\n    else:\\r\\n        removed = queue[headP]\\r\\n        headP += 1\\r\\n        num -= 1\\r\\n\\r\\n        # adjust the queue to become circular\\r\\n        # -----\\r\\n        if headP > size-1:\\r\\n            headP = 0\\r\\n        # -----\\r\\n\\r\\n        print(\\"removed element at fron of queue (element pointed by headP)\\")\\r\\n```\\r\\n\\r\\n\\r\\n## Linked List\\r\\n\\r\\n### Method 1\\r\\n\\r\\nOof. Nothing here. Go try something from method 2, or watch [this video](https://www.youtube.com/watch?v=tLHdz4VTmAs).\\r\\n\\r\\nJust remember this code block:\\r\\n\\r\\n```python\\r\\nwhile cur.next != None:\\r\\n    cur = cur.next\\r\\n    # do stuff here\\r\\n    # ...\\r\\n```\\r\\n\\r\\n### Method 2\\r\\n\\r\\nUse this incase if things go wrong. Simple. Based on [this video](https://www.youtube.com/watch?v=JlMyYuY1aXU)\\r\\n\\r\\n```python\\r\\nclass Node:\\r\\n    def __init__(self, data=None):\\r\\n        self.data = data\\r\\n        self.next = None\\r\\n\\r\\nclass LinkedList:\\r\\n    def __init__(self):\\r\\n        self.head = Node()\\r\\n    \\r\\n    def append(self, data):\\r\\n        new_node = Node(data=data)\\r\\n        cur = self.head # start from beginning\\r\\n\\r\\n        while cur.next != None: # next element of current is not None\\r\\n            # means, this is not the final node\\r\\n            cur = cur.next # so, go to next node\\r\\n        \\r\\n        cur.next = new_node\\r\\n    \\r\\n    def length(self):\\r\\n        cur = self.head\\r\\n        total = 0\\r\\n        while cur.next != None:\\r\\n            total += 1\\r\\n            cur = cur.next\\r\\n        return total\\r\\n\\r\\n    def display_linkedList(self):\\r\\n        elems = []\\r\\n        cur = self.head\\r\\n        while cur.next != None:\\r\\n            cur = cur.next\\r\\n            elems.append(cur.data)\\r\\n        print(elems)\\r\\n    \\r\\n    def get(self, index):\\r\\n        # from 1, doesnt start from 0\\r\\n        if index >= self.length():\\r\\n            print(\\"Index out of range!\\")\\r\\n            return None\\r\\n        \\r\\n        cur_id = 0\\r\\n        cur_node = self.head\\r\\n\\r\\n        while True:\\r\\n            cur_node = cur_node.next # go through every node\\r\\n            if cur_id == index:\\r\\n                return cur_node.data # break and return when index = cur_node idx\\r\\n            cur_id += 1\\r\\n    \\r\\n    def erase(self, index):\\r\\n        if index >= self.length():\\r\\n            print(\\"Index out of range!\\")\\r\\n            return None\\r\\n        \\r\\n        cur_id = 0\\r\\n        cur_node = self.head\\r\\n        while True:\\r\\n            last_node = cur_node\\r\\n            cur_node = cur_node.next\\r\\n            if cur_id == index: # when current node\'s index = given index\\r\\n                last_node.next = cur_node.next\\r\\n                return\\r\\n            cur_id += 1\\r\\n\\r\\n\\r\\nll = LinkedList()\\r\\nll.display_linkedList() # []\\r\\n\\r\\nll.append(3)        \\r\\nll.append(5)        \\r\\nll.append(2)        \\r\\nll.append(9)        \\r\\n        \\r\\nll.display_linkedList() # [3, 5, 2, 9]\\r\\n```\\r\\n\\r\\n\\r\\n### Method 3\\r\\n\\r\\nUse this incase if things go wrong. Too complex.\\r\\n\\r\\n```python\\r\\nclass Node:\\r\\n    def __init__(self, data):\\r\\n        self.data = data\\r\\n        self.next = None\\r\\n\\r\\nclass LinkedList:\\r\\n    def __init__(self):\\r\\n        self.head = None # empty LL with None head\\r\\n\\r\\n    def is_empty(self):\\r\\n        return self.head is None # is empty?\\r\\n    \\r\\n    def add_at_head(self, data):\\r\\n        new_node = Node(data)\\r\\n        new_node.next = self.head\\r\\n        self.head = new_node\\r\\n    \\r\\n    def add_at_tail(self, data):\\r\\n        new_node = Node(data) # new tmp node\\r\\n\\r\\n        if self.is_empty(): # if empty, new node to head\\r\\n            self.head = new_node\\r\\n        else:\\r\\n            current = self.head\\r\\n            while current.next is not None: # traverse to end\\r\\n                current = current.next\\r\\n            current.next = new_node # append new node\\r\\n\\r\\n    def add_at_middle(self, data, position):\\r\\n        new_node = Node(data) # new node\\r\\n\\r\\n        if self.is_empty(): # if empty, set at head\\r\\n            self.head = new_node\\r\\n        elif position == 0: # if insert at start,\\r\\n                            # insert at beginning\\r\\n            new_node.next = self.head\\r\\n            self.head = new_node\\r\\n        else:\\r\\n            # traverse to given position\\r\\n            current = self.head\\r\\n            count = 1\\r\\n\\r\\n            while count < position and current.next is not None:\\r\\n                current = current.next\\r\\n                count += 1\\r\\n\\r\\n            # add new node\\r\\n            new_node.next = current.next\\r\\n            current.next = new_node\\r\\n        \\r\\n    def search(self, data):\\r\\n        current = self.head\\r\\n\\r\\n        # until end\\r\\n        while current is not None:\\r\\n            if current.data == data:\\r\\n                return True\\r\\n            current = current.next # go to next node\\r\\n\\r\\n        return False\\r\\n    \\r\\n    def remove(self, data):\\r\\n        if self.is_empty(): # rem first occurence\\r\\n            return\\r\\n\\r\\n        if self.head.data == data:\\r\\n            # If the head contains the data, update the head\\r\\n            self.head = self.head.next\\r\\n            return\\r\\n\\r\\n        current = self.head\\r\\n        while current.next is not None: # traverse until found\\r\\n            if current.next.data == data: # find data\\r\\n                current.next = current.next.next\\r\\n                return # remove\\r\\n            current = current.next\\r\\n        \\r\\n    def display(self):\\r\\n        current = self.head\\r\\n        while current is not None: # condition\\r\\n            print(current.data, end=\\" -> \\") \\r\\n            current = current.next  # go to next node\\r\\n        print(\\"None\\") # final node\\r\\n```"},{"id":"2024-03-07-question-analysis","metadata":{"permalink":"/Cambridge-A-Level-Computer-Science-9618-4/blog/2024-03-07-question-analysis","source":"@site/blog/2024-03-07-question-analysis.md","title":"Question Analysis of Past Papers","description":"It\'s 1 day before the exam!","date":"2024-03-07T00:00:00.000Z","formattedDate":"March 7, 2024","tags":[{"label":"analysis","permalink":"/Cambridge-A-Level-Computer-Science-9618-4/blog/tags/analysis"}],"readingTime":3.905,"hasTruncateMarker":false,"authors":[{"name":"Hirusha Adikari","title":"A student interested in Technology","url":"https://hirusha.xyz","imageURL":"https://avatars.githubusercontent.com/u/36286877?v=4","key":"hirusha"}],"frontMatter":{"slug":"2024-03-07-question-analysis","title":"Question Analysis of Past Papers","authors":"hirusha","tags":["analysis"]},"unlisted":false,"prevItem":{"title":"Paper 4 - Revision","permalink":"/Cambridge-A-Level-Computer-Science-9618-4/blog/2024-5-22-revision"}},"content":"It\'s 1 day before the exam!\\r\\n\\r\\n## Question Analysis\\r\\n\\r\\nFile Handling will be referred to as \\"FH\\"\\r\\n\\r\\n```\\r\\nSpecimen Paper 4:\\r\\n- Arrays: insertion sort\\r\\n- OOP\\r\\n- Queue (with FH): anqueue\\r\\n\\r\\n2021 June 41, 2021 June 42, 2021 June 43:\\r\\n- Linked list: add Node, output Node\\r\\n- Array: linear search, bubble sort\\r\\n- OOP (with FH)\\r\\n\\r\\n2021 Nov 41, 2022 Nov 42, 2022 Nov 43:\\r\\n- Arrays: werid recursive to iterative (no idea what that code does exactly)\\r\\n- OOP (with FH)\\r\\n- Binary tree (with arrays): add node, print all, in order traversal\\r\\n\\r\\n2022 June 41, 2022 June 43:\\r\\n- Arrays (with FH): basics\\r\\n- OOP\\r\\n- Circular Queue: enqueue, dequeue \\r\\n\\r\\n2022 June 42:\\r\\n- Stack: push, pop\\r\\n- 2D Array: bubble sort, binary search\\r\\n- OOP (with FH)\\r\\n\\r\\n2022 Nov 41, 2022 Nov 43:\\r\\n- Array (with FH): linear search, bubble sort\\r\\n- OOP\\r\\n- Binary tree (with arrays): search, post order traversal \\r\\n\\r\\n2022 Nov 42:\\r\\n- 2D Array: insertion sort\\r\\n- OOP (with FH)\\r\\n- Queue: enqueue, iterative output\\r\\n\\r\\n2023 June 41, 2023 June 43: \\r\\n- Array (with FH): linear search\\r\\n- OOP\\r\\n- Stack: push, pop\\r\\n\\r\\n2023 June 42:\\r\\n- Array (with FH): bubble sort (descending)\\r\\n- Circular Queue: enqueue, dequeue\\r\\n- OOP (with FH)\\r\\n\\r\\n2023 Nov 41, 2023 Nov 43:\\r\\n- Arrays: basic iteration\\r\\n- Queue (with FH): enque, dequeue\\r\\n- OOP\\r\\n\\r\\n2023 Nov 42:\\r\\n- Stack (with FH): push, pop\\r\\n- Iteration and Recusrion with Numbers (interesting)\\r\\n- OOP\\r\\n```\\r\\n\\r\\n## Guesses\\r\\n\\r\\n- Below are three guesses at \\"2022 June 42\\":\\r\\n\\r\\n### Guess 1\\r\\n\\r\\n1. **Data Structure: Stack**\\r\\n   - **Push and Pop Operations:** The stack operations (push and pop) have appeared frequently in the past exams, and particularly in Paper 42 of previous years like 2022 June 42 and 2023 Nov 42. Hence, it is likely to appear again.\\r\\n\\r\\n2. **2D Array**\\r\\n   - **Sorting and Searching Operations:** Previous exams have shown a pattern where 2D arrays were tested with sorting and searching algorithms, such as bubble sort and binary search in 2022 June 42 and insertion sort in 2022 Nov 42. Given this trend, it\'s probable that 2D arrays will appear with some form of sorting or searching operation.\\r\\n\\r\\n3. **Object-Oriented Programming (OOP)**\\r\\n   - **With File Handling:** OOP has consistently appeared in all the papers you listed, often combined with file handling (FH). Considering its regular inclusion, it is highly likely to be a part of the exam again.\\r\\n\\r\\nGiven these trends, the three likely topics for the \\"2024 June 42\\" paper are:\\r\\n\\r\\n1. **Stack:** Focus on fundamental operations such as push and pop, possibly involving some additional operations or problem-solving using a stack.\\r\\n2. **2D Array:** Likely to include operations such as sorting (e.g., bubble sort or insertion sort) and searching (e.g., linear search or binary search).\\r\\n3. **OOP (with File Handling):** Expect questions on designing classes, inheritance, polymorphism, and possibly integrating file handling within the OOP context.\\r\\n\\r\\nThese topics align with the observed patterns from previous exams and cover a broad range of fundamental concepts likely to be tested.\\r\\n\\r\\n### Guess 2\\r\\n\\r\\n1. **Queue**\\r\\n   - **Enqueue and Dequeue Operations:** Queue operations, particularly enqueue and dequeue, have appeared in previous papers like 2022 June 43 and 2023 Nov 41. This makes it a strong candidate for appearing again, possibly in a circular queue context or a standard linear queue.\\r\\n\\r\\n2. **1D Array**\\r\\n   - **Sorting or Searching:** Given the frequent appearance of array operations, we might see either a bubble sort, insertion sort, or a linear search operation. For instance, bubble sort has been tested multiple times, including 2022 June 42 and 2023 June 42.\\r\\n\\r\\n3. **Object-Oriented Programming (OOP)**\\r\\n   - **With File Handling:** Consistently included in nearly all papers, OOP concepts coupled with file handling are likely to appear again. This could involve class design, inheritance, polymorphism, or working with files within an OOP framework.\\r\\n\\r\\n### Guess 3\\r\\n\\r\\n1. **Binary Tree (with Arrays)**\\r\\n   - **Node Operations and Traversals:** Binary tree operations such as adding nodes, searching, and traversing (in-order, post-order) have been tested in several papers, including 2021 Nov 41 and 2022 Nov 43. This makes it a likely topic, with a focus on implementing these operations using arrays.\\r\\n\\r\\n2. **2D Array**\\r\\n   - **Binary Search or Bubble Sort:** 2D arrays with sorting and searching operations have appeared previously (e.g., bubble sort in 2022 June 42, binary search in 2022 June 42). These types of questions are fundamental and are likely to be tested again.\\r\\n\\r\\n3. **Object-Oriented Programming (OOP)**\\r\\n   - **With File Handling:** Given its ubiquity across all examined papers, OOP with file handling is highly likely to appear again. This could involve designing a system that incorporates file reading/writing within an OOP structure."}]}')}}]);