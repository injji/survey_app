import styles from "./style.scss"

interface BtnCore {
    children: React.ReactNode;
    className?: string;
}

const ButtonCore = ({ className, children }: BtnCore) => {
    return (
        <button className={className}>
            {children}
        </button>
    );
};

export default ButtonCore;