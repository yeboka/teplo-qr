import {Link} from "react-router-dom";

function Card({box}) {

    const imageUrl = `../assets/${box.img_url}.jpg`;

    return (
        // eslint-disable-next-line react/prop-types
        <Link to={`/boxes/${box.name}`}
              className="max-w-sm w-full mr-4 mb-4 border border-[#E98074] rounded-lg shadow bg-[#EAE7DC]">

            {
                box.img_url ?
                <img className="object-cover rounded-t-lg w-full h-2/3"
                     src={window.location.origin + `/images/${box.img_url}.jpg`} alt=":/"/> :
                <></>
            }


            <div className={box.img_url ? "h-1/3 px-5 flex flex-col justify-center " : "p-5 flex flex-col justify-center "}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#E85A4F]">
                    {box.name}
                </h5>
                <p className={box.description ? "" : "" + `font-normal text-gray-700 dark:text-gray-400`}>
                    {box.description}
                </p>
            </div>
        </Link>
    );
}

export default Card;