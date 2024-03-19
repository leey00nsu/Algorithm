/*
노래를 다음 기준으로 수록한다.
1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
*/


function solution(genres, plays) {
    const genreArr = []
    const songArr = []
    const songByGenreArr = []
    const totalPlaysMap = {}
    
    for(let i=0;i<genres.length;i++) {
        songArr.push({
            "id" : i,
            "genre": genres[i],
            "play": plays[i]
        })
        
        totalPlaysMap[genres[i]] = totalPlaysMap[genres[i]] ? totalPlaysMap[genres[i]] + plays[i] : plays[i]
    }
    
    Object.keys(totalPlaysMap).forEach(genre => {
        genreArr.push({
            'genre' : genre,
            'totalPlays' : totalPlaysMap[genre]
        })
    })
    
    genreArr.sort((a,b) => b.totalPlays - a.totalPlays)
    
    genreArr.forEach(g => {
        const songByGenre = songArr.filter(s => s.genre === g.genre)
        .sort((a,b) => b.play - a.play || a.id - b.id ).map(s => s.id)
        
        songByGenreArr.push(...songByGenre.slice(0,2))
    })
    
    
    
    return songByGenreArr;
}