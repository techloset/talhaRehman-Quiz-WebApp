import React from 'react';

const ResultTable = () => {
  return (
    <div className="p-4 mt-16">
      <table className="w-full bg-gray-800 text-white">
        <thead>
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Attempts</th>
            <th className="p-3">Earn Points</th>
            <th className="p-3">Result</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          <tr>
            <td className="p-3">Talha</td>
            <td className="p-3">03</td>
            <td className="p-3">40</td>
            <td className="p-3">Pass</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
