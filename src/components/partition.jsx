import { Allotment } from 'allotment';
import 'allotment/dist/style.css';

const Partition = ({ partition, handleSplitVertical, handleSplitHorizontal, handleRemovePartition }) => {
    const { id, color, splitDirection, children } = partition;

    return (
        <div
            className="w-full h-full"
            style={{ backgroundColor: color }}
        >
            {!children.length && (
                <div className='flex gap-3 justify-center items-center h-full p-2'>
                    <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded shadow transition ease-in-out delay-80' onClick={() => handleSplitVertical(id)}>V</button>
                    <button className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded shadow transition ease-in-out delay-80' onClick={() => handleSplitHorizontal(id)}>H</button>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow transition ease-in-out delay-80' onClick={() => handleRemovePartition(id)}>-</button>
                </div>
            )}

            {children.length > 0 && (
                <Allotment vertical={splitDirection === 'V'}>
                    {children.map((child) => (
                        <Allotment.Pane key={child.id}>
                            <Partition
                                partition={child}
                                handleSplitVertical={handleSplitVertical}
                                handleSplitHorizontal={handleSplitHorizontal}
                                handleRemovePartition={handleRemovePartition}
                            />
                        </Allotment.Pane>
                    ))}
                </Allotment>
            )}
        </div>
    );
};

export default Partition;
