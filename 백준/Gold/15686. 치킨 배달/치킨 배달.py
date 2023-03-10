from itertools import combinations

N, M = list(map(int, input().split()))


city = [[0] * N for _ in range(N)]

house = []
chicken = []
house_chicken_distance = []
city_chicken_distance = []


def get_chicken(x, y):
    chicken_arr = []
    for i in chicken:
        chicken_x, chicken_y = i
        chicken_distance = abs(x - chicken_x) + abs(y - chicken_y)
        chicken_arr.append(chicken_distance)

    return chicken_arr


def get_chicken_arr(distance, arr):
    chicken_arr = []
    for i in arr:
        chicken_arr.append(distance[i])

    return min(chicken_arr)

    # return chicken_arr


for i in range(N):
    city[i] = list(map(int, input().split()))

for i in range(N):
    for j in range(N):
        if city[i][j] == 1:
            house.append([i, j])
        elif city[i][j] == 2:
            chicken.append([i, j])


for i in range(len(house)):
    house_x, house_y = house[i]
    house_chicken_distance.append(get_chicken(house_x, house_y))


if M == len(chicken):
    result = 0
    for i in range(len(house)):
        result += min(house_chicken_distance[i])
    print(result)
elif M < len(chicken):
    result_arr = []
    m = []
    for i in range(len(chicken)):
        m.append(i)

    # len(house)
    coord_comb = list(combinations(m, M))
    for coord in coord_comb:
        cnt = 0
        for j in range(len(house)):
            cnt += get_chicken_arr(house_chicken_distance[j], coord)

        city_chicken_distance.append(cnt)

    print(min(city_chicken_distance))
