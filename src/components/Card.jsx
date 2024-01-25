import {Link} from "react-router-dom";

function Card({box}) {

    const imageUrl = `../assets/${box.img_url}.jpg`;

    return (
        // eslint-disable-next-line react/prop-types
        <Link to={`/boxes/${box.name}`} className="max-w-sm w-full mr-4 mb-4 border border-[#E98074] rounded-lg shadow bg-[#EAE7DC]">

            <img className="rounded-t-lg" src={imageUrl} alt=""/>

            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#E85A4F]">
                    {box.name}
                </h5>
                <p className={box.description ? "mb-3" : "" + `font-normal text-gray-700 dark:text-gray-400`}>
                    {box.description}
                </p>
            </div>
        </Link>
    );
}

export default Card;