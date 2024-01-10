"use client";
import { useState } from 'react';

const SelectBoxButton = ({ options }: { options: string[] }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        <div className="h-[44px] py-[1px] px-[21px] border-[1px] rounded-[6px] border-neutral-30 rounded-lg text-[18px] text-neutral-60 flex items-center">
            <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectBoxButton;
