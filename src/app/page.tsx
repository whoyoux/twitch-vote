import Vote from "@/components/vote";
import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  const session = await getAuthSession();
  return (
    <main className="py-20">
      {!!session ? (
        <Vote />
      ) : (
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          You have to log in to use our service
        </h2>
      )}
    </main>
  );
}
