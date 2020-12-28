# import theater_module
# theater_module.price(3)
# theater_module.price_morning(4)
# theater_module.price_solider(5)

# import theater_module as mv
# mv.price(3)
# mv.price_morning(4)
# mv.price_solider(5)

# from theater_module import *
# # 저 모듈을 전부 사용하겠다는 의미
# price(3)
# price_morning(4)
# price_solider(5)

# from theater_module import price, price_morning
# price(5)
# price_morning(6)
# # price_solider(5)
#
# from theater_module import price_solider as price
# price(5)

# import travel.taiwan
# trip_to = travel.taiwan.ThaiwanPackage()
# trip_to.detail()

# from travel.taiwan import ThaiwanPackage
# trip_to = ThaiwanPackage()
# trip_to.detail()
#
# from travel import vietnam
# trip_to = vietnam.VietnamPackage()
# trip_to.detail()

# from travel import *
# # # 범위 설정을 해줘야함,
# # trip_to = vietnam.VietnamPackage()
# trip_to = taiwan.ThaiwanPackage()
# trip_to.detail()
#
# import inspect
# import random
# print(inspect.getfile(random))
# print(inspect.getfile(taiwan))
