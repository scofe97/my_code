# 4(/12) 문자열
sentence = '나는 소년입니다'
print(sentence)
sentence2 = "파이썬은 쉬워요"
print(sentence2)
sentence3 = """
안녕하세요
나는 소년이고
파이썬은 쉬워요
"""
print(sentence3)

# 슬라이싱
jumin = '990120-1234567'
print("성별 : " + jumin[7])
print("연 : " + jumin[0:2]) # 0~2 직전까지 0,1
print("월 : " + jumin[2:4])
print("일 : " + jumin[4:6])

print("생년월일 : " +  jumin[:6])
print("뒤 7자리 : " + jumin[7:])

#문자열 처리함수
python = "Python is Amazing"
print(python.lower())
print(python.upper())
print(python[0].isupper())
print(len(python))
print(python.replace('Python', "Java"))

index = python.index("n")
print(index)
index = python.index("n", index+1)
print(index)

print(python.find("Java"))
# 찾는값이 없을경우 -1
# print(python.index('Java'))
# 오류를 내면서 프로그램 종료

print(python.count("n"))

#문자열 포맷
print('a'+'b')
print("a"+"b")

#방법 1
print("나는 %d살입니다." %20)
print("나는 %s를 좋아해요" %"파이썬")
print("Apple은 %c로 시작해요" %'A')
# %s로 쓰면 다됨 (숫자도 문자열로 인식되므로)

print("나는 %s색과 %s색을 좋아해요" %("파랑", "빨강"))

#방법 2
print("나는 {}살입니다".format(20))
print("나는 {0}색과 {1}색을 좋아해요".format("파랑", "빨강"))
print("나는 {1}색과 {0}색을 좋아해요".format("파랑", "빨강"))

# 방법 3
print("나는 {age}살이며, {color}색을 좋아해요".format(age=20,color="빨강"))

# 방법 4 (3.6이상 버전)
age = 20
color = "빨강"
print(f"나는 {age}살이며, {color}색을 좋아해요")

# 탈출문자
print("백문이 불여일견 \n 백견이 불여일타") #줄바꿈

#저는 "나도코딩"입니다
print("저는 \"나도코딩\"입니다")
print("저는 \'나도코딩\'입니다")

# \\ : 문장 내에서 \
print("\\")

# \r 커서를 맨 앞으로 이동 (출력 Pine만됨)
print("Red Apple\rPine")

# \b : 백스페이스 (한 글자 삭제)
print("Redd\bApple")

# \t 탭
print("Red\tApple")

#Quiz 사이트별로 비밀번호를 만들어 주는 프로그램을 작성해라
# http://naver.com

sentence = "http://naver.com"
sentence = sentence[7:12]
# sentence.replae("http://","")

print(sentence[:3] + str(len(sentence)) + str(sentence.count("e")) + '!')

url = "http://google.com"
my_str = url.replace("http://","")
my_str = my_str[:my_str.index(".")]
#print(my_str)
password = my_str[:3] + str(len(my_str)) + str(my_str.count("e")) + "!"
print("{0}의 비밀번호는 {1}입니다".format(url, password))