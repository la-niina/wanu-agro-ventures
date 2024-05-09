import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export default function Herbiary() {
    const herbs = [
        {
            name: "abords",
            image: "",
            description: "",
            usage: "",
        },
        {
            name: "abords",
            image: "",
            description: "",
            usage: "",
        },
        {
            name: "abords",
            image: "",
            description: "",
            usage: "",
        },
        {
            name: "abords",
            image: "",
            description: "",
            usage: "",
        },
        {
            name: "abords",
            image: "",
            description: "",
            usage: "",
        },
        {
            name: "abords",
            image: "",
            description: "",
            usage: "",
        },
        {
            name: "abords",
            image: "",
            description: "",
            usage: "",
        },
        {
            name: "abords",
            image: "",
            description: "",
            usage: "",
        },
        {
            name: "abords",
            image: "",
            description: "",
            usage: "",
        },
        {
            name: "abords",
            image: "",
            description: "",
            usage: "",
        },
        {
            name: "abords",
            image: "",
            description: "",
            usage: "",
        },
        {
            name: "abords",
            image: "",
            description: "",
            usage: "",
        },
        {
            name: "abords",
            image: "",
            description: "",
            usage: "",
        },
        {
            name: "abords",
            image: "",
            description: "",
            usage: "",
        },
        {
            name: "abords",
            image: "",
            description: "",
            usage: "",
        },
        {
            name: "abords",
            image: "",
            description: "",
            usage: "",
        },
        {
            name: "abords",
            image: "",
            description: "",
            usage: "",
        },
        {
            name: "abords",
            image: "",
            description: "",
            usage: "",
        },
    ]

    return (
        <section className="flex flex-col gap-5 bg-[#1B1C15] min-h-screen py-20"
            style={{ backgroundImage: "url('/wallpaper/folowing-growiht.png')" }}>
            <div className="container flex flex-row gap-5">
                <Input
                    placeholder="search for a herb..."
                    className="md:max-w-md rounded-[5px] border-[0.1px] border-[#D5EC9C]" />
            </div>

            <div className="container grid grid-cols-2 md:grid-cols-6 gap-5">
                {herbs.map((item, index) => (
                    <Card key={index}>
                        <CardContent className="h-32">

                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex flex-row items-center justify-center">
                <Pagination>
                    <PaginationContent className="rounded-full bg-[#D5EC9C] hover:bg-[#D5EC9C] text-black">
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </section>
    )
}