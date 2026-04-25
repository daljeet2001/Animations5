import Cardx from "../components/Card"

export default function Page() {
    return (
        <div className="h-screen grid grid-cols-1 md:grid-cols-3 p-50 gap-8">
            <Cardx />
            <Cardx />
            <Cardx />
        </div>
    )
}