const Skeleton = () => {
    return (
        <div
            style={{
                height: "80px",
                background: "#e0e0e0",
                marginBottom: "12px",
                borderRadius: "6px",
                animation: "pulse 1.5s infinite"
            }}
        />
    );
};

export default Skeleton;