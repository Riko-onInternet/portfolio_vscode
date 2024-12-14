export const LeftMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row">
      <div className="bg-red-500 w-[10%]"></div>
      <div className="bg-green-500 lg:w-[18%] hidden lg:block"></div>
      <div className="bg-blue-500 w-[90%] lg:w-full">{children}</div>
    </div>
  );
};
