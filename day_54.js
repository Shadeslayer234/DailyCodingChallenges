// Highest Rank Number in an Array
function highestRank(arr){
//Your Code logic should written here

{
    if(arr.length == 0)
        return null;
    var modeMap = {};
    var maxEl = arr[0], maxCount = 1;
    for(var i = 0; i < arr.length; i++)
    {
        var el = arr[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
}
