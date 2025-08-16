import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-y-4 p-4">
        <div>
          <Button variant="elevated">Shadcn Button</Button>
        </div>
        <div>
          <Input placeholder="enter your search text" />
        </div>
        <div>
          <Progress value={80}></Progress>
        </div>
        <div>
          <Textarea placeholder={"I am a textarea"}></Textarea>
        </div>
        <div>
          <Checkbox></Checkbox>
        </div>
        <p className="text-rose-500 text-2xl">Welcome to Bizify Ecommerce!</p>
      </div>
    </>
  );
}
