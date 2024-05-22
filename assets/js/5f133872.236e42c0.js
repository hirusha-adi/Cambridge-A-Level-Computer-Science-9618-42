"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[748],{8001:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=r(4848),i=r(8453);const s={title:"9618_s21_qp_42 (2021 May 42)",sidebar_label:"9618_s21_qp_42"},a=void 0,o={id:"s21_qp_42/index",title:"9618_s21_qp_42 (2021 May 42)",description:"Resources:",source:"@site/docs/9618_s21_qp_42/index.md",sourceDirName:"9618_s21_qp_42",slug:"/s21_qp_42/",permalink:"/Cambridge-A-Level-Computer-Science-9618-4/docs/s21_qp_42/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"9618_s21_qp_42 (2021 May 42)",sidebar_label:"9618_s21_qp_42"},sidebar:"tutorialSidebar",previous:{title:"9618_s21_qp_41",permalink:"/Cambridge-A-Level-Computer-Science-9618-4/docs/s21_qp_41/"},next:{title:"9618_s22_qp_41",permalink:"/Cambridge-A-Level-Computer-Science-9618-4/docs/s22_qp_41/"}},d={},l=[{value:"Question 1",id:"question-1",level:2},{value:"Question 2",id:"question-2",level:2},{value:"Question 3",id:"question-3",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Resources:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(9851).A+"",children:"Question Paper"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(1984).A+"",children:"Exam Resources"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(1988).A+"",children:["My Answers ",(0,t.jsx)(n.code,{children:"(evidence.doc)"})]})}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"question-1",children:"Question 1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# a)\r\nclass Node:\r\n    def __init__(self, data: int, nextNode: int) -> None:\r\n        self.data = data\r\n        self.nextNode = nextNode\r\n\r\n    def __repr__(self):\r\n        return f"<Node data={self.data} nextNode={self.nextNode}>"\r\n\r\n# b)\r\nstartPointer = 0\r\nemptyList = 5\r\ndata = [[1, 1], [5, 4], [6, 7], [7, -1], [2, 2], [0, 6], [0, 8], [56, 3], [0, 9], [0, -1]]\r\nlinkedList = []\r\nfor item in data:\r\n    linkedList.append(Node(data=item[0], nextNode=item[1]))\r\n# print(linkedList)\r\n\r\n# c) i\r\ndef outputNodes(linkedList, pointer) -> None:\r\n    while True:\r\n        if (pointer == -1):\r\n            break\r\n        print(f"{linkedList[pointer].data}")\r\n        pointer = linkedList[pointer].nextNode\r\n\r\n# c) ii\r\noutputNodes(linkedList=linkedList, pointer=startPointer)\r\n\r\n# d) i)\r\ndef addNode(linkedList, currentPointer, emptyList) -> bool:\r\n    \r\n    data = input("?) Input data: ")\r\n    try:\r\n        data = int(data)\r\n    except ValueError:\r\n        print("addNode() -> `data` should be of type int")\r\n        return False\r\n    \r\n    if (emptyList < 0) or (emptyList > 9):\r\n        print("List is full")\r\n        return False\r\n\r\n    previous_pointer = 0\r\n    while (currentPointer != -1):\r\n        previous_pointer = currentPointer\r\n        currentPointer = linkedList[currentPointer].nextNode\r\n    linkedList[previous_pointer].nextNode = emptyList\r\n    emptyList = linkedList[emptyList].nextNode\r\n    return True\r\n    \r\n# d) ii)\r\n\r\nrval = addNode(linkedList=linkedList, currentPointer=startPointer, emptyList=emptyList)\r\nif rval is True:\r\n    print("! Item added successfully")\r\nelse:\r\n    print("! Item not added")\r\noutputNodes(linkedList=linkedList, pointer=startPointer)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"question-2",children:"Question 2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# a)\r\narrayData = [10, 5, 6, 7, 1, 12, 13, 15, 21, 8]\r\n\r\n# b) i\r\ndef linearSearch(searchFor: int):\r\n    global arrayData\r\n    for item in arrayData:\r\n        if item == searchFor:\r\n            return True\r\n    return False\r\n\r\n# b) ii\r\nwhile True:\r\n    inp = input("? Enter an integer: ").strip()\r\n    try:\r\n        if "." in inp: # float / decimal is entered\r\n            raise ValueError\r\n        inp = int(inp)\r\n        break\r\n    except ValueError:\r\n        print("Please enter a valid integer")\r\n    except Exception as e:\r\n        print(f"Another error occured: {e}")\r\nisFound = linearSearch(searchFor=inp)\r\nif isFound is True:\r\n    print(f"Found {inp} in `arrayData`")\r\nelse:\r\n    print(f"{inp} NOT found in `arrayData`")\r\n\r\n# c)\r\ndef bubbleSort(arr):\r\n    n = len(arr)\r\n    for i in range(n):\r\n        for j in range(0, n-i-1):\r\n            if arr[j] > arr[j+1]:\r\n                arr[j], arr[j+1] = arr[j+1], arr[j]\r\n    return arr\r\n\r\ndone= bubbleSort(arr=arrayData)\r\nprint(done)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"question-3",children:"Question 3"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# a)\r\nclass TreasureChest:\r\n    def __init__(self, question: str, answer: int, points: int) -> None:\r\n        self.__question = question\r\n        self.__answer = answer\r\n        self.__points = points\r\n\r\n    def __repr__(self):\r\n        return f"<TreasureChest question=\'{self.__question}\' answer={self.__answer} points={self.__points}>"\r\n\r\n    # c) i\r\n    def getQuestion(self) -> str:\r\n        return self.__question\r\n\r\n    # c) ii\r\n    def checkAnswer(self, answer: int) -> bool:\r\n        if answer == self.__answer:\r\n            return True\r\n        else:\r\n            return False\r\n\r\n    # c) iii\r\n    def getPoints(self, attempts) -> int:\r\n        if attempts == 1:\r\n            return int(self.__points)\r\n        elif attempts == 2:\r\n            return int(self.__points) // 2\r\n        elif attempts in [3, 4]:\r\n            return int(self.__points) // 4\r\n        else:\r\n            return 0\r\n    \r\n# b)\r\narrTreasure = []\r\ndef readData():\r\n    try:\r\n        with open("TreasureChestData.txt", "r", encoding="utf-8") as file:\r\n            dataFetched = (file.readline()).strip()\r\n            while(dataFetched != "" ):\r\n                question = dataFetched\r\n                answer = int(file.readline().strip())\r\n                points = int(file.readline().strip())\r\n                arrTreasure.append(\r\n                        TreasureChest(\r\n                                question=question,\r\n                                answer=answer,\r\n                                points=points\r\n                            )\r\n                    )\r\n                dataFetched = file.readline().strip() \r\n    except (IOError, FileNotFoundError):\r\n        print("File not found")\r\n    except Exception as e:\r\n        print(f"Another error occured: {e}")\r\n\r\n\r\n# c) iv\r\ndef inputInt(query: str) -> int:\r\n    return int(input(query))\r\n\r\nreadData()\r\nqnum = inputInt(query="? Pick treasure to open [1-5]: ")\r\nif (qnum > 0) and (qnum < 6):\r\n    result = False\r\n    attempts = 0\r\n    while (result == False):\r\n        answer = inputInt(query=f"? Solve: {arrTreasure[qnum-1].getQuestion()} = ")\r\n        result = arrTreasure[qnum-1].checkAnswer(answer=answer)\r\n        attempts += 1\r\n    print(f"! You have {arrTreasure[qnum-1].getPoints(attempts=attempts)} points.")\r\n\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1988:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/files/evidence-ccc57472a7f579e0b69b1207f4168ee7.doc"},9851:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/files/9618_s21_qp_42-b62fa0b3302b8ead695dbd8330b63d3e.pdf"},1984:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/files/9618_s21_sf_42-f3cdcee814e52d4a30d1a95f8c82da32.zip"},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(6540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);