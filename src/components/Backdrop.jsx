export default function Backdrop({children}){
    return (
        <div className={`bg-white backdrop-blur-md rounded-lg drop-shadow-lg`}>
            {children}
        </div>
    );
}