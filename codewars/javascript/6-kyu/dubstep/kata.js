const songDecoder = song => {
    return song.replace(/WUB/g,' ').trim().replace(/[ ]{2,}/g,' ');
}