from graphics import *
from random import *
import time
        
class Cell:
    
    def __init__(self, position, isAlive):
        self.position = position
        self.isAlive = isAlive
        
    def drawSelf(self, win):
        topLeft = Point(self.position[0] * 20, self.position[1] * 20)
        bottomRight = Point(self.position[0] * 20 + 20, self.position[1] * 20 + 20)
        cell = Rectangle(topLeft, bottomRight)
        if not self.isAlive:
            cell.setFill("white")
        else:
            cell.setFill("black")
        cell.draw(win)
        
    def toggleAlive(self):
        if self.isAlive:
            self.isAlive = False
        else:
            self.isAlive = True
            
    def getNumNeighbours(self, gridArray, gridSize):
        numNeighbours = 0
        for i in [-1,0,1]:
            for j in [-1,0,1]:
                if not(i == 0 and j == 0):
                    checkPos = [0, 0]
                    checkPos[0] = self.position[0] + i
                    checkPos[1] = self.position[1] + j
                    if checkPos[0] <= gridSize - 1 and checkPos[1] <= gridSize - 1 and checkPos[0] >= 0 and checkPos[1] >= 0:
                        cellToCheck = gridArray[checkPos[0]][checkPos[1]]
                        if cellToCheck.isAlive:
                            numNeighbours += 1
        return numNeighbours
        
    def simulate(self, gridArray, gridSize, propNum, deathNum):
        numNeighbours = self.getNumNeighbours(gridArray, gridSize)
        if numNeighbours >= propNum and numNeighbours < deathNum:
            self.isAlive = True
        else:
            self.isAlive = False
        
        
def createNewGrid(gridSize, propNum, deathNum):
    finalArray = []
    for i in range(gridSize):
        innerArray = []
        for j in range(gridSize):
            innerArray.append(Cell([i, j], False))
        finalArray.append(innerArray)
    return finalArray
    

def drawGrid(gridArray, gridSize, win):
    for i in range(gridSize):
        for j in range(gridSize):
            gridArray[i][j].drawSelf(win)
            
def randomLayout(gridArray, gridSize):
    for i in range(gridSize):
        for j in range(gridSize):
            randNum = randint(0,1)
            if randNum == 0:
                gridArray[i][j].isAlive = True
            else:
                gridArray[i][j].isAlive = False
            
def drawStart(win, gridSize):
    startButton = Rectangle(Point(gridSize * 7, gridSize * 20 + 10), Point(gridSize * 13, gridSize * 20 + 60))
    startText = Text(Point(gridSize * 10, gridSize * 20 + 40), "START")
    startButton.draw(win)
    startText.draw(win)
    
def drawRandomButton(win, gridSize):
    randButton = Rectangle(Point(gridSize * 7, gridSize * 20 + 70), Point(gridSize * 13, gridSize * 20 + 130))
    randText = Text(Point(gridSize * 10, gridSize * 20 + 100), "RANDOM")
    randButton.draw(win)
    randText.draw(win)
    
def beginSimulation(gridSize, gridArray, propNum, deathNum, win):
    while True:
        time.sleep(0.5)
        for i in range(gridSize):
            for j in range(gridSize):
                gridArray[i][j].simulate(gridArray, gridSize, propNum, deathNum)
        drawGrid(gridArray, gridSize, win)
            
    
def Main():        
    running = False
    propNum = input("How many neighbouring cells does it take to propagate a cell? ")
    deathNum = input("How many neighbouring cells does it take to crowd a cell? ")
    gridSize = input("How large should the grid be? ")
    gridArray = createNewGrid(gridSize, propNum, deathNum)
    win = GraphWin("Game Of Life", gridSize * 20, gridSize * 20 + 130)
    drawGrid(gridArray, gridSize, win)
    drawStart(win, gridSize)
    drawRandomButton(win, gridSize)
    while not running:
        mouseRaw = win.getMouse()
        mouseX = mouseRaw.getX()
        mouseY = mouseRaw.getY()
        if mouseX >= gridSize * 7 and mouseX <= gridSize * 13 and mouseY > gridSize * 20 +10 and mouseY < gridSize * 20 + 60:
            running = True
            beginSimulation(gridSize, gridArray, propNum, deathNum, win)
        elif mouseX >= gridSize * 7 and mouseX <= gridSize * 13 and mouseY > gridSize * 20 +70 and mouseY < gridSize * 20 + 130:
            randomLayout(gridArray, gridSize)
            drawGrid(gridArray, gridSize, win)
        else:
            cellClickedX = int(mouseX / 20)
            cellClickedY = int(mouseY / 20)
            gridArray[cellClickedX][cellClickedY].toggleAlive()
            drawGrid(gridArray, gridSize, win)
    
    
Main()
