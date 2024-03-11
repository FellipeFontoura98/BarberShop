"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";


const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between items-center flex flex-row">
        <Image src="/logo.png" alt="FSW Barber" height={18} width={120} />
      </CardContent>
    </Card>
  );
};

export default Header;