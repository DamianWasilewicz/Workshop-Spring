'''
Damian Wasilewicz
SoftDev2 pd6
K#22 -- Closure
2019-05-01
'''

def repeat(n):
    def s_create(s):
        return s * n
    return s_create

r1 = repeat(2)
print(r1("hello"))

r2 = repeat(2)
print(r2("goodbye"))

def make_counter(accessor_act = False):
    counter = 0

    def incr():
        nonlocal counter
        counter += 1
        return counter

    def accessor():
        return counter

    def func(access = False):
        if not access:
            return incr()
        else:
            return accessor()

    if accessor_act:
        return func
    return incr

    ctr1 = make_counter()
    print(ctr1())
    print(ctr1())

    ctr2 = make_counter()
    print(ctr2())
    print(ctr1())
    print(ctr2())
