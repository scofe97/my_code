# # 리스트[] 순서를 가지는 객체 집합
#
# # 지하칸 칸별로 10, 20 ,30명
#
# subway1 = 10
# subway2 = 20
# subway3 = 30
#
# subway = [10,20,30]
# print(subway)
#
# subway = ["유재석", "조세호", "박명수"]
# print(subway)
#
# print(subway.index("조세호"))
#
# 하하씨가 다름 정류장에서 다음 칸에 탐
# subway.append("하하")
# print(subway)
#
# # 정형돈 유재석/ 조세호 사이에 태워봄
#
# subway.insert(1, "정형돈")
# print(subway)
#
# print(subway.pop())
# print(subway)
#
# print(subway.pop())
# print(subway)
# print(subway.pop())
# print(subway)
#
# #같은 이름의 사람이 몇 명 있는지 확인
# subway.append("유재석")
# print(subway)
# print(subway.count("유재석"))

num_list = [5, 2, 3, 1]
num_list.sort()
print(num_list)

num_list.reverse()
print(num_list)

# num_list.clear()
# print(num_list)

mix_list = ["조세호",20,True]

num_list.extend(mix_list)
print(num_list)


# 사전
cabinet = {3:"유재석", 100:"김태호"}
print(cabinet[3])
print(cabinet[100])
print(cabinet.get(3))
# print(cabinet[5]) 5라는 키가없으므로 에러가발생 (프로그램이 멈춤)
print(cabinet.get(5))
# 없으면 None 출력하고 계속시행
print(cabinet.get(5, "사용 가능"))
print("Hi")

print(3 in cabinet)
print(5 in cabinet)

cabinet = {'A-3':"유재석", 'B-100':"김대호"}
print(cabinet["A-3"])
print(cabinet["B-100"])

# 새 손님
print(cabinet)
cabinet["A-30"] = "김종국"
# 키값이 있으면 새롭게 넣어줌
cabinet["C-20"] = "조세호"
# 키값이 없으면 새로운 키를 생성하고 넣음음
print(cabinet)

# 간 손님
del cabinet["A-3"]
print(cabinet)

# key 들만 출력
print(cabinet.keys())
# 값들만 출력
print(cabinet.values())
# 둘다 출력
print(cabinet.items())

# 목욕탕 폐점
cabinet.clear()
print(cabinet)

# 튜플 (리스트하고는 다르게 변경, 추가가 안됨 대신 속도가 빠름)

menu = ("돈까스", "치즈까스")
print(menu[0])
print(menu[1])

# menu.add("생선까스") 불가(추가안됨)

name = "김종국"
age = 20
hobby = "코딩"

print(name, age, hobby)

(namge, age, hobby) = ("김종국", 20, "코딩")
print(name, age, hobby)

# 세트 (set)
# 집합 : 중복이안되고 순서가없음

my_set = {1, 2, 3, 3, 3}
print(my_set)
# 123만 나옴 (중복허가안함)

java = {"유재석", "김태호", "양세형"}
python = set(["유재석", "박명수"])

# 교집합
print(java & python)
print(java.intersection(python))

# 합집합
print(java | python)
print(java.union(python))

# 차집합 (java 할 수 있지만 python은 할줄 모르는 개발자)
print(java-python)
print(java.difference(python))

# python 할 줄 아는 사람이 늘어남
python.add("김태호")
print(python)

# 자바 까먹음
java.remove("김태호")
print(java)

# 자료구조의 변경
menu = {"커피", "우유", "주스"}
print(menu, type(menu))

menu = list(menu)
print(menu, type(menu))

menu = tuple(menu)
print(menu, type(menu))

menu = set(menu)
print(menu, type(menu))

# 퀴즈
# 댓글 작성자 1명 치킨, 3명 커피

# 조건1 댓글 20명 (아이디는 1~20)
# 중복불가
# random 모듈의 suffle 과 sample 활용

from random import *
# list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
# print(list)
# shuffle(list)
# print(list)
#
# win = sample(list,4)
# print(win)
#
# print(f"{win[0]} 번 고객님 치킨에 당첨됬습니다! \n{win[1],win[2],win[3]} 번 고객님 커피에 당첨되셨습니다!")

users = range(1, 21)
# print(type(users))
users = list(users)
# print(type(users))

shuffle(users)

winner = sample(users, 4)
print("-- 당첨자 발표 --")
print("치킨 당첨자 : {0}".format(winner[0]))
print("커피 당첨자 : {0}".format(winner[1:]))
print("-- 축하합니다 --")