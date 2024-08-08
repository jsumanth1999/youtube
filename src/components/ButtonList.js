import Button from "./Button";


const ButtonList = () => {

    const list = ["All", "News", "Videos", "Music", "Cricket", "Cooking", "Games", "Live", "Java", "JavaScript", "Node"];


    return (
        <div className="flex flex-wrap overflow-x-scroll">
            {
                list.map((activity) => <Button key={activity} name={activity}/>)
            }
        </div>
    )
};

export default ButtonList;
