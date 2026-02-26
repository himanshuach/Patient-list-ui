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
        name: "Ankit",
        age: 28,
        disease: "Malaria",
        condition: "Stable"
    },
    {
        id: 2,
        name: "Priya",
        age: 30,
        disease: "Fever",
        condition: "Stable"
    },
    {
        id: 3,
        name: "Mohit",
        age: 25,
        disease: "Blood Cancer",
        condition: "Critical"
    }
];