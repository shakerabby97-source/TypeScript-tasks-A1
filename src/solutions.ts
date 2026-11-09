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








interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
  {title: 'node.js', students: 55, isPublished: true}
];

const getPopularCourses = (value: Course[], minStudents: number) => {

    const filteredCourse = value.filter((c)=> c.isPublished && c.students >= minStudents)

    return filteredCourse
}

console.log(getPopularCourses(courses, 80))