// Student Data
// 5 Students, each with 5 Semesters, each semester with 5 Subjects (Marks out of 100)

const students = [
    {
        id: "STD-1001",
        name: "Wasif Tai",
        semesters: [
            {
                semester: 1,
                subjects: [
                    { name: "Mathematics", marks: 85 },
                    { name: "English", marks: 78 },
                    { name: "Computer Science", marks: 92 },
                    { name: "Physics", marks: 75 },
                    { name: "Chemistry", marks: 80 }
                ]
            },
            {
                semester: 2,
                subjects: [
                    { name: "Mathematics II", marks: 82 },
                    { name: "English II", marks: 80 },
                    { name: "Programming Fund.", marks: 88 },
                    { name: "Physics II", marks: 76 },
                    { name: "Chemistry II", marks: 84 }
                ]
            },
            {
                semester: 3,
                subjects: [
                    { name: "Calculus", marks: 75 },
                    { name: "Communication", marks: 82 },
                    { name: "OOP", marks: 90 },
                    { name: "Digital Logic", marks: 70 },
                    { name: "Discrete Math", marks: 78 }
                ]
            },
            {
                semester: 4,
                subjects: [
                    { name: "Linear Algebra", marks: 72 },
                    { name: "Technical Writing", marks: 85 },
                    { name: "Data Structures", marks: 88 },
                    { name: "Computer Org.", marks: 74 },
                    { name: "Statistics", marks: 80 }
                ]
            },
            {
                semester: 5,
                subjects: [
                    { name: "Database Systems", marks: 92 },
                    { name: "OS", marks: 85 },
                    { name: "Algorithms", marks: 86 },
                    { name: "Networks", marks: 80 },
                    { name: "Software Eng.", marks: 88 }
                ]
            }
        ]
    },
    {
        id: "STD-1002",
        name: "Sara",
        semesters: [
            { semester: 1, subjects: [{name: "Sub1", marks: 45}, {name: "Sub2", marks: 50}, {name: "Sub3", marks: 40}, {name: "Sub4", marks: 55}, {name: "Sub5", marks: 42}] }, // Weak student example
            { semester: 2, subjects: [{name: "Sub1", marks: 50}, {name: "Sub2", marks: 55}, {name: "Sub3", marks: 45}, {name: "Sub4", marks: 60}, {name: "Sub5", marks: 48}] },
            { semester: 3, subjects: [{name: "Sub1", marks: 55}, {name: "Sub2", marks: 60}, {name: "Sub3", marks: 50}, {name: "Sub4", marks: 65}, {name: "Sub5", marks: 52}] },
            { semester: 4, subjects: [{name: "Sub1", marks: 60}, {name: "Sub2", marks: 65}, {name: "Sub3", marks: 55}, {name: "Sub4", marks: 70}, {name: "Sub5", marks: 58}] },
            { semester: 5, subjects: [{name: "Sub1", marks: 65}, {name: "Sub2", marks: 70}, {name: "Sub3", marks: 60}, {name: "Sub4", marks: 75}, {name: "Sub5", marks: 62}] }
        ]
    },
    {
        id: "STD-1003",
        name: "Abdur Rehman",
        semesters: [
            // Consistent A grade student
            { semester: 1, subjects: [{name: "Mth", marks: 90}, {name: "Eng", marks: 88}, {name: "CS", marks: 95}, {name: "Phy", marks: 92}, {name: "Chm", marks: 90}] },
            { semester: 2, subjects: [{name: "Mth", marks: 92}, {name: "Eng", marks: 90}, {name: "CS", marks: 96}, {name: "Phy", marks: 94}, {name: "Chm", marks: 92}] },
            { semester: 3, subjects: [{name: "Mth", marks: 88}, {name: "Eng", marks: 85}, {name: "CS", marks: 94}, {name: "Phy", marks: 90}, {name: "Chm", marks: 89}] },
            { semester: 4, subjects: [{name: "Mth", marks: 91}, {name: "Eng", marks: 89}, {name: "CS", marks: 97}, {name: "Phy", marks: 93}, {name: "Chm", marks: 91}] },
            { semester: 5, subjects: [{name: "Mth", marks: 93}, {name: "Eng", marks: 92}, {name: "CS", marks: 98}, {name: "Phy", marks: 95}, {name: "Chm", marks: 94}] }
        ]
    },
    {
        id: "STD-1004",
        name: "Babar Azam",
        semesters: [
            // Average student
            { semester: 1, subjects: [{name: "S1", marks: 60}, {name: "S2", marks: 65}, {name: "S3", marks: 58}, {name: "S4", marks: 62}, {name: "S5", marks: 70}] },
            { semester: 2, subjects: [{name: "S1", marks: 62}, {name: "S2", marks: 68}, {name: "S3", marks: 60}, {name: "S4", marks: 65}, {name: "S5", marks: 72}] },
            { semester: 3, subjects: [{name: "S1", marks: 65}, {name: "S2", marks: 70}, {name: "S3", marks: 65}, {name: "S4", marks: 68}, {name: "S5", marks: 75}] },
            { semester: 4, subjects: [{name: "S1", marks: 68}, {name: "S2", marks: 72}, {name: "S3", marks: 68}, {name: "S4", marks: 70}, {name: "S5", marks: 75}] },
            { semester: 5, subjects: [{name: "S1", marks: 70}, {name: "S2", marks: 75}, {name: "S3", marks: 70}, {name: "S4", marks: 72}, {name: "S5", marks: 78}] }
        ]
    },
    {
        id: "STD-1005",
        name: "Cristiano Ronaldo Bakra",
        semesters: [
             // Mixed
            { semester: 1, subjects: [{name: "S1", marks: 70}, {name: "S2", marks: 80}, {name: "S3", marks: 90}, {name: "S4", marks: 60}, {name: "S5", marks: 75}] },
            { semester: 2, subjects: [{name: "S1", marks: 72}, {name: "S2", marks: 82}, {name: "S3", marks: 92}, {name: "S4", marks: 62}, {name: "S5", marks: 78}] },
            { semester: 3, subjects: [{name: "S1", marks: 75}, {name: "S2", marks: 85}, {name: "S3", marks: 94}, {name: "S4", marks: 65}, {name: "S5", marks: 80}] },
            { semester: 4, subjects: [{name: "S1", marks: 78}, {name: "S2", marks: 88}, {name: "S3", marks: 95}, {name: "S4", marks: 68}, {name: "S5", marks: 82}] },
            { semester: 5, subjects: [{name: "S1", marks: 80}, {name: "S2", marks: 90}, {name: "S3", marks: 96}, {name: "S4", marks: 70}, {name: "S5", marks: 85}] }
        ]
    }
];
