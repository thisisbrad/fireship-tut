import { prisma } from "@/lib/prisma";
import UserCard from "@/components/UserCard/UserCard";
export default async function Users() {
  const users = await prisma.user.findMany();
  return (
    <>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </>
  );
}
