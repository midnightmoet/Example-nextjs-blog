import Image from 'next/image';

const YourComponent = () = (
    <Image
        src="/images/lisa.jpg" //route to image
        width={144} //desired size w/correct aspect ratio
        height={144} //desired size w/correct aspect ratio
        alt="Lisa"
    />
);

export default YourComponent;

// this is from the docs and will figure it out later