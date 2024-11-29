const AddCoffee = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mb-4">Add Coffee</h1>
      <div className="bg-slate-300 w-2/4 mx-auto p-5">
        <form>
          <div className="grid md:grid-cols-2 gap-5 w-full">
          <div>
            <label>Name</label> <br />
            <input
              className="border w-full p-2"
              type="text"
              placeholder="name"
            />
          </div>
          <div>
            <label>Chef</label> <br />
            <input
              className="border w-full p-2"
              type="text"
              placeholder="chef"
            />
          </div>
          <div>
            <label>Supplier</label> <br />
            <input
              className="border w-full p-2"
              type="text"
              placeholder="Supplier"
            />
          </div>
          <div>
            <label>Taste</label> <br />
            <input
              className="border w-full p-2"
              type="text"
              placeholder="Taste"
            />
          </div>
          <div>
            <label>Category</label> <br />
            <input
              className="border w-full p-2"
              type="text"
              placeholder="Category"
            />
          </div>
          <div>
            <label>Details</label> <br />
            <input
              className="border w-full p-2"
              type="text"
              placeholder="Details"
            />
          </div>
          </div>
          <div className="mt-5">
            <label>Photo Url</label> <br />
            <input
              className="border w-full p-2"
              type="text"
              placeholder="Photo Url"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
