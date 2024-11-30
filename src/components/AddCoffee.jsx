import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const AddCoffee = () => {
  const navigate = useNavigate()
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const coffee = { name, chef, supplier, taste, category, details, photo };
    console.log(coffee);

    fetch("http://localhost:3500/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'success',
                text: 'Added data successfully',
                icon: 'success',
                confirmButtonText: 'ok'
              })
        }
      });
      navigate('/')
  };
  return (
    <div>
      <div className="bg-slate-300 w-2/4 mx-auto p-5 mt-10">
        <h1 className="text-4xl text-center mb-4">Add Coffee</h1>
        <form onSubmit={handleAddCoffee}>
          <div className="grid md:grid-cols-2 gap-5 w-full">
            <div>
              <label>Name</label> <br />
              <input
                className="border w-full p-2"
                type="text"
                name="name"
                placeholder="name"
                required
              />
            </div>
            <div>
              <label>Chef</label> <br />
              <input
                className="border w-full p-2"
                type="text"
                name="chef"
                placeholder="chef"
                required
              />
            </div>
            <div>
              <label>Supplier</label> <br />
              <input
                className="border w-full p-2"
                type="text"
                placeholder="Supplier"
                name="supplier"
                required
              />
            </div>
            <div>
              <label>Taste</label> <br />
              <input
                className="border w-full p-2"
                type="text"
                placeholder="Taste"
                name="taste"
                required
              />
            </div>
            <div>
              <label>Category</label> <br />
              <input
                className="border w-full p-2"
                type="text"
                placeholder="Category"
                name="category"
                required
              />
            </div>
            <div>
              <label>Details</label> <br />
              <input
                className="border w-full p-2"
                type="text"
                placeholder="Details"
                name="details"
                required
              />
            </div>
          </div>
          <div className="mt-5">
            <label>Photo Url</label> <br />
            <input
              className="border w-full p-2"
              type="text"
              placeholder="Photo Url"
              name="photo"
              required
            />
          </div>
          <input 
            className="bg-purple-500 w-full mt-4 py-2 cursor-pointer text-white font-sem'"
            type="submit"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
