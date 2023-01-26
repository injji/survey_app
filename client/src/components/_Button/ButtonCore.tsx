import styled from "styled-components"

interface BtnCore {
    children: React.ReactNode;
    className?: string;
}

const ButtonCore = ({ className, children }: BtnCore) => {
    return (
        <BtnCore className={className}>
            {children}
        </BtnCore>
    );
};

const BtnCore = styled.button`
width: 100%;
    height: 50px;
    border-radius: 10px;
    font-size: 15px;
    line-height: 18px;

&.orange {
background: #FC6111;
color:#fff;
font-weight: 700;
}

&.yellow {
    background: #FF8A00;
    color:#fff;
font-weight: 700;
}

&.none {
    background:none;
    color:#FC6111;
}
`;

export default ButtonCore;