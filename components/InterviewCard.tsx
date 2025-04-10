import React from "react";
import dayjs from "dayjs";
import Image from "next/image";
import { getRandomInterviewCover } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import TechIcons from "./TechIcons";

const InterviewCard = ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM D, YYYY");
  return (
    <div className=" card-border bg-gradient-to-b from-[#4B4D4F] to-[#4B4D4F33] w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview">
        <div>
          <div className=" absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-[#2a2a2a]">
            <p className="badge-text">{normalType}</p>
          </div>
          <Image
            src={getRandomInterviewCover()}
            alt="cover-image"
            width={90}
            height={90}
            className=" rounded-full object-fit size-[90px]
            "
          />
          <h3 className=" mt-5 capitalize">{role} Interview</h3>
          <div className=" flex flex-row gap-5 mt-3">
            <div className=" flex flex-row gap-2">
              <Image
                src={"/calendar.svg"}
                alt={"calender"}
                width={22}
                height={22}
              />
              <p>{formattedDate}</p>
            </div>
            <div className=" flex flex-row gap-2 items-center">
              <Image src={"/star.svg"} height={22} width={22} alt="star" />
              <p>{feedback?.totalScore || "---"}/100</p>
            </div>
          </div>
          <p className=" line-clamp-2 mt-5">
            {feedback?.finalAssessment || "Interview not attempted yet"}
          </p>
        </div>
        <div className=" flex flex-row justify-between">
          <TechIcons techStack={techstack} />
          <Button className="w-fit !bg-[#FFA500] !text-white hover:!bg-[#FFA500CC] !rounded-full !font-bold px-5 cursor-pointer min-h-10">
            <Link
              href={
                feedback
                  ? `/interview/${interviewId}/feedback`
                  : `/interview/${interviewId}`
              }
            >
              {feedback ? "View Feedback" : "View Interview"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
