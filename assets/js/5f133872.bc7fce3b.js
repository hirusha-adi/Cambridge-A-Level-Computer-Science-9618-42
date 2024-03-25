"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[748],{8001:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(4848),i=t(8453);const s={title:"9618_s22_qp_42 (2022 May 42)",sidebar_label:"9618_s22_qp_42"},a=void 0,o={id:"s21_qp_42/index",title:"9618_s22_qp_42 (2022 May 42)",description:"Resources:",source:"@site/docs/9618_s21_qp_42/index.md",sourceDirName:"9618_s21_qp_42",slug:"/s21_qp_42/",permalink:"/Cambridge-A-Level-Computer-Science-9618-4/docs/s21_qp_42/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"9618_s22_qp_42 (2022 May 42)",sidebar_label:"9618_s22_qp_42"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Cambridge-A-Level-Computer-Science-9618-4/docs/"},next:{title:"9618_s22_qp_42",permalink:"/Cambridge-A-Level-Computer-Science-9618-4/docs/s22_qp_41/"}},d={},l=[{value:"Question 1",id:"question-1",level:2},{value:"Question 2",id:"question-2",level:2},{value:"Question 3",id:"question-3",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Resources:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(9851).A+"",children:"Question Paper"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(1984).A+"",children:"Exam Resources"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(1988).A+"",children:["My Answers ",(0,r.jsx)(n.code,{children:"(evidence.doc)"})]})}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"question-1",children:"Question 1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# a)\nclass Node:\n    def __init__(self, data: int, nextNode: int) -> None:\n        self.data = data\n        self.nextNode = nextNode\n\n    def __repr__(self):\n        return f"<Node data={self.data} nextNode={self.nextNode}>"\n\n# b)\nstartPointer = 0\nemptyList = 5\ndata = [[1, 1], [5, 4], [6, 7], [7, -1], [2, 2], [0, 6], [0, 8], [56, 3], [0, 9], [0, -1]]\nlinkedList = []\nfor item in data:\n    linkedList.append(Node(data=item[0], nextNode=item[1]))\n# print(linkedList)\n\n# c) i\ndef outputNodes(linkedList, pointer) -> None:\n    while True:\n        if (pointer == -1):\n            break\n        print(f"{linkedList[pointer].data}")\n        pointer = linkedList[pointer].nextNode\n\n# c) ii\noutputNodes(linkedList=linkedList, pointer=startPointer)\n\n# d) i)\ndef addNode(linkedList, currentPointer, emptyList) -> bool:\n    \n    data = input("?) Input data: ")\n    try:\n        data = int(data)\n    except ValueError:\n        print("addNode() -> `data` should be of type int")\n        return False\n    \n    if (emptyList < 0) or (emptyList > 9):\n        print("List is full")\n        return False\n\n    previous_pointer = 0\n    while (currentPointer != -1):\n        previous_pointer = currentPointer\n        currentPointer = linkedList[currentPointer].nextNode\n    linkedList[previous_pointer].nextNode = emptyList\n    emptyList = linkedList[emptyList].nextNode\n    return True\n    \n# d) ii)\n\nrval = addNode(linkedList=linkedList, currentPointer=startPointer, emptyList=emptyList)\nif rval is True:\n    print("! Item added successfully")\nelse:\n    print("! Item not added")\noutputNodes(linkedList=linkedList, pointer=startPointer)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"question-2",children:"Question 2"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# a)\narrayData = [10, 5, 6, 7, 1, 12, 13, 15, 21, 8]\n\n# b) i\ndef linearSearch(searchFor: int):\n    global arrayData\n    for item in arrayData:\n        if item == searchFor:\n            return True\n    return False\n\n# b) ii\nwhile True:\n    inp = input("? Enter an integer: ").strip()\n    try:\n        if "." in inp: # float / decimal is entered\n            raise ValueError\n        inp = int(inp)\n        break\n    except ValueError:\n        print("Please enter a valid integer")\n    except Exception as e:\n        print(f"Another error occured: {e}")\nisFound = linearSearch(searchFor=inp)\nif isFound is True:\n    print(f"Found {inp} in `arrayData`")\nelse:\n    print(f"{inp} NOT found in `arrayData`")\n\n# c)\ndef bubbleSort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr\n\ndone= bubbleSort(arr=arrayData)\nprint(done)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"question-3",children:"Question 3"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# a)\nclass TreasureChest:\n    def __init__(self, question: str, answer: int, points: int) -> None:\n        self.__question = question\n        self.__answer = answer\n        self.__points = points\n\n    def __repr__(self):\n        return f"<TreasureChest question=\'{self.__question}\' answer={self.__answer} points={self.__points}>"\n\n    # c) i\n    def getQuestion(self) -> str:\n        return self.__question\n\n    # c) ii\n    def checkAnswer(self, answer: int) -> bool:\n        if answer == self.__answer:\n            return True\n        else:\n            return False\n\n    # c) iii\n    def getPoints(self, attempts) -> int:\n        if attempts == 1:\n            return int(self.__points)\n        elif attempts == 2:\n            return int(self.__points) // 2\n        elif attempts in [3, 4]:\n            return int(self.__points) // 4\n        else:\n            return 0\n    \n# b)\narrTreasure = []\ndef readData():\n    try:\n        with open("TreasureChestData.txt", "r", encoding="utf-8") as file:\n            dataFetched = (file.readline()).strip()\n            while(dataFetched != "" ):\n                question = dataFetched\n                answer = int(file.readline().strip())\n                points = int(file.readline().strip())\n                arrTreasure.append(\n                        TreasureChest(\n                                question=question,\n                                answer=answer,\n                                points=points\n                            )\n                    )\n                dataFetched = file.readline().strip() \n    except (IOError, FileNotFoundError):\n        print("File not found")\n    except Exception as e:\n        print(f"Another error occured: {e}")\n\n\n# c) iv\ndef inputInt(query: str) -> int:\n    return int(input(query))\n\nreadData()\nqnum = inputInt(query="? Pick treasure to open [1-5]: ")\nif (qnum > 0) and (qnum < 6):\n    result = False\n    attempts = 0\n    while (result == False):\n        answer = inputInt(query=f"? Solve: {arrTreasure[qnum-1].getQuestion()} = ")\n        result = arrTreasure[qnum-1].checkAnswer(answer=answer)\n        attempts += 1\n    print(f"! You have {arrTreasure[qnum-1].getPoints(attempts=attempts)} points.")\n\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1988:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/evidence-ccc57472a7f579e0b69b1207f4168ee7.doc"},9851:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/9618_s21_qp_42-b62fa0b3302b8ead695dbd8330b63d3e.pdf"},1984:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/9618_s21_sf_42-f3cdcee814e52d4a30d1a95f8c82da32.zip"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(6540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);