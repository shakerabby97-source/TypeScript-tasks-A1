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

const getPopularCourses = (value: Course[], minStudents: number): Course[] => {

    const filteredCourse = value.filter((c)=> c.isPublished && c.students >= minStudents)

    return filteredCourse;
}









const pluckValues = <T , K extends keyof T>(item: T[], key: K): T[K][] => {

    const values = item.map((i)=> i[key]);

    return values;
}












class Employee {
   protected name: string;
   private baseSalary: number;

   constructor(
        name: string,
        baseSalary: number
   ){
    this.name = name;
    this.baseSalary = baseSalary;
   }

   getDetails(){
      return  `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
   }

}


class Manager extends Employee {

    constructor (
        name: string,
        baseSalary: number,
        private department: string
    ){
        super(name , baseSalary)
        this.department = department;
    }

    getRoleInfo(){
        return `Manager of ${this.department}: ${this.name}`
    }
}













const validateAgeAsync = async(age: number): Promise<string> => {
   

    return new Promise((resolve, reject)=>{
        if(age >= 18) {
            setTimeout(()=>{
                resolve("Access Granted")
            },1000)
    }else {
        
        reject ( new Error('Access Denied: Must be 18 or older'))
    }
}
)
}


