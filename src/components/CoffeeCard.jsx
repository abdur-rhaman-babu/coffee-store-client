import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({coffee}) => {
    const {name,chef,category,photo} = coffee;
    return (
        <div>
            <div className="flex items-center gap-5 border p-5 shadow-lg">
                <div className="h-[200px] w-[150px]">
                    <img className="w-full h-full" src={photo} alt="" />
                </div>
                <div className="flex-grow">
                    <p><span className="font-bold">Name: </span>{name}</p>
                    <p><span className="font-bold">Chef: </span>{chef}</p>
                    <p><span className="font-bold">Price: </span>{category}</p>
                </div>
                <div className="flex flex-col gap-5">
                    <button><FaEye size={35} /></button>
                    <button><FaEdit size={35} /></button>
                    <button><MdDelete size={35}/></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;