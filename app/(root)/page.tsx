import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className=" flex flex-col gap-6 max-w-lg">
          <h2>
            Practise your Interviewing skills with AI interviews and feedback{" "}
          </h2>
          <p className=" text-lg">Custom interviews made just for you!</p>
          <Button
            className="!w-full !bg-[#FFA500] !text-white hover:!bg-[#FFA500CC] !rounded-full !min-h-10 !font-bold !px-5 cursor-pointer; max-sm:w-full"
            asChild
          >
            <Link href={"/interview"}>Take Interview</Link>
          </Button>
        </div>
        <Image
          alt=""
          src={"/roboto.png"}
          height={400}
          width={400}
          className=" max-sm:hidden"
        />
      </section>
      <section className=" flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
          <p>No Interviews yet!</p>
        </div>
      </section>
      <section className=" flex flex-col gap-6 mt-8">
        <h2>All Interviews</h2>
        <div className="interviews-section">
          <p>No Interviews available!</p>
        </div>
      </section>
    </>
  );
};

export default page;
