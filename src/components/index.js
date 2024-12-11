import { BsFillStarFill } from "react-icons/bs";

export function HomeSocialIcons({ Icon, text, link }) {
    return (
        <a href={link} className="inline-block">
            <p className="bg-gray-900 aspect-square h-auto w-10 text-white text-xl grid place-content-center rounded-full cursor-pointer mx-auto">
                <Icon />
            </p>
            <p className="text-xs text-center mt-1">{text}</p>
        </a>
    );
}

export function HomeContactUsLinks({ Icon, text, link }) {
    return (
        <a href={link} className="flex items-center gap-2">
            <p className="bg-white text-gray-900 rounded-sm aspect-square w-8 flex justify-center items-center flex-shrink-0">
                <Icon />
            </p>
            <p className="text-white text-xs flex-shrink-1">{text}</p>
        </a>
    );
}

export function HomeContactUsLinkBottom({ Icon, link }) {
    return (
        <a
            href={link}
            className="w-8 aspect-square h-auto grid place-content-center bg-white text-gray-900 rounded-sm"
        >
            <Icon />
        </a>
    );
}

export function EnquiryTemplate({ heading, image, description, link }) {
    return (
        <div className="p-4 bg-gray-200 rounded-sm my-8">
            <h6 className="font-semibold">{heading}</h6>
            <p className="aspect-video overflow-hidden rounded-md mt-2">
                <img src={image} alt={heading} className="mx-auto" />
            </p>
            <p>{description}</p>
            <a
                href={link}
                className="bg-gray-900 text-white px-4 py-2 inline-block rounded-md mt-4"
            >
                Enquiry
            </a>
        </div>
    );
}

export function DisplayTestimonial({ data }) {
    return (
        <div className="border-b-2 pb-2">
            <p className="flex justify-between text-xs">
                <span className="capitalize">{data?.fullname}</span>
                <span>on {data?.date}</span>
            </p>
            <p className="flex items-center gap-1 my-1">
                {Array.from({ length: parseInt(data?.rating) }, (_, index) => (
                    <BsFillStarFill key={index} />
                ))}
            </p>
            <p className="text-xs">{data?.feedback}</p>
        </div>
    );
}


export function NavigationMenuItem({ Icon, text, link, active }) {
    return (
        <a href={link} className={`flex flex-col justify-center items-center text-xs ${`${active}` === link ? "text-white" : "text-gray-500"}`}>
            <Icon className="text-xl md:text-base" />
            <span className="hidden md:inline-block">{text}</span>
        </a>
    )
}