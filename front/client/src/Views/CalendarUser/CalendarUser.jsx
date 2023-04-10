import CalendarAPI from "./CalendarAPI";
import ContextWrapper from "./context/ContextWrapper";

const CalendarUser = () => {
  return (
    <div className="w-full h-screen">
      <ContextWrapper>
        <CalendarAPI />
      </ContextWrapper>
    </div>
  );
};

export default CalendarUser;
