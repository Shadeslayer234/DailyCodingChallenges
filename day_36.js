const getRealFloor = n => n > 0 && n < 13 ?  n-1 : (n < 0) ? n : (n > 13) ? n-2 : 0
