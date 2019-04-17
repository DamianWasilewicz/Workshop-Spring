# Damian Wasilewicz
# SoftDev2 pd6
# K#18 -- Getting Clever with List Comprehensions
# 2019-04-16


def triples(num):
    '''Returns Pythagorean triples in range'''
    triples = [ (x,y,z) for x in range(1,num) for y in range(x,num) for z in range(y,num) if x*x + y*y == z*z]
    return triples

print(triples(15))

def quickSort(list):
    '''Sorts using the quicksort algorithm'''
    if len(list) <= 1:
        return list

    part = list[len(list)-1]
    l = [x for x in list if x < part]
    r = [x for x in list if x > part]

    return quickSort(l) + [part] + quickSort(r)

print(quickSort([81, 23, 43, 7, 50, 2]))
