"use client";
import Btn from "./components/btn";

export default function Errors() {
  return (
    <div className="my-8 flex flex-col items-center">
      <Btn href="/" text="← Go to Home" />
      <p className="text-xl my-8">¯\_(ツ)_/¯ &nbsp;&nbsp; Nothing here to see !</p>
    </div>
  );
}
