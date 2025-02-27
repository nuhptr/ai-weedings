import CustomCard from "@/features/auth/card"

export default function SignInPage() {
    return (
        <main className="flex flex-col gap-12 text-white">
            <div className="flex items-center flex-col gap-2">
                <h1 className="text-6xl font-semibold">WEEDINGS</h1>
                <p className="font-medium tracking-normal leading-[130%] text-center text-xl">
                    Magical moments in an enchanting atmosphere
                </p>
            </div>
            <CustomCard />
        </main>
    )
}
