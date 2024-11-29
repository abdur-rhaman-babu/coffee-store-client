import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, chef, category, photo, supplier, taste, details } = coffee;
    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
    
        const updatedCoffee = { name, chef, supplier, taste, category, details, photo };
        console.log(coffee);
    
        fetch(`http://localhost:3500/coffees/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success',
                    text: 'Updated coffee successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
          });
      };
  return (
    <div>
      <div className="bg-slate-300 w-2/4 mx-auto p-5 mt-10">
        <h1 className="text-4xl text-center mb-4">Update Coffee</h1>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid md:grid-cols-2 gap-5 w-full">
            <div>
              <label>Name</label> <br />
              <input
                defaultValue={name}
                className="border w-full p-2"
                type="text"
                name="name"
                placeholder="name"
              />
            </div>
            <div>
              <label>Chef</label> <br />
              <input
                className="border w-full p-2"
                defaultValue={chef}
                type="text"
                name="chef"
                placeholder="chef"
              />
            </div>
            <div>
              <label>Supplier</label> <br />
              <input
                className="border w-full p-2"
                defaultValue={supplier}
                type="text"
                placeholder="Supplier"
                name="supplier"
              />
            </div>
            <div>
              <label>Taste</label> <br />
              <input
                className="border w-full p-2"
                defaultValue={taste}
                type="text"
                placeholder="Taste"
                name="taste"
              />
            </div>
            <div>
              <label>Category</label> <br />
              <input
                className="border w-full p-2"
                defaultValue={category}
                type="text"
                placeholder="Category"
                name="category"
              />
            </div>
            <div>
              <label>Details</label> <br />
              <input
                className="border w-full p-2"
                defaultValue={details}
                type="text"
                placeholder="Details"
                name="details"
              />
            </div>
          </div>
          <div className="mt-5">
            <label>Photo Url</label> <br />
            <input
              className="border w-full p-2"
              defaultValue={photo}
              type="text"
              placeholder="Photo Url"
              name="photo"
            />
          </div>
          <input
            className="bg-purple-500 w-full mt-4 py-2 cursor-pointer text-white font-sem'"
            type="submit"
            value="Update Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
