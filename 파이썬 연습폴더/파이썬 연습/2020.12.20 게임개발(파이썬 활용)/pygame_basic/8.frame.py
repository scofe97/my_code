import pygame
####################################################################
# 기본 초기화 (반드시 해야 함)

pygame.init() # 초기화 (반드시 필요)

# 화면 크기 설정
screen_width = 480 # 가로 크기
screen_height = 640 # 세로 크기
screen = pygame.display.set_mode((screen_width, screen_height))

# 화면 타이틀 설정
pygame.display.set_caption("게임 이름") # 게임 이름

# FPS
clock = pygame.time.Clock()

####################################################################

# 1. 사용자 게임 초기화 (배경화면, 게임 이미지, 좌표, 속도,  폰트)

running = True

# 게임이 진행중이는 동안 입력을 받은걸 처리중
while running:
    dt = clock.tick(30) # 게임화면의 초당 프레임 수를 설정

    # 2. 이벤트 처리 (키보드 마우스)
    for event in pygame.event.get(): # 이벤트가 발생하였는가?
        if event.type == pygame.QUIT: # 윈도우의 x를 눌렸다 생각
            running = False # 게임이 진행중이 아님

    # 3. 게임 캐릭터 위치 정의

    # 4. 충돌 처리

    # 5. 화면에 그리기

    pygame.display.update()  # 게임화면을 다시 그리기

# running -> false 종료가됨
pygame.quit()