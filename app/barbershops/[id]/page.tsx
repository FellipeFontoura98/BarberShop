import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import { getServerSession } from "next-auth";
import ServiceItem from "./_components/services-item";
import { authOptions } from "@/app/_lib/auth";

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {
  const session = await getServerSession(authOptions);

  if (!params.id) {
    // TODO: redirecionar para home page
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      Service: true,
    },
  });

  if (!barbershop) {
    // TODO: redirecionar para home page
    return null;
  }

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />

      <div className="px-5 flex flex-col gap-4 py-6">
        {barbershop.Service.map((service) => (
          <ServiceItem key={service.id} barbershop={barbershop} service={service} isAuthenticated={!!session?.user} />
        ))}
      </div>
    </div>
  );
};

export default BarbershopDetailsPage;