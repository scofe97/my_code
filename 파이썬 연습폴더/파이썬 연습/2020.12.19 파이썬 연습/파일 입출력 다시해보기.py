print("Python", "Java", "JavaScript", sep=" vs ")

print("Python", "Java", "JavaScript", sep=", ", end="?")
print("무엇이 더 재밌을까요?")

import sys
print("Python", "Java", file=sys.stdout)
print("Python", "Java", file=sys.stderr)

scores = {"수학": 0, "영어": 50, "코딩": 100}
for subject, score in scores.items():
    print(subject, score)
    print(subject.ljust(4), str(score).rjust(4), sep=":")

print("{0: >10}".format(500))

scores_file = open("score.txt", "w", encoding="utf-8")