import pygame

pygame.init() # 초기화 (반드시 필요)

# 화면 크기 설정
screen_width = 480 # 가로 크기
screen_height = 640 # 세로 크기
pygame.display.set_mode((screen_width, screen_height))

# 화면 타이틀 설정
pygame.display.set_caption("Nado Game") # 게임 이름

# 프로그램이 실행되는데 밑에 코드가 없으니 바로 종료됨
# 이벤트 루프
running = True # 게임이 진행중인가?

# 게임이 진행중이는 동안 입력을 받은걸 처리중
while running:
    for event in pygame.event.get(): # 이벤트가 발생하였는가?
        if event.type == pygame.QUIT: # 윈도우의 x를 눌렸다 생각
            running = False # 게임이 진행중이 아님

# running -> false 종료가됨
pygame.quit()