function augmentingPath(graph, start, end) {
    for(var key in graph) {graph[key].visited = false};
    
    function dfSearch(start) {
        if (start == end) {return [start];}
        graph[start].visited = true;
        var toCheck = Object.keys(graph[start]).slice(0, Object.keys(graph[start]).length-1);
        var next;
        var path;
    
        //For each accessible vertex
        while(toCheck.length) {
            next = toCheck.shift();
            
            //Recursively process next unless visited
            if(!graph[next].visited) {
                path = dfSearch(next);
    
                //Add node if to path if it exists
                if(path.length) {
                    path.unshift(start);
                    return path;
                }
            }   
        }
        return [];
    }
    return dfSearch(start);
}