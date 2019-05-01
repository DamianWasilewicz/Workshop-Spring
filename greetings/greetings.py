# import random
#
#
# def make_HTML_heading(f):
#     # txt = f()
#     #print(txt)
#     def inner():
#         return '<h1>' + f() + '</h1>'
#     # print(inner)
#     return inner
# #greet = makeHTMLheading(greet)
# @make_HTML_heading
# def greet():
#     greetings = ['Hello', 'Welcome', 'AYO!', 'Hola', 'Bonjour', 'Word up']
#     #print(greetings)
#     return random.choice(greetings)
# #
# # greet_heading = make_HTML_heading(greet)
# # print(greet_heading())
# # print(greet())
# # # print(greet_heading)
# print(greet())
#
#
#
# def fib(n):
#     list = {0:0, 1:1}
#     if n in list.keys():
#         return stored[n]
#     else:
#         list

def memoize(f):
    memo = {}
    def helper(x):
        nonlocal memo
        return memo[x]
    return helper

def fib(b):


fib = memoize(fib)
print(fib(40))
