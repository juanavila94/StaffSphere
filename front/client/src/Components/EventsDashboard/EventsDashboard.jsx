import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents, getEventsIncoming } from "../../state/redux/actions/actions";

const EventsDashboards = () => {
  const dispatch = useDispatch()
    const currentEmployee = useSelector((state) => state.currentEmployee);
  const CompanyId = currentEmployee ? currentEmployee.CompanyId : null;
  const events = useSelector((state) => state.eventsIncoming);
  console.log(events, 'events');
  useEffect(() => {
    dispatch(getEventsIncoming(CompanyId))
  }, [dispatch])
  return (
    <div className="border bg-white rounded-md w-9/12 h-[400px] p-5 shadow-2xl flex flex-col ">
      <h2 className="mb-5 font-medium ">Upcoming events</h2>
      <div className="flex flex-col gap-3 overflow-auto">
        {Array.isArray(events)
          ? events?.map((event) => {
              return (
                <div className="bg-slate-100 relative border rounded-md p-3 shadow-md break-all flex flex-col gap-2">
                  <h3 className="text-sky-400 text-base">{event.title}</h3>
                  <h4 className="text-xs text-gray-500">{event.description}</h4>
                  <span className="absolute right-2 top-2 text-gray-400 text-xs ">
                    {event.day.slice(0, 10)}
                  </span>
                </div>
              );
            })
          : events}
      </div>
    </div>
  );
}

export default EventsDashboards;