# 예외 처리

# print("나누기 전용 계산기입니다.")
# try:
#     nums = []
#     nums.append(int(input("첫 번째 숫자를 입력하세요.")))
#     nums.append(int(input("두 번째 숫자를 입력하세요.")))
#     nums.append(nums[0] / nums[1])
#     print("{0}/{1} = {2}".format(nums[0],nums[1],nums[2]))
#     # 나누는 숫자에 문자넣으면 프로그램 종료됨
#     # try로 예외처리해줌
# except ValueError:
#     print("에러 잘못된 값을 입력")
# except ZeroDivisionError as err:
#     print(err);
#     # as err -> 에러문장 그대로 출력해줌
#     #division by zero 출력
# except Exception as err:
#     print("알 수 없는 에러가 발생하였습니다.")
#     # 이렇게하면 어떠한 에러든 이렇게 출력해버림
#     print(err)
#     # 에러메시지 출력


# 에러 발생시키기, 사용자 정의 예외처리, finally(예외발생 해도 실행)

# class BigNumberError(Exception):
#     def __init__(self, msg):
#         self.msg = msg
#
#     def __str__(self):
#         return self.msg
#
#
# try:
#     print("한 자리 숫자 나누기 전용 계산기입니다.")
#     num1 = int(input("첫 번째 숫자를 입력하세요 : "))
#     num2 = int(input("첫 번째 숫자를 입력하세요 : "))
#     if num1 >= 10 or num2 >= 10:
#         raise BigNumberError("입력값 : {0}, {1}".format(num1, num2))
#         # 에러발생
#     print("{0}/{1} = {2}".format(num1, num2, int(num1 / num2)))
# except ValueError:
#     print("잘못된 값을 입력하였습니다. 한 자리 숫자만 입력하세요")
# except BigNumberError as err:
#     print("에러가 발생하였습니다. 한 자리 숫자만 입력해라")
#     print(err)
# finally:
#     print("계산기를 이용해 주셔서 감사합니다.")


# 퀴즈
# 1보다 작거나 숫자가 아닌 입력값 ValueError 로 처리
# 대기 손님이 주문할 수 있는 총 치킨량 10마리 한정
# 치킨 소진 시 사용자 정의 에러 SoldOutError 를 발생 프로그램 종료
# 출력 메시지 : 재고가 소진되어 더 이상 주문을 받지 않습니다.

class SoldOutError(Exception):
    pass


chicken = 10
waiting = 1 # 홀 안에는 현재 만석, 대기번호 1
while True:
    try:
        print("p[남은 치킨] : {0}".format(chicken))
        order = int(input("몇 마리 주문?"))

        if order < 1:
            raise ValueError

        if order > chicken:
            print("재료가 부족합니다.")
        else:
            print("[대기번호 {0}] {1} 마리 주문이 완료었습니다.".format(waiting, order))
            waiting += 1
            chicken -= order

        if chicken == 0:
            raise SoldOutError
    except ValueError as err:
        print(err)
    except SoldOutError:
        print("재고가 소진되어 더 이상 주문을 받지 않습니다.")
        break
