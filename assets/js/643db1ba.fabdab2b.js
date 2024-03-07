"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[212],{5294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=t(4848),r=t(8453);const a={title:"9618_s23_qp_41 (2023 May 41)",sidebar_label:"9618_s23_qp_41"},i=void 0,s={id:"s23_qp_41/index",title:"9618_s23_qp_41 (2023 May 41)",description:"Resources:",source:"@site/docs/9618_s23_qp_41/index.md",sourceDirName:"9618_s23_qp_41",slug:"/s23_qp_41/",permalink:"/Cambridge-A-Level-Computer-Science-9618-4/docs/s23_qp_41/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"9618_s23_qp_41 (2023 May 41)",sidebar_label:"9618_s23_qp_41"},sidebar:"tutorialSidebar",previous:{title:"9618_s22_qp_42",permalink:"/Cambridge-A-Level-Computer-Science-9618-4/docs/s22_qp_42/"},next:{title:"9618_s23_qp_42",permalink:"/Cambridge-A-Level-Computer-Science-9618-4/docs/s23_qp_42/"}},l={},u=[{value:"Question 1",id:"question-1",level:2},{value:"Question 2",id:"question-2",level:2},{value:"Question 3",id:"question-3",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a,{children:[(0,o.jsx)("summary",{children:"Resources:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(7736).A+"",children:"Question Paper"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(9059).A+"",children:"Exam Resources"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsxs)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(271).A+"",children:["My Answers ",(0,o.jsx)(n.code,{children:"(evidence.doc)"})]})}),"\n"]})]}),"\n",(0,o.jsx)(n.h2,{id:"question-1",children:"Question 1"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'\n# 1. A program reads data from a file and searches for specific data.\n# ---\n\n\n# (i) Write program code to declare the local array DataArray\n# ---\nDataArray = []\n\n\n# (ii) Amend the main program to read the contents of Data.txt into DataArray\n# ---\nwith open("Data.txt", "r", encoding=\'utf-8\') as _file:\n     for line in _file.readlines():\n        line = line.strip()\n        try:\n            DataArray.append(int(line))\n        except ValueError:\n            pass # not an int\n# print(DataArray)\n\n\n# (b) (i) The procedure PrintArray() takes an integer array as a parameter \n# and outputs the contents of the array in the order they are stored.\n# ---\ndef PrintArray(arr):\n    for i in arr:\n        print(i, end=" ")\n    print()\n# PrintArray(DataArray)\n\n# (ii) Amend the main program to output the contents of DataArray using the procedure PrintArray()\n# ---\nPrintArray(DataArray)\n\n# (c) The function LinearSearch():\n# \u2022 takes an integer array and integer search value as parameters\n# \u2022 counts and returns the number of times the search value is found in the array.\n# Write program code for the function LinearSearch()\n# ---\ndef LinearSearch(arr, val):\n    count = 0\n    for item in arr:\n        if val == item:\n            count += 1\n    return count\n\n\n# (d) (i) Amend the main program to:\n# \u2022 prompt the user to input a whole number between 0 and 100 inclusive\n# \u2022 read and validate the input from the user\n# \u2022 call LinearSearch() with DataArray and the validated input value\n# \u2022 output the result in the format:\n# The number 7 is found 2 times.\n# ---\nwhile True:\n    unum = input("Input a whole number [0-100]: ") \n    try:\n        if "." in unum:\n            raise ValueError # if a decimal number is enetered\n                             # eg: will also block inputs like 7.0\n        unum = int(unum)\n        if (unum >= 0) and (unum <= 100):\n            break # break out of loop if the user input is in range\n        else:\n            print(f"{unum} is not between 0-100. Please try again")\n    except (ValueError,TypeError):\n        print("Please input an integer")\ncount = LinearSearch(arr=DataArray, val=unum)\nprint(f"The number {unum} os found {count} times.")\n\n\n# (ii) Test your program by inputting the number 12.\n# Take a screenshot of the output.\n# ---\n# OUTPUT:\n# \n# 10 4 5 13 25 31 4 66 12 5 0 11 15 20 21 12 33 49 12 12 7 7 4 22 0 \n# Input a whole number [0-100]: 12\n# The number 12 os found 4 times.\n\n# 1+4+3+1+1+3+4+1 = 18 marks total\n\n'})}),"\n",(0,o.jsx)(n.h2,{id:"question-2",children:"Question 2"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# (a) (i)\n# Write program code to declare the class Vehicle. All attributes must be private.\n# You only need to declare the class and its constructor. Do not declare any other methods.\n# Use your programming language\u2019s appropriate constructor.\n# If you are writing program code in Python, include attribute declarations using comments.\n# ---\nclass Vehicle:\n    def __init__(self, id, MaxSpeed, IncreaseAmount):\n        self._id = id\n        self._MaxSpeed = MaxSpeed\n        self._IncreaseAmount = IncreaseAmount\n        self._CurrentSpeed = 0\n        self._HorizontalPosition = 0\n    \n    # (ii) Write program code for the get methods GetCurrentSpeed(),GetIncreaseAmount(), GetMaxSpeed() and GetHorizontalPosition()\n    # ---\n    @property\n    def CurrentSpeed(self):\n        return self._CurrentSpeed\n\n    @property\n    def IncreaseAmount(self):\n        return self._IncreaseAmount\n      \n    @property\n    def MaxSpeed(self):\n        return self._MaxSpeed\n\n    @property\n    def HorizontalPosition(self):\n        return self._HorizontalPosition\n    \n    # (iii) Write program code for the set methods SetCurrentSpeed() and SetHorizontalPosition()\n    # ---\n    @CurrentSpeed.setter\n    def set_CurrentSpeed(self, value):\n        self._CurrentSpeed = value\n    \n    @HorizontalPosition.setter\n    def set_HorizontalPosition(self, value):\n        self._HorizontalPosition = value\n    \n    \n    # (iv) The method IncreaseSpeed():\n    # \u2022 adds IncreaseAmount to the current speed\n    # \u2022 adds the updated current speed to the horizontal position.\n    # The current speed of a vehicle cannot exceed its maximum speed.\n    # Write program code for the method IncreaseSpeed()\n    # ---\n    def IncreaseSpeed(self):\n        if self._CurrentSpeed < self._MaxSpeed:\n            self._CurrentSpeed += self._IncreaseAmount\n            self._HorizontalPosition += self._CurrentSpeed\n            \n\n# (b) The child class Helicopter inherits from the parent class Vehicle. A helicopter also has a\n# vertical position and changes the vertical position when it increases speed.    \n# (i) Write program code to declare the class Helicopter. You only need to declare the\n# class and its constructor. You do not need to declare the other methods.\n# Use your programming language\u2019s appropriate constructor.\n# All attributes must be private.\n# If you are writing in Python, include attribute declarations using comments.\n# ---\nclass Helicopter(Vehicle):\n    def __init__(self, id, MaxSpeed, IncreaseAmount, VerticalPosition, VerticalChange, MaxHeight):\n        super().__init__(id, MaxSpeed, IncreaseAmount)\n        self._VerticalPosition = VerticalPosition\n        self._VerticalChange = VerticalChange\n        self._MaxHeight = MaxHeight\n    \n    # GetVerticalPosition() getter\n    @property\n    def VerticalPosition(self):\n        return self._VerticalPosition\n\n    # (ii) The Helicopter method IncreaseSpeed() overrides the method from the parent\n    # class and:\n    # \u2022 adds the amount of vertical change to the vertical position\n    # \u2022 adds IncreaseAmount to the current speed\n    # \u2022 adds the updated current speed to the horizontal position.\n    # The vertical position of a helicopter cannot exceed its maximum height.\n    # The current speed of a helicopter cannot exceed its maximum speed.\n    # Write program code for the method IncreaseSpeed()\n    # ---\n    def IncreaseSpeed(self):\n        if self._VerticalPosition < self._MaxHeight:\n            self._VerticalPosition += self._VerticalChange\n            if self._CurrentSpeed < self._MaxSpeed:\n                self._CurrentSpeed += self._IncreaseAmount\n                self._HorizontalPosition += self._CurrentSpeed\n    \n# (c) A procedure needs to output the horizontal position and speed of a vehicle. If the vehicle is a\n# helicopter, it also outputs the vertical position.\n# All outputs must include appropriate messages.\n# Write program code for this procedure.\n# ---\ndef getSpeedAndPosition(obj):\n    if isinstance(obj, Helicopter):\n        print(f"(Helicopter)\\n\\tSpeed: {obj.CurrentSpeed}\\n\\tHorizontal Position: {obj.HorizontalPosition}\\n\\tVertical Position: {obj.VerticalPosition}")\n    elif isinstance(obj, Vehicle):\n        print(f"(Vehicle)\\n\\tSpeed: {obj.CurrentSpeed}\\n\\tHorizontal Position: {obj.HorizontalPosition}")\n# # another approach is to use the __repr__ or __str__ dunder methods in the classes. \n# This is much for professional and its like production ready code. \n# This is the best way to do it. But then, what was even the purpose of writing \n# those getters and setters if we are not going to use them. \n# So, I settled with this\n\n\n# (d) The main program needs to:\n# \u2022 instantiate a car as a new vehicle with the ID "Tiger", a maximum speed of 100 and an\n#   increase amount of 20\n# \u2022 instantiate a new helicopter with the ID "Lion", a maximum speed of 350, an increase\n#   amount of 40, a vertical change of 3 and a maximum height of 100\n# \u2022 call IncreaseSpeed() twice for the car and then call the output procedure from\n#   part 2(c) for the car\n# \u2022 call IncreaseSpeed() twice for the helicopter and then call the output procedure from\n#   part 2(c) for the helicopter.\n# Write program code for the main program\n# ---\ndef main():\n    car = Vehicle(id="Tiger", MaxSpeed=100, IncreaseAmount=20)\n    heli = Helicopter(id="Lion", MaxSpeed=350, IncreaseAmount=40, VerticalChange=3, MaxHeight=100, VerticalPosition=0)\n    car.IncreaseSpeed()\n    car.IncreaseSpeed()\n    heli.IncreaseSpeed()\n    heli.IncreaseSpeed()\n    getSpeedAndPosition(car)\n    getSpeedAndPosition(heli)\n\nif __name__ == "__main__":\n    main()\n\n# 5+3+3+3+5+4+3+5+1 = 32 total marks\n'})}),"\n",(0,o.jsx)(n.h2,{id:"question-3",children:"Question 3"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# 3 A program implements two stacks using 1D arrays. One stack stores the names of colours. One\n# stack stores the names of animals.\n# (a) The program contains the following global arrays and variables:\n# \u2022 1D array Animal to store the names of up to 20 animals.\n# \u2022 1D array Colour to store the names of up to 10 colours.\n# \u2022 AnimalTopPointer to point to the next free space in the array Animal, initialised to 0.\n# \u2022 ColourTopPointer to point to the next free space in the array Colour, initialised to 0.\n# Write program code to declare the global arrays and variables.\n# ---\n# PLEASE MAKE SURE TO INITIALIZE THIS\nAnimal = [\'\']*20 # to store the names of up to 20 animals\nColour = [\'\']*10 # to store the names of up to 10 colours\nAnimalTopPointer = 0 # to point to the next free space in the array Animal\nColourTopPointer = 0 # to point to the next free space in the array Colour\n\n\n# (b) (i) Study the pseudocode function PushAnimal():\n# FUNCTION PushAnimal(DataToPush : STRING) RETURNS BOOLEAN\n# IF AnimalTopPointer = 20 THEN\n# RETURN FALSE\n# ELSE\n# Animal[AnimalTopPointer]\n#  DataToPush\n# AnimalTopPointer\n#  AnimalTopPointer + 1\n# RETURN TRUE\n# ENDIF\n# ENDFUNCTION\n# Write program code for the function PushAnimal()\n# ---\ndef PushAnimal(DataToPush: str) -> bool:\n    global Animal, AnimalTopPointer\n    if AnimalTopPointer == 20:\n        return False\n    else:\n        Animal[AnimalTopPointer] = DataToPush\n        AnimalTopPointer += 1\n        return True\n\n\n# (ii) Study the pseudocode function PopAnimal():\n# FUNCTION PopAnimal() RETURNS STRING\n# DECLARE ReturnData : STRING\n# IF AnimalTopPointer = 0 THEN\n# RETURN ""\n# ELSE\n# ReturnData\n#  Animal[AnimalTopPointer - 1]\n# AnimalTopPointer\n#  AnimalTopPointer - 1\n# RETURN ReturnData\n# ENDIF\n# ENDFUNCTION\n# Write program code to declare the function PopAnimal()\n# ---\ndef PopAnimal() -> str:\n    global Animal, AnimalTopPointer\n    ReturnData = ""\n    if AnimalTopPointer == 0:\n        return ""\n    else:\n        ReturnData = Animal[AnimalTopPointer - 1]\n        AnimalTopPointer -= 1\n        return ReturnData\n\n\n# (iii) The procedure ReadData():\n# \u2022 reads the animal names from the file AnimalData.txt\n# \u2022 uses PushAnimal() to insert each name onto the stack\n# \u2022 uses appropriate exception handling if the file does not exist.\n# Write program code for the procedure ReadData()\n# ---\ndef ReadData():\n    try:\n        # import os # not the best practice to import it here, but works.\n        # if not os.path.isfile(os.getcwd(), "AnimalData.txt"):\n            # raise FileNotFoundError\n        with open("AnimalData.txt", "r", encoding="utf-8") as _file:\n            for animal in _file.readlines():\n                PushAnimal(animal.strip())\n    except FileNotFoundError:\n        print("AnimalData.txt Not Found")\n    except Exception as e:\n        print(f"An error occured: {e}")\n    \n    # (v) Amend the procedure ReadData() so that it also:\n    # \u2022 reads the colours from the text file ColourData.txt\n    # \u2022 uses PushColour() to insert each colour onto the stack\n    # \u2022 uses appropriate exception handling if the file does not exist.\n    # ---\n    try:\n        # import os # not the best practice to import it here, but works.\n        # if not os.path.isfile(os.getcwd(), "ColourData.txt"):\n            # raise FileNotFoundError\n        with open("ColourData.txt", "r", encoding="utf-8") as _file:\n            for colour in _file.readlines():\n                PushColour(colour.strip())\n    except FileNotFoundError:\n        print("ColourData.txt Not Found")\n    except Exception as e:\n        print(f"An error occured: {e}")\n    \n\n# (iv) The function PushColour() performs the same actions as PushAnimal() but inserts\n# an item into Colour.\n# The function PopColour() performs the same actions as PopAnimal() but removes\n# the next item from Colour.\n# Write program code for the functions PushColour() and PopColour()\n# ---\ndef PushColour(DataToPush: str) -> bool:\n    global Colour, ColourTopPointer\n    if ColourTopPointer == 10: # only 10 elements\n        return False\n    else:\n        Colour[ColourTopPointer] = DataToPush\n        ColourTopPointer += 1\n        return True\n\ndef PopColour() -> str:\n    global Colour, ColourTopPointer\n    ReturnData = ""\n    if ColourTopPointer == 0:\n        return ""\n    else:\n        ReturnData = Colour[ColourTopPointer - 1]\n        ColourTopPointer -= 1\n        return ReturnData\n\n\n# (c) The procedure OutputItem():\n#   \u2022 pops the next item from both Animal and Colour\n#   \u2022 outputs the colour and animal on one line, for example "black horse"\n# If there is no data in Colour:\n#   \u2022 the animal is pushed back onto Animal\n#   \u2022 "No colour" is output.\n# If there is no data in Animal:\n#   \u2022 the colour is pushed back onto Colour\n#   \u2022 "No animal" is output.\n# Write program code for the procedure OutputItem()\n# ---\ndef OutputItem():\n    panimal = PopAnimal()\n    pcolour = PopColour()\n    if pcolour == "":       # should work because we used .strip() when pushing, it also removed the empty lines\n        PushAnimal(panimal)\n        print("No colour")\n    elif panimal == "":\n        PushColour(pcolour)\n        print("No Animal")\n    else:\n        print(f"{pcolour} {panimal}")\n\n\n# (d) The main program:\n# \u2022 calls the procedure ReadData()\n# \u2022 calls OutputItem() four times.\n# (i) Write program code for the main program.\n# ---\ndef main():\n    ReadData()\n    OutputItem() # 1st time\n    OutputItem() # 2nd time\n    OutputItem() # 3rd time\n    OutputItem() # 4th time\n\nif __name__ == "__main__":\n    main()\n\n# 3+3+3+5+2+2+5+1+1+1 = 26 total marks\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},271:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/files/evidence-d4b49da981c4f2fe6e7901863fd762ea.doc"},7736:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/files/9618_s23_qp_41-abd6d3d069cdda990206e78147a37229.pdf"},9059:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/files/9618_s23_sf_41-8a2bcc8b0be20aacc9f1845be97afef2.zip"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var o=t(6540);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);