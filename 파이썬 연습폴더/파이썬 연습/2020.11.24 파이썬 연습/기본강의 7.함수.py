# 함수 (기본형태)
def open_account():
    print("새로운 계좌가 생성되었습니다.")


open_account()


def deposit(balance, money):
    print("입금이 완료되었습니다, 잔액은 {0} 원입니다.".format(balance + money))
    return balance + money


def withdraw(balance, money):
    if balance > money:
        print("출금이 완료되었습니다, 잔액은 {0}원입니다".format(balance - money))
        return balance - money
    else:
        print("출금이 완료되지 않았습니다")
        return balance


def withdraw_night(balance, money):
    commission = 100
    return commission, balance - money - commission  # 여러개의 값 반환


balance = 0  # 잔액
balance = deposit(balance, 1000)
# balance = withdraw(balance, 500)
commission, balance = withdraw_night(balance, 500)
print("수수료 {0}원이며, 잔액은 {1} 원입니다.".format(commission, balance))


# 기본값


# def profile(name, age, main_lang):
#     print("이름: {0}\t나이 : {1}\t주 사용 언어: {2}"\
#           .format(name, age, main_lang))

# profile("유재석", 20, "파이썬")
# profile("김태호", 25, "자바")


def profile(name, age=17, main_lang="파이썬"):
    print("이름: {0}\t나이 : {1}\t주 사용 언어: {2}" \
          .format(name, age, main_lang))


profile("유재석")
profile("김태호")


# 같은 학교 같은 학년 같은 반 같은 수업.


def profile(name, age, main_lang):
    print(name, age, main_lang)


# 키워드로 인자를 넣을경우 순서가 변경되어도 상관없다.
profile(name="유재석", main_lang="파이썬", age=20)
profile(main_lang="자바", age=25, name="김태호" )

# 가변인자

#end =" " -> 밑의 문장을 이어서 출력한다


# def profile(name, age, lang1, lang2, lang3, lang4, lang5):
#     print("이름: {0}\t나이: {1}\t".format(name,age), end=" ")
#     print(lang1, lang2, lang3, lang4, lang5)


# profile("유재석", 20, "python", "Java", "C", "C++", "C#")
# profile("김태호", 25, "Kotlin", "Swift", "", "", "")


def profile(name, age, *language):
     print("이름: {0}\t나이: {1}\t".format(name,age), end=" ")
     for lang in language:
         print(lang, end=" ")
     print()


profile("유재석", 20, "python", "Java", "C", "C++", "C#")
profile("김태호", 25, "Kotlin", "Swift", "", "", "")

# 지역변수 (함수내에서만 사용) 전역변수 (어디서나 사용가능)

gun = 10


def checkpoint(soliders):
    # gun = 20
    global gun
    gun = gun - soliders
    print("[함수 내] 남은 총 : {0}".format(gun))


def checkpoint_ret(gun, soliders):
    gun = gun - soliders
    print("[함수 내] 남은 총 : {0}".format(gun))
    return gun


print("전체 총 {0}".format(gun))
checkpoint(2)
print("남은 총 : {0}".format(gun))

gun = checkpoint_ret(gun,2)
print("남은 총 : {0}".format(gun))


# 표준 체중
# 남 : 키 * 키 * 22
# 여 : 키 * 키 * 21

# 조건1 표준 체중은 별도의 함수 내에서 계산
# 조건2 표준 체중은 소수점 둘째자리까지 표시


def weight(gender, height):
    if gender == '남자':
        av_weight = round(height * height * 21, 2)
        print("키 {0}cm 남자의 표준 체중은 {1}kg 입니다.".format(height, av_weight))
    elif gender == '여자':
        av_weight = round(height * height * 21, 2)
        print("키 {0}cm 여자의 표준 체중은 {1}kg 입니다.".format(height, av_weight))


gender, height = input("성을 입력하세요"), int(input("키를 입력하세요"))
weight(gender, height/100)