const ProgressBar = ({ progress }: { progress: number }) => {

    return (
        <div className="relative">
            <div className="h-[7px] w-full bg-neutral-0 border-[1px] border-neutral-10 rounded-full">
                <div
                    className="bg-primary-60 h-[7px] rounded-full"
                    style={{
                        width: `${progress}%`,
                    }}
                />
            </div>
            <div className="absolute top-[1px] left-0 flex justify-between w-full items-center z-999">
                {[...Array(9)].map((_, index) => (
                    <span
                        key={index}
                        className={`inline-block w-[6px] h-[6px] rounded-full ${index <= Math.floor((progress / 100) * 9) ? 'bg-primary-100' : 'bg-neutral-10'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProgressBar;