import turtle
import os

wn=turtle.Screen()
wn.title("Game")
wn.bgcolor("green")
wn.setup(width=800 ,height=600)
wn.tracer(0)


score_a=0
score_b=0



paddle_a=turtle.Turtle()
paddle_a.speed=(0)
paddle_a.shape("square")
paddle_a.color("blue")