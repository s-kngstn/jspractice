function beer(){
    
    for (num = 99; num > 0; num--){

        if (num === 1){

            console.log(`${num} bottle of beer on the wall, ${num} bottle of beer.
            Take one down, pass it around, ${num - 1} bottles of beer on the wall.`);

            console.log(`No more bottles of beer on the wall, no more bottles of beer. 
            Go to the store and buy some more, 99 bottles of beer on the wall.`);

            break;

        } else {

            console.log(`${num} bottles of beer on the wall, ${num} bottles of beer.
            Take one down, pass it around, ${num - 1} bottles of beer on the wall.`);

        }

        
    }       
}
