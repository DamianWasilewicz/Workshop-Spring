'''
Damian Wasilewicz
SoftDev2 pd6
K#23 Memoization
2019-05-02
'''

def memoize(f):
    stored = {}
    def helper(x):
        if x not in stored:
            stored[x] = f(x)
        return stored[x]
    return helper
@memoize
def fib(n):
    if n==0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print(fib(40)) #102,334,155
