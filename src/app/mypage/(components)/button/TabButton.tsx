"use client";
import React, { useState } from "react";

interface TabData {
    id: number;
    title: string;
    section: JSX.Element;
}

interface TabComponentProps {
    data: TabData[];
}

const TabComponent = ({ data }: TabComponentProps) => {
    const [index, setIndex] = useState<number>(0);

    return (
        <>
            <div className="flex space-x-2 text-[18px] space-x-[38px]" style={{ borderBottom: "1px solid #E6E6E6" }}>
                {data.map(item => (
                    <button
                        key={item.id}
                        style={index === item.id ? { borderBottom: "2px solid black", textDecoration: "none", fontWeight: 600 } : { color: "#808080" }}
                        onClick={() => setIndex(item.id)}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
            {data.find(item => item.id === index)?.section}
        </>
    );
};

export default TabComponent;
