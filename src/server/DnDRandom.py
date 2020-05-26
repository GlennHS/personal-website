from graphics import Rectangle, Point, GraphWin
import random, math
from enum import Enum


colors = ['black', 'white', 'grey', 'red', 'orange', 'blue', 'yellow']
win = -1
size = -1
tileArr = []

class TileType(Enum):
    WALL = 0
    FLOOR = 1
    DIFFICULT = 2
    ENEMY = 3
    TRAP = 4
    WATER = 5
    OTHER = 6

class Tile:
    
    def __init__(self, xPos, yPos, type):
        self.xPos = xPos
        self.yPos = yPos
        self.type = type
        self.img = Rectangle(Point((20 * xPos), (20 * yPos)), Point((20 * xPos + 20), (20 * yPos + 20)))
        self.img.setFill(colors[self.type])
        self.img.draw(win)
        
    def cycleType(self):
        if(self.type >= 6):
            self.type -= 7
        self.type += 1
        self.img.setFill(colors[self.type])
        
    def replaceRegWithDiff(self):
        if(self.type == 1):
            self.type = 2
            self.img.setFill(colors[self.type])
            
    def replaceRegWithWater(self):
        if(self.type == 1):
            self.type = 5
            self.img.setFill(colors[self.type])
        
def generateSolid(i, j):
    for x in range(3):
        for y in range(3):
            tileArr[i + x][j + y] = Tile(i + x, j + y, TileType.WALL.value)

def generateEmpty(i, j):
    for x in range(3):
        for y in range(3):
            tileArr[i + x][j + y] = Tile(i + x, j + y, TileType.FLOOR.value)

def generateCross(i, j):
    for x in range(3):
        for y in range(3):
            if(x == 1 or y == 1):
                tileArr[i + x][j + y] = Tile(i + x, j + y, TileType.FLOOR.value)
            else:
                tileArr[i + x][j + y] = Tile(i + x, j + y, TileType.WALL.value)
                
def generatePOI(i, j):
    for x in range(3):
        for y in range(3):
            if(x == 1 or y == 1):
                tileArr[i + x][j + y] = Tile(i + x, j + y, TileType.FLOOR.value)
            else:
                tileArr[i + x][j + y] = Tile(i + x, j + y, TileType.WALL.value)
    tileArr[i + 1][j + 1] = Tile(i + 1, j + 1, TileType.OTHER.value)
    
def generateEnemy(i, j):
    for x in range(3):
        for y in range(3):
            if(x == 1 or y == 1):
                tileArr[i + x][j + y] = Tile(i + x, j + y, TileType.FLOOR.value)
            else:
                tileArr[i + x][j + y] = Tile(i + x, j + y, TileType.WALL.value)
    tileArr[i + 1][j + 1] = Tile(i + 1, j + 1, TileType.ENEMY.value)
    tileArr[i + 1][j + 2] = Tile(i + 1, j + 2, TileType.WALL.value)

def generateTraps(i, j):
    for x in range(3):
        for y in range(3):
            if(x == 1 or y == 1):
                tileArr[i + x][j + y] = Tile(i + x, j + y, TileType.FLOOR.value)
            else:
                tileArr[i + x][j + y] = Tile(i + x, j + y, TileType.WALL.value)
    tileArr[i + 1][j + 1] = Tile(i + 1, j + 1, TileType.TRAP.value)
    
def generateWall(i, j):
    for x in range(3):
        for y in range(3):
            tileArr[i + x][j + y] = Tile(i + x, j + y, TileType.FLOOR.value)
    if(random.choice([True, False]) == True):
        for a in range(3):
            tileArr[i + 2][j + a] = Tile(i + 2, j + a, TileType.WALL.value)
    else:
        for a in range(3):
            tileArr[i + a][j + 2] = Tile(i + a, j + 2, TileType.WALL.value)
        
def generateCorridor(i, j):
    for x in range(3):
        for y in range(3):
            tileArr[i + x][j + y] = Tile(i + x, j + y, TileType.WALL.value)
    if(random.choice([True, False]) == True):
        for a in range(3):
            tileArr[i + 1][j + a] = Tile(i + 1, j + a, TileType.FLOOR.value)
    else:
        for a in range(3):
            tileArr[i + a][j + 1] = Tile(i + a, j + 1, TileType.FLOOR.value)  
            
def generateChaos(i, j):
    for x in range(3):
        for y in range(3):
            tileArr[i + x][j + y] = Tile(i + x, j + y, TileType.FLOOR.value)
    tileArr[i + 1][j + 1] = Tile(i + 1, j + 1, random.randint(0, 6))

def tileClickHandler(clickPoint):
    x = math.floor(clickPoint.getX() / 20)
    y = math.floor(clickPoint.getY() / 20)
    (tileArr[x][y]).cycleType()

def disperseDiffTerrain():
    for i in range(size):
        for j in range(size):
            if(random.randint(0, 3) > 2):
                tileArr[i][j].replaceRegWithDiff()

def disperseWater():
    for i in range(size):
        for j in range(size):
            if(random.randint(0, 4) > 3):
                tileArr[i][j].replaceRegWithWater()

def Main():
    global size, win
    while(not(size % 3 == 0)):
        size = eval(input('How large should I generate? Must be cleanly divisible by 3\n'))
    win = GraphWin("DnD Random Dungeon Gen", size * 20, size * 20)
    for i in range(size):
        tileArr.append([])
        for j in range(size):
            tileArr[i].append(0)
    for i in range(0, size, 3):
        for j in range(0, size, 3):
            struct = random.randint(0, 99)
            isFlipped=random.choice([True, False])
            if(struct <= 20):
                generateSolid(i, j)
            elif(struct <= 40):
                generateEmpty(i, j)
            elif(struct <= 50):
                generateCross(i, j)
            elif(struct <= 56):
                generatePOI(i, j)
            elif(struct <= 68):
                generateEnemy(i, j)
            elif(struct <= 74):
                generateTraps(i, j)
            elif(struct <= 80):
                generateWall(i, j)
            elif(struct <= 86):
                generateCorridor(i, j)
            elif(struct <= 99):
                generateChaos(i, j)
    disperseDiffTerrain()
    disperseWater()
    while(1==1):
        click = win.getMouse()
        tileClickHandler(click)
Main()
        