import MyButton from "@/components/myButton";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-[100vh]">
      <h1>Esta é a home! =D </h1>
      <h2>O alberto é interessante</h2>
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  );
}
