import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div>
        <Button variant={"destructive"}>Shadcn Button</Button>
        <p className="text-rose-500 text-2xl">Welcome to Bizify Ecommerce!</p>
      </div>
    </>
  );
}
