function HomePage() {

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                textAlign: "center",
                paddingTop: "40px"
            }}
        >
            <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
                Welcome to AcademiX
            </h1>

            <p style={{ fontSize: "18px", maxWidth: "600px" }}>
                This is your student management system.
            </p>
        </div>
    );
}

export default HomePage;
