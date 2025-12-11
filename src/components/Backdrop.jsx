export default function Backdrop({width, height,children}){
    return (
        <div style={{
            width: width,
            height: height
        }}
        className="bg-white backdrop-blur-md rounded-lg p-2 drop-shadow-lg ">
            {children}
        </div>
    );
}