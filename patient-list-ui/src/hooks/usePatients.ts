import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import type { Patient } from "../data/patient";

const initialPatients: Patient[] = [
    {
        id: 1,
        name: "Ankit",
        age: 28,
        disease: "Malaria",
        condition: "Critical"
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
        name: "Mohit Singh",
        age: 25,
        disease: "Blood Cancer",
        condition: "Critical"
    }
];

export const usePatients = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Persist polling timer
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Persist abort controller
    const abortRef = useRef<AbortController | null>(null);

    // 🔹 Fetch function (resilient)
    const fetchPatients = useCallback(async () => {
        abortRef.current?.abort(); // cancel previous request
        const controller = new AbortController();
        abortRef.current = controller;

        try {
            setLoading(true);
            setError(null);

            // Simulated API delay
            await new Promise((resolve) => setTimeout(resolve, 1200));

            if (controller.signal.aborted) return;

            // Simulated failure (random)
            if (Math.random() > 0.8) {
                throw new Error("Failed to fetch patients");
            }

            setPatients(initialPatients);

        } catch (err: any) {
            if (!controller.signal.aborted) {
                setError(err.message);
            }
        } finally {
            if (!controller.signal.aborted) {
                setLoading(false);
            }
        }
    }, []);

    // 🔹 Initial fetch
    useEffect(() => {
        fetchPatients();

        return () => {
            abortRef.current?.abort();
        };
    }, [fetchPatients]);

    // 🔹 Keep your polling logic (auto status toggle)
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setPatients((prevPatients) =>
                prevPatients.map((patient) => {
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
                })
            );
        }, 5000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    // 🔹 Memoize list (unchanged behavior)
    const memoizedPatients = useMemo(() => {
        return patients;
    }, [patients]);

    return {
        patients: memoizedPatients,
        loading,
        error,
        retry: fetchPatients
    };
};