import { useEffect, useRef, useState, useMemo } from "react";
import type { Patient } from "../data/patient";

const initialPatients: Patient[] = [
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
        condition: "Stable"
    }
];

export const usePatients = () => {
    const [patients, setPatients] = useState<Patient[]>(initialPatients);

    // Persist timer without causing re-renders
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setPatients((prevPatients) => {
                return prevPatients.map((patient) => {
                    // Randomly toggle condition
                    if (Math.random() > 0.7) {
                        return {
                            ...patient,
                            condition:
                                patient.condition === "Critical"
                                    ? "Stable"
                                    : "Critical"
                        };
                    }
                    return patient;
                });
            });
        }, 5000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    // Memoize list to avoid unnecessary recalculation
    const memoizedPatients = useMemo(() => {
        console.log("Memoized patient list recalculated");
        return patients;
    }, [patients]);

    return { patients: memoizedPatients };
};