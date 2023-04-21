import ImageCarosel from "../components/ImageCoarosel";
import urlFor from "../utility/imageUrl";

const NewsDitails = (props) => {
  return (
    <div>
      <div className="h-full p-4 flex justify-center">
        <div className="mx-auto w-full md:max-w-[60rem]">

          <div className="text-3xl font-bold my-4">
            <h1>{props.item.title}</h1>
          </div>
          <div>
            <img src={urlFor(props.item.mainImage)} alt={props.item.title} className="h-full w-full object-cover" />
          </div>
          <div className="flex justify-end text-sm">
            <p>{props.item._createdAt}</p>
          </div>

          <div className="my-4">
            <p>
              {props.item.body.children.text}
            </p>
          </div>

          <div className="h-1 bg-green-500 w-24"></div>

          {props.item.images && <ImageCarosel images={props.item.images} />}
        </div>
      </div>

    </div>
  );
}

export default NewsDitails;