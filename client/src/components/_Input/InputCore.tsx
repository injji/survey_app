interface InputCore {
    className?:string;
}

const InputCore = ({ className} : InputCore) => {
    return (
        <>
            <input className={className} />
        </>
    );
};

export default InputCore;