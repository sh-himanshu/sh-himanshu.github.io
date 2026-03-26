export function Background() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/gradients/ultravibe-02.png)" }}
            />
        </div>
    );
}
