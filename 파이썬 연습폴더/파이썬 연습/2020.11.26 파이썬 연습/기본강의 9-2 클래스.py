from random import *


class Unit:
    def __init__(self, name, hp, speed):
        self.name = name
        self.hp = hp
        self.speed = speed
        print("{0} 유닛이 생성되었습니다".format(name))

    def move(self, location):
        print('{0}, {1} 방향으로 이동합니다. [속도 {2}]'. \
              format(self.name, location, self.speed))

    def damaged(self, damage):
        print("{0} : {1} 데미지를 입었습니다".format(self.name, damage))
        self.hp -= damage
        print("{0} : 현재 체력은 {1} 입니다".format(self.name, self.hp))
        if self.hp <= 0:
            print("{0} : 파괴되었습니다".format(self.name))


class AttackUnit(Unit):
    def __init__(self, name, hp, speed, damage):
        Unit.__init__(self, name, hp, speed)
        self.damage = damage

    def attack(self, location):
        print("{0} : {1} 방향으로 적군을 공격합니다. [공격력 {2} ]" \
              .format(self.name, location, self.damage))


class Marine(AttackUnit):
    def __init__(self):
        AttackUnit.__init__(self, "마린", 40, 1, 5)

    # 스팀팩 : 체력 10감소 빠른공격
    def stimpack(self):
        if self.hp > 10:
            self.hp -= 10
            print("{0} : 스팀팩 사용 (HP 10 감소)".format(self.name))
        else:
            print("{0} : 체력이 부족하여 스팀팩을 사용하지 않습니다".format(self.name))


class Tank(AttackUnit):
    # 시즈모드 : 탱크를 지상에 고정, 더 높은피해 이동불가
    seize_developed = False

    def __init__(self):
        AttackUnit.__init__(self, "탱크", 150, 1, 35)
        self.seize_mode = False

    def set_seize_mode(self):
        if not Tank.seize_developed:
            return
        # 현재 시즈모드 아님
        if not self.seize_mode:
            print("{0} : 시즈모드로 전환합니다".format(self.name))
            self.damage *= 2
            self.seize_mode = True

        # 현재 시즈모드 임
        else:
            print("{0} : 시즈모드를 해제합니다".format(self.name))
            self.damage /= 2
            self.seize_mode = False


class Flyable:
    def __init__(self, flying_speed):
        self.flying_speed = flying_speed

    def fly(self, name, location):
        print("{0} : {1} 방향으로 날아갑니다. [속도 {2}]". \
              format(name, location, self.flying_speed))


class FlyableAttackUnit(AttackUnit, Flyable):
    def __init__(self, name, hp, damage, flying_speed):
        AttackUnit.__init__(self, name, hp, 0, damage)
        Flyable.__init__(self, flying_speed)

    def move(self, location):
        self.fly(self.name, location)


# pass -> 그냥 넘어가는 것 ( 에러발생안하고 넘어감)


class Wraith(FlyableAttackUnit):
    def __init__(self):
        FlyableAttackUnit.__init__(self, "레이스", 80, 20, 5)
        self.clocked = False

    def clocking(self):
        if self.clocked == True:
            print("{0} 클로킹 모드 해제합니다".format(self.name))
            self.clocked = False
        else:
            print("{0} 클로킹 모드 설정합니다 ".format(self.name))
            self.clocked = True


def game_start():
    print("[알림] 새로운 게임을 시작합니다.")


def game_over():
    print("[Player : gg]")
    print("[Player] 님이 게임에서 퇴장하셨습니다.")


# 실제 게임
game_start()
m1 = Marine()
m2 = Marine()
m3 = Marine()

t1 = Tank()
t2 = Tank()

w1 = Wraith()

attack_unit = [m1, m2, m3, t1, t2, w1]

for unit in attack_unit:
    unit.move("1시")

Tank.seize_developed = True
print("[알림] 탱크 시즈 모드 개발이 완료되었습니다")

# 공격 모드 준비 ( 마린 : 스팀팩, 탱크 : 시즈모드, 레이스 : 클로킹 )
for unit in attack_unit:
    if isinstance(unit, Marine):
        unit.stimpack()
    elif isinstance(unit, Tank):
        unit.set_seize_mode()
    elif isinstance(unit, Wraith):
        unit.clocking()

# 공격
for unit in attack_unit:
    unit.attack("1시")

# 피해
for unit in attack_unit:
    unit.damaged(randint(5, 21))

# 게임 종료
game_over()

# 퀴즈
# 3대 매물
# 강남 10억 2010년
# 마포 5억 2007년
# 송파 빌라 월세 500/50 2000년


class House:
    def __init__(self, location, house_type, deal_type, price, completion_year):
        self.location = location
        self.house_type = house_type
        self.deal_type = deal_type
        self.price = price
        self.completion_year = completion_year

    def show_detail(self):
        print("{0} {1} {2} {3} {4}".format(self.location, self.house_type, self.deal_type, self.price, self.completion_year ))


h1 = House("강남", "아파트", "매매", "10억", "2010년")
h2 = House("마포", "오피스텔", "전세", "5억", "2007년")
h3 = House("송파", "빌라", "월세", "500/50", "2000년")

house = [h1, h2, h3]
count = 0
for h1 in house:
    if isinstance(h1, House):
        count += 1
print("총 {0}대의 매물이 있습니다".format(count))

for h in house:
    h.show_detail()