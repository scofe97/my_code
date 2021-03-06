import pygame

pygame.init() # 초기화 (반드시 필요)

# 화면 크기 설정
screen_width = 480 # 가로 크기
screen_height = 640 # 세로 크기
screen = pygame.display.set_mode((screen_width, screen_height))

# 화면 타이틀 설정
pygame.display.set_caption("Nado Game") # 게임 이름

# 배경 이미지 불러오기
background = pygame.image.load("C:/Users/win10/OneDrive - 인제대학교/학교파일/파이썬 연습/2020.12.20 게임개발(파이썬 활용)/pygame_basic/background.png")

# 스프라이트(캐릭터) 불러오기
character = pygame.image.load("C:/Users/win10/OneDrive - 인제대학교/학교파일/파이썬 연습/2020.12.20 게임개발(파이썬 활용)/pygame_basic/character.png")
character_size = character.get_rect().size # 이미지의 크기를 구해옴
character_width = character_size[0] # 캐릭터의 가로 크기
character_height = character_size[1] # 캐릭터의 세로 크기
character_x_pos = (screen_width/2)- (character_width/2) # 화면 가로 절반 크기에 해당하는 곳 위치
character_y_pos = screen_height - character_height # 화면 세로 절반 크기에 해당하는 곳 위치

# 프로그램이 실행되는데 밑에 코드가 없으니 바로 종료됨
# 이벤트 루프
running = True # 게임이 진행중인가?

# 게임이 진행중이는 동안 입력을 받은걸 처리중
while running:
    for event in pygame.event.get(): # 이벤트가 발생하였는가?
        if event.type == pygame.QUIT: # 윈도우의 x를 눌렸다 생각
            running = False # 게임이 진행중이 아님

    screen.blit(background, (0, 0)) # 배경 그리기
    screen.blit(character, (character_x_pos, character_y_pos))

    pygame.display.update() # 게임화면을 다시 그리기

# running -> false 종료가됨
pygame.quit()