function augmentingPath(graph, start, end) {
    //Create copy so original isn't modified
    var copy = JSON.parse(JSON.stringify(graph));
    for(var key in copy) {copy[key].visited = false};
    
    function dfTraversal(start) {
        if (start == end) {return [start];}
        copy[start].visited = true;
        var toCheck = Object.keys(graph[start]);
        var next;
        var path;
    
        //For each accessible vertex
        while(toCheck.length) {
            next = toCheck.shift();
            
            //Recursively process next unless visited
            if(!copy[next].visited) {
                path = dfTraversal(next);
    
                //Add node if to path if it exists
                if(path.length) {
                    path.unshift(start);
                    return path;
                }
            }   
        }
        return [];
    }
    return dfTraversal(start);
}