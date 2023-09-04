/**
 * 
 * @param {string} url - path of the markdown file to be shown
 * @param {function} updateState - variable that holds the update
 *  state for whatev
 */



const parseMD = (url, updateState) => {
    console.log(url)
    let result = fetch(url)
    .then(res => res.text())
    .then((text) => updateState(text))
    .catch((err) => console.log(err))
}

export {
    parseMD
}