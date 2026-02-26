export interface Patient {
    id: number;
    name: string;
    age: number;
    disease: string;
    condition: "Critical" | "Stable"; // Union Type
}

export const patients: Patient[] = [
    {
        id: 1,
        name: "Rahul Sharma",
        age: 45,
        disease: "Heart Attack",
        condition: "Critical"
    },
    {
        id: 2,
        name: "Anita Verma",
        age: 30,
        disease: "Fever",
        condition: "Stable"
    },
    {
        id: 3,
        name: "Mohit Singh",
        age: 60,
        disease: "Stroke",
        condition: "Critical"
    }
];