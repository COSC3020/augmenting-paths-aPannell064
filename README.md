# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

This function works very similar to a depth-first search. When the augmentingPath function is  
called, it makes a copy of the graph just so that the orignal graph isn't modifed. It then
marks all edges as unvisited. Doing a deep copy of the graph will cause it to copy every 
vertex and every edge. Marking each vertex only requires going through the number of vertices. 
On each call of the dfTraversal function, all of the edges of start will be added to the 
toCheck array. Only edges that go to vertices that haven't been visited yet will be passed 
into a new recursive call. Therefore, in the worst case, where the whole graph is traversed 
each edge and vertex will only be processed once. This does not impact the complexity 
significantly because copying the array also requires going through all vertices and edges. 
Therefore the asymptotic complexity is $\Theta(|V| + |E|)$. 

## Additional Help

I used https://www.geeksforgeeks.org/how-to-iterate-over-a-javascript-object/ 
and https://www.w3schools.com/js/js_objects.asp to help me learn how to use 
and traverse objects in JavaScript as I had not yet worked with them. 

"I certify that I have listed all sources used to complete this exercise, 
including the use of any Large Language Models. All of the work is my own, 
except where stated otherwise. I am aware that plagiarism carries severe 
penalties and that if plagiarism is suspected, charges may be filed against 
me without prior notice."
