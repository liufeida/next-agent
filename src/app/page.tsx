import { redirect } from "next/navigation";

const Page = () => {
  redirect("/login");
  return <>init pages</>;
};

export default Page;
