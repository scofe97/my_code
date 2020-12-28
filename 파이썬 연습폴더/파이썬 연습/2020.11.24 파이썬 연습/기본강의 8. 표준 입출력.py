# sep 값으로 ,의 값을 결정해줄수 있음
print("Python", "Java","JavaScript", sep=" vs ")
print("Python"+"Java")

# print 2개가 한줄에 출력됨 end 때문
# end 기본값 \n 에서 ?로 바꿔준것
# print("Python", "Java", "JavaScript", sep=",", end="?")
# print("무엇이 더 재밌을까요?")

# stdout 표준출력
# stderr 에러표시
# import sys
# print("Python", "Java", file=sys.stdout)
# print("Python", "Java", file=sys.stderr)

# scores = {"수학": 0, "영어": 50, "코딩": 100}
# for subject, score in scores.items():
#     # print(subject,score)
#     # ljust, rjust 오른쪽 혹은 왼쪽으로 인자값만큼의 공간확보 후 정렬
#     print(subject.ljust(4), str(score).rjust(4), sep=":")

# 은행 대기순번표
# 001, 002 ...

# for num in range(1,21):
#     # zfill (0을 채운다) 3이면 3개의 공간확보 후 빈공간에 0넣음
#     print("대기번호 : " + str(num).zfill(3))


# answer = input("아무 값이나 입력하세요 : ")
# 숫자 혹은 문자를 넣어도 무조건 타입은 문자로 받는다는 의미
# print(type(answer))
# print("입력하신 값은 {0} 입니다".format(answer))

# 빈 자리는, 빈 공간으로 두고, 오른쪽 정렬을 하되 ,총 10자리 공간확보
# print("{0: >10}".format(500))
# print("{0: >+10}".format(-500))
#
# # 왼쪽 정렬, 빈칸 _로 채움
# print("{0:_<+10}".format(500))
#
# # 3자리 마다 콤마
# print("{0:,}".format(10000000000))
# print("{0:+,}".format(-1000000000))
#
# # 3자리 마다 콤마, 부호붙임, 자리수 확정
# # 돈이 많으면 기분이 좋으니 ^로 채움
# print("{0:^<+30,}".format(1000000000000000))
#
# # 소수점 출력
# print("{0:f}".format(5/3))
# print("{0:.2f}".format(5/3))


###########################################
# 파일 입출력
# score_file = open("score.txt", "w", encoding="utf8")
# print("수학 : 0", file = score_file)
# print("영어 : 50", file = score_file)
# score_file.close()

# score_file = open("score.txt", "a", encoding="utf8")
# score_file.write("\n과학 : 80")
# score_file.write("\n코딩 : 100")
# score_file.close()

# score_file = open("score.txt", "r", encoding = "utf8")
# print(score_file.read())

# 한줄 씩 열기
# score_file = open("score.txt", "r", encoding = "utf8")
# print(score_file.readline(), end="") # 줄 별로 읽기, 한 줄 읽고 커서는 다음 줄로 이동
# print(score_file.readline(), end="")
# print(score_file.readline(), end="")
# print(score_file.readline(), end="")
# print(score_file.readline(), end="")
# score_file.close()

# score_file = open("score.txt", "r", encoding='utf8')
# while True:
#     line = score_file.readline()
#     if not line:
#         break
#     print(line, end="")
# score_file.close()

# score_file = open("score.txt", "r", encoding='utf8')
# lines = score_file.readlines()
# for line in lines:
#     print(line, end="")

# pickle
# 피클 -> 텍스트 상태가 아닌 파이썬 객체 자레를 파일로 저장
# 리스트, 클래스 같은 텍스트가 아닌 자료형은 일반적인 파일 입출력으로 불러올수 없다
# 이러한 이유로 인해 피클이라는 모듈 제공
import pickle
# profile_file = open("profile.pickle", "wb")
# profile = {"이름": "박명수", "나이": 30, "취미": ["축구", "골프", "코딩"]}
# print(profile)
# pickle.dump(profile, profile_file) # profile 에 있는 정보를 file 에 저장
# profile_file.close()

# profile_file = open("profile.pickle", "rb")
# profile = pickle.load(profile_file) # file 에 있는 정보를 profile 에 불러오기
# print(profile)
# profile_file.close()

# with
# import pickle
# with open("profile.pickle", "rb") as profile_file:
#     print(pickle.load(profile_file))
#
# # 이렇게 하면 close 해주지않아도 자동으로 닫아줌
#
# with open("study.txt", "w", encoding="utf8") as study_file:
#     study_file.write("파이썬을 열심히 공부하고 있어요")

# with open("study.txt", "r", encoding="utf8") as study_file:
#         print(study_file.read())

# 퀴즈
# 매주 1회 작성 보고서
# - X 주차 주간 보고 -
# 부서 :
# 이름 :
# 업무 요약 :
# 1~50주차 보고서 파일

# for count in range(1,51):
#     with open("{0}주차.txt".format(count), "w", encoding="utf8") as reporter:
#         reporter.write("- {0} 주차 주간보고 -\n".format(count))
#         reporter.write("부서 : \n")..............
#         reporter.write("이름 : \n")
#         reporter.write("업무 요약 : \n")

# for i in range(1, 51):
#     with open(str(i)+"주차.txt", "w", encoding="utf8") as report_file:
#         report_file.write("- {0} 주차 주간보고 -\n".format(i))
#         report_file.write("부서 : \n")
#         report_file.write("이름 : \n")
#         report_file.write("업무 요약 : \n")

