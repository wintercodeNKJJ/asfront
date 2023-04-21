import { useStateContext } from "../context/StateContext";
import Datastc from "../dbitems/dbit";
import urlFor from "../utility/imageUrl";

/**
 * This block is used to chanel latest news to a particular page
 * for the users to stay informed of africa systems activites
 * @returns news from Africa systems activites
 */
const TopNewsBlock = () => {

  const { lang } = useStateContext();
  const { Industries } = Datastc("industries", lang);

  let show = true;
  if (Industries.length <= 0) {
    show = false
  }

  return (
    <div>
      {show &&

        <div>
          <div className=" px-8 lg:px-40 py-10 grid lg:grid-cols-2 grid-cols-1 gap-8">
            <div className="">
              {/* <!--news images --> */}
              <div className="flex">
                <img src={urlFor(Industries[0].mainImage)} alt={Industries[0].title} className="w-1/3 h-60 object-cover" />
                <img src={urlFor(Industries[1].mainImage)} alt={Industries[1].title} className="w-1/3 h-60 object-cover" />
                <img src={urlFor(Industries[2].mainImage)} alt={Industries[2].title} className="w-1/3 h-60 object-cover" />
              </div>
              {/* <!--news images --> */}

              {/* <!-- news text begin--> */}
              <div className="mt-4">
                <h1 className="font-bold text-xl">{Industries[0].title}|{Industries[1].title}|{Industries[2].title}</h1>
                <div className="mt-2 font-light text-justify">
                  <p>{Industries[0].body.children.text}</p>
                </div>
              </div>
              {/* <!-- news text end--> */}

            </div>

            <div>
              {/* <!-- news image --> */}
              <img src={urlFor(Industries[2].mainImage)} alt={Industries[2].title} className="h-60 object-cover w-full" />
              {/* <!-- news image --> */}

              {/* <!-- news text begin--> */}
              <div className="mt-4">
                <h1 className="font-bold text-xl">{Industries[2].title}</h1>
                <div className="mt-2 font-light text-justify">
                  <p>{Industries[2].body.children.text.substring(0,400)}...</p>
                </div>
              </div>
              {/* <!-- news text end--> */}
            </div>
          </div>
        </div>

      }
    </div>
  );
}

export default TopNewsBlock;