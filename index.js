function superbowlWin(record){
    const WinningSeason = record.find(function(season){
        return season.result === "W"
    })
    if (WinningSeason){
    return WinningSeason.year;
}
}




