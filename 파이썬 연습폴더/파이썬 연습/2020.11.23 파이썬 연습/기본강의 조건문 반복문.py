#weather = "비"

# if 조건 :
#     실행 명령문

# weather = input("오늘 날씨는 어때요?")
#
# if weather == "비" or weather == "눈":
#     print("우산을 챙기세요")
# elif weather == "미세먼지":
#     print("마스크를 챙기세요")
# else:
#     print("준비물 필요 없어요")
#
# temp = int(input("기온은 어때요?"))
#
# if 30 <= temp:
#     print("너무 더워요. 나가지 마세요")
# elif 10 <= temp < 30:
#     print("괜찮은 날시에요")
# elif 0 <= temp < 10:
#     print("외투를 챙기세요")
# else:
#     print("너무 추워요 나가지마세요")

# print("대기번호 : 1")
# print("대기번호 : 2")

# for waiting_no in [0, 1, 2, 3, 4]:
#     print("대기번호 : {0}".format(waiting_no))
#
# for waiting_no in range(1,6): # 0 1 2 3 4
#     print("대기번호 : {0}".format(waiting_no))
#
# starbucks = ["아이언맨", "토르", "아이엠 구르트"]
# for customer in starbucks:
#     print("{0}, 커피가 준비되었습니다".format(customer))

# while
# customer = "토르"
# index = 5
# while index >=1:
#     print("{0}, 커피가 준비되었습니다. {1}번 남았어요".format(customer,index-1))
#     index -= 1
#     if index == 0:
#         print("커피는 폐기처분되었습니다.")

# customer = "아이언맨"
# index = 1
# while True:
#      print("{0}, 커피가 준비되었습니다. {1}번 남았어요".format(customer,index))
#      index += 1

# customer = "토르"
# person = "Unknown"
#
# while person != customer :
#     print("{0}, 커피가 준비 되었습니다".format(customer))
#     person = input("이름이 어떻게 되세요?")

absent = [2, 5]
no_book = [7]
for student in range(1, 10):
    if student in absent:
        continue
    if student in no_book:
        print("{0}번 나와!".format(student))
        break
    print("{0}번 학생이 출석했다".format(student))

# 한줄 for
# 출석번호가 1,2,3,4, 앞에 100을 붙임

students = [1,2,3,4,5]
print(students)
students = [i+100 for i in students]
print(students)

students = ["irom man", "thor", "i am groot"]
students = [len(i) for i in students]
print(students)

students = ["irom man", "thor", "i am groot"]
students = [i.upper() for i in students]
print(students)

# 퀴즈

from random import *

# customer_time = range(50)
# customer_time = list(customer_time)
# count = 0
#
# for i in range(50):
#     customer_time[i] = (randint(5, 51))
#
# for i in range(50):
#     if 15 <= customer_time[i] <= 50:
#         print("{0}번째 손님 (소요시간 : {1}분".format(i, customer_time[i]))
#         count += 1
#
# print("총 탑승 승객 : {0} 분".format(count))

cnt = 0
for i in range(1, 51):
    time = randrange(5, 51)
    if 5 <= time <= 15:
        print("[O] {0}번째 손님 ( 소요시간 : {1}분)".format(i,time))
        cnt += 1
    else:
        print("[] {0}번째 손님 ( 소요시간 : {1}분)".format(i,time))
print("총 탑승 승객 : {0} 분".format(cnt))