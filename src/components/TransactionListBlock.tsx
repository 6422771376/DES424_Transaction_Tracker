import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

const TransactionListBlock = ({amount, payee, category, expense}: {
    amount: number,
    payee: string,
    category: string,
    expense: boolean
}) => {


    return (
        <Card className="w-full h-full p-4 grid grid-cols-3 items-center my-2">
            <h2 className={expense ? "text-red-500 text-xl" : "text-green-500 text-xl"}>
                ฿ {amount.toLocaleString()}
            </h2>

            <h2 className="text-xl text-gray-500 text-center col-span-1">
                {payee}
            </h2>

            <div className="flex justify-end col-span-1">
                <Badge className={expense ? "bg-red-500" : "bg-green-500"}>
                    {category}
                </Badge>
            </div>
        </Card>

    )
}

export default TransactionListBlock