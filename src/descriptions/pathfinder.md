# Pathfinder

A provided program visualizes the map, the start point (green circle), the pathfinder itself (black circle), and the goal location (red circle). The objective is to design a program that calculates a path with given constraints.

## Constraints

- The program should work on all 10×10 maps that have a possible path.
- It must not exceed the maximum number of steps or the maximum time limit.
- Blue squares (water) are obstacles the pathfinder must overcome.
- The pathfinder cannot leave the 10×10 area.

## Implementation

The A\* algorithm was implemented for this project. The best path is pre-calculated and then executed. The cost to move is always 1, therefore diagonal movement is also used.
