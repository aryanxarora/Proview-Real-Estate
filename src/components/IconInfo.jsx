import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import KingBedRoundedIcon from "@mui/icons-material/KingBedRounded";
import ShowerRoundedIcon from "@mui/icons-material/ShowerRounded";
import CalendarViewMonthRoundedIcon from "@mui/icons-material/CalendarViewMonthRounded";

function IconInfo() {
  return (
    <div className="grid grid-cols-2 gap-y-5 lg:w-1/2 lg:gap-y-10 text-slate-500">
      <div>
        <HomeRoundedIcon fontSize="medium" />
        <p className="text-md">7 Rooms</p>
      </div>
      <div>
        <KingBedRoundedIcon fontSize="medium" />
        <p>2 Bed(s)</p>
      </div>
      <div>
        <ShowerRoundedIcon fontSize="medium" />
        <p>2 Bath(s)</p>
      </div>
      <div>
        <CalendarViewMonthRoundedIcon fontSize="medium" />
        <p>828.28 sq.ft.</p>
      </div>
    </div>
  );
}

export default IconInfo;
