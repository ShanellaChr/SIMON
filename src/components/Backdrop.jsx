export default function Backdrop({className ="", children}){
    return (
        <div className={`${className} bg-white backdrop-blur-md rounded-lg p-2 drop-shadow-lg`}>
            {children}
        </div>
    );
}