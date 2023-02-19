import Datastc from "../dbitems/dbit";

const OptionsItems = () => {

  let data = null;
  const { Industries } = Datastc()
  data = Industries;
  console.log("items1", data);

  return (
    <div>
      {/* <!-- Options begin --> */}
      <div className="bg-gray-300 lg:px-40 pb-14">

        <div className="flex justify-start mx-10">
          <span className="font-bold text-2xl mt-5 mb-3 font-serif"> Industries </span>
        </div>

        <div className="h-1 bg-gray-400 rounded-box mb-5 mx-10 lg:mx-0"></div>

        <div className="h-full px-4 grid sm:grid-cols-2 md:grid-cols-5">
          {/* <!-- item 1 --> */}

          {data.map((item) => (
            <div className="flex justify-center">
              <div className="col-span-1 mx-4 my-4">
                <a href="test.html" className="hover:opacity-60">
                  <img src={item.picPath} alt="option" className="h-64 w-full object-cover border border-green-700" />
                </a>

                <div className="text-black">
                  <h1 className="font-bold font-serif text-3xl">AS</h1>
                  <h2 className="text-xl">{item.title}</h2>
                  <div className="h-1 my-3 bg-green-700 w-14"></div>
                  <div className="font-light">
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>


      </div>
      {/* <!-- Options end --> */}
    </div>
  );
}

export default OptionsItems;