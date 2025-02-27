export default function AuthLayout({ children }: childrenProps) {
    return (
        <section className="relative w-dvw h-dvh flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1507915977619-6ccfe8003ae6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            {/* Overlay untuk membuat background lebih gelap */}
            <div className="absolute inset-0 bg-black/60 blur-3xl z-10" />
            {/* Content */}
            <div className="w-full max-w-2xl p-10 relative z-20">{children}</div>
        </section>
    )
}
