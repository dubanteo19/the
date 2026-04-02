import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <div className="flex flex-col md:px-4  min-h-screen  w-full ">
      <main className="flex-1  px-2 md:px-[100px] max-w-screen mx-auto w-full  mt-[50px]">
        <Outlet />
      </main>
    </div>
  );
};
