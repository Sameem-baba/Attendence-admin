import Image from "next/image";

function Student({ email }) {
  return (
    <div className="flex h-full w-full space-x-4 cursor-pointer items-center justify-around">
      <Image
        className="rounded-full"
        height={60}
        width={60}
        src={`https://avatars.dicebear.com/api/pixel-art/${email}.svg`}
      />
      <h1>{email}</h1>
    </div>
  );
}

export default Student;
