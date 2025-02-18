interface JudgeInfoProps {
  judgeName: string;
  judgePhoto: any;
  judgeDescription: string;
}

export const JudgeInfo = ({ judgeName, judgePhoto, judgeDescription }: JudgeInfoProps) => {
  return (
    <div className="avatar flex flex-col items-center gap-2">
      <div className="w-32 lg:w-40 xl:w-44 rounded-full">
        <img src={judgePhoto} />
      </div>
            <p className="font-[600] text-xl text-center">{judgeName}</p>
            <p className="font-[400] text-base text-center">{judgeDescription}</p>
    </div>
  );
};
