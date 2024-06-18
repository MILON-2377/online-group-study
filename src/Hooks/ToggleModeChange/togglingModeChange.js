const toggleArr = [];
const toggleModeChange = (name) => {
    if(name === true || name === false){
        toggleArr.length = 0;
        toggleArr.push(name);
    }

    return toggleArr[0];
}

export default toggleModeChange