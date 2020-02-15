function r(l, o=0, c=0, s=""){

    const canOpen = () => o < l,
          canClose = () => c < o,
          options = [];

    if(!canClose() && !canOpen())
        return [s];
    

    if(canOpen())
        options.push(...r(l, o+1, c, s+"("));
    
    if(canClose())
        options.push(...r(l, o, c+1, s+")"));

    return options;
}