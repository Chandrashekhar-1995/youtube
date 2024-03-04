import Button from "./Button"

const ButtonList = () => {
  const list = ["All", "live", "News", "StockMarket", "Gaming", "Ai", "ComputerScience", "Live", "BollyboodMusic", "AudioBooks", "Thougths", "CivilServicesExam", "ComedyClubs", "Mantras", "TamilCinema", "IndianPopMusic", "History", "Dramedy", "RecentlyUploaded", "Watched", "NewToyou"];
  return (
    <div className="flex">
        {list.map((list)=><Button key={list} name={list}/>)}
    </div>
  )
}

export default ButtonList