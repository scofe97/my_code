class ThaiwanPackage:
        def detail(self):
            print("[태국 패키지 3박 5일] 방콕, 파타야 여행 (야시장 투어) 50만원")
if __name__ == "__main__":
    print("Thailand 모듈을 직접 실행")
    print("이 문장은 모듈을 직접 실행할 때만 실행된다.")
    trip_to = ThaiwanPackage()
    trip_to.detail()
else:
    print("외부에서 모듈 호출)")