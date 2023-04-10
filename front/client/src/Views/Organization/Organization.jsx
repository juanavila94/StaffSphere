import SideBar from "../../Components/SideBar/SideBar";

const Organization = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-1 h-screen">
      <SideBar />
      <div className="col-span-5 p-8">
        <span>View Organization</span>
      </div>
    </div>
  );
};

export default Organization;
