//String reversal

function stringreverse(str){
    return str.split('').reverse().join('');
}

//Count Characters

function countChar(str){
    return str.length;
}

//Capitalize Words

function capitalWOrds(str){
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slide(1)).join(' ');
}
