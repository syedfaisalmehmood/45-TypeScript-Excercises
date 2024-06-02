

// 21.	They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

//Making a interface for creating Object.
interface governorSindhITCourse {
    courseName : string;
    location :  string;
    onSiteStudents : number;
}

// Making a object by using above mentioend interface.
let governorSindhITCourse = {
    courseName: "TypeScrtip and JavaScript",
    location: "Governor House Sindh",
    onSiteStudents: "50000",
};

// Printing the Object values.
console.log(governorSindhITCourse)