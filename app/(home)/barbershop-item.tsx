
import Image from "next/image";
import { Card, CardContent } from "../_components/ui/card";
import { Barbershop } from '@prisma/client'
import { Button } from "../_components/ui/button";

interface BarbershopItemProps {
    barbershop: Barbershop;
}


const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
    return (
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="p-0">
                <Image 
                alt={barbershop.name} 
                src={barbershop.imageUrl} 
                height={0} 
                width={0} 
                sizes="100vw"
                className="h-[159px] w-full rounded-2xl"
                />

                <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                <Button className="w-full mt-3" variant="secondary">Reservar</Button>
            </CardContent>
        </Card>
    );
}
 
export default BarbershopItem;