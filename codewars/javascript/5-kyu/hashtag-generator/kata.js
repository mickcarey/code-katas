const generateHashtag = str => {
    let hashTag = '#' + str.replace(/(\s+)/g,' ').split(' ').map(function(val) {
        if (val === '') return val;
        return val[0].toUpperCase() + val.slice(1);
    }).join('');

    if (hashTag === '#' || hashTag.length > 140) return false;

    return hashTag;
}