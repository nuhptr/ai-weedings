export default function AuthLayout({ children }: childrenProps) {
    return (
        <section className="relative w-dvw h-dvh flex items-center justify-center">
            <div className="w-full max-w-2xl p-10">{children}</div>
        </section>
    )
}
