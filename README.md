# Genetic Painting
A genetic algorithm in JavaScript using p5.js that trys to repaint the Mona Lisa only using Ellipses.
All paramaters are mostly self explaining and placed in sketch.js.

## Selection
To find the best DNA the program handles two DNA-Arrays. The current and on the left side visble "master" DNA and the
"buffer" DNA which contains the actual fittest DNA.
In the main loop the algorithm mutates the master DNA and compares it to the buffer DNA.
Is the master fitter than the buffer, the master DNA goes to the buffer.
Then the process starts again.

## Crossover
This typical phase of an evolutional process is missed in this project, because there is not really an population. In this project are only two DNAs which competes each other.

## Mutation
With a chance of `mutation_rate` the master DNA will be changed in the amount of `mutation_amount`. This includes position, radius x, radius y and color & alpha values of each circle ("creature"). Inside the mutation function is a hard coded chance of 5% to "jump mutate" the position or color value. (see code)

I coded this on a weekend for fun and therefore there is a lot to refactor, I think. ;-) Please feel free to improve the code. 

Have fun!
