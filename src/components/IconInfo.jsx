import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import KingBedRoundedIcon from "@mui/icons-material/KingBedRounded";
import ShowerRoundedIcon from "@mui/icons-material/ShowerRounded";
import CalendarViewMonthRoundedIcon from "@mui/icons-material/CalendarViewMonthRounded";

function IconInfo() {
  return (
    <div className="flex gap-10 md:w-full text-slate-500">
      <div>
        <HomeRoundedIcon fontSize="medium" />
        <p>7 Rooms</p>
      </div>
      <div>
        <KingBedRoundedIcon />
        <p>2 Bed(s)</p>
      </div>
      <div>
        <ShowerRoundedIcon />
        <p>2 Bath(s)</p>
      </div>
      <div>
        <CalendarViewMonthRoundedIcon />
        <p>828.28 sq.ft.</p>
      </div>
    </div>
  );
}

export default IconInfo;
