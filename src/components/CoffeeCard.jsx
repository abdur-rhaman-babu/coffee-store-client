
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, category, photo } = coffee;
  //   console.log(coffees)

  const handleDeleteCoffee = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3500/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((coffee) => coffee._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="flex items-center gap-5 border p-5 shadow-lg">
        <div className="h-[200px] w-[150px]">
          <img className="w-full h-full" src={photo} alt="" />
        </div>
        <div className="flex-grow">
          <p>
            <span className="font-bold">Name: </span>
            {name}
          </p>
          <p>
            <span className="font-bold">Chef: </span>
            {chef}
          </p>
          <p>
            <span className="font-bold">Price: </span>
            {category}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <button>
            <FaEye size={35} />
          </button>
          <Link to={`/updateCoffee/${_id}`}>
            <button>
              <FaEdit size={35} />
            </button>
          </Link>
          <button
            onClick={() => handleDeleteCoffee(_id)}
            className="text-red-600"
          >
            <MdDelete size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
