import { getAuthSession } from "@/lib/auth";

const Vote = () => {
  const session = getAuthSession();

  return <div>{JSON.stringify(session, null, 2)}</div>;
};

export default Vote;
