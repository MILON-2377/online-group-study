
const updateArr = [];
const updateAssingmenArr = (name) => {
    if(name){
        updateArr.length = 0;
        updateArr.push(name);
    }

    return updateArr[0];
}

export default updateAssingmenArr