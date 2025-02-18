interface JudgeInfoProps {
  judgeName: string;
}

export const JudgeInfo = ({ judgeName }: JudgeInfoProps) => {
  return (
    <div className="avatar flex flex-col items-center justify-center gap-2">
      <div className="w-28 lg:w-32 xl:w-36 rounded-full">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      </div>
      <div>
            <p className="font-[600] text-xl">{judgeName}</p>
      </div>
    </div>
  );
};
