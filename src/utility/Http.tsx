import React from 'react'

const HttpGet = (url: string) => {
    fetch(url).then(res=> JSON.stringify(res)).then(res => {
        return res;
    }).catch(error => {
        console.log("HttpGet Error :->",error);
        console.log("HttpGet Error url:->",url);
    })
}

const HttpPost = (url: string) => {
    fetch(url).then(res=> JSON.stringify(res)).then(res => {
        return res;
    }).catch(error => {
        console.log("HttpGet Error :->",error);
        console.log("HttpGet Error url:->",url);
    })
}

export { HttpGet, HttpPost}