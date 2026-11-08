const multiplyValue = (value: number, multiplier: number = 2 ) : number => {
     
    if(multiplier){
        return value * multiplier;
    }

    return value * multiplier;
        
}







type Input = string | number | boolean;

const processInput = (value: Input): Input =>{

    if(typeof(value) === 'string'){
        return value.trim().toLowerCase()
    }
    else if (typeof(value) === 'number') {
        return value * 10;
    }
    else{
        if(value === true){
            return "Active";
        }
        else{
            return 'Inactive'
        }
    }
}









type coords  = readonly [latitude: number, longitude: number, locationName: string ];   

const formatCoordinate = (value: coords) : string => {

    return `Location: ${value[2]} (${value[0]}, ${value[1]})`;

}









const concatenateArrays = <T>(...arrays: T[][]): T[] =>  {
  
    const concatenateValue = arrays.reduce((acc , cur)=> {
        return acc.concat(cur);
},[])
    
    return concatenateValue;
}








